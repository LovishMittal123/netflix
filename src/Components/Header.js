import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATAR_URL, LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { Language } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const dispatch=useDispatch();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
      navigate("/error");
    }
  };
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL}= user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
        
      }
    });
    return ()=>unsubscribe()
  },[])
    const handleGptSearch=()=>{
      dispatch(toggleGptSearchView())
    }
    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className='w-44' src={LOGO} alt='logo' />
      {user ? (
        <div className='flex items-center'>
          { showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
           {Language.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name }</option>
           ))}
          </select>}
        <button className='bg-purple-500 text-white py-2 px-4 rounded-lg m-2' onClick={handleGptSearch}>
          {showGptSearch?"Home Page":"GPT Search"}
        </button>
          <img className='w-12 h-12' src={AVATAR_URL} alt="profile" />
          <button onClick={handleSignOut} className='text-white font-bold ml-2'>(Sign Out)</button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;

