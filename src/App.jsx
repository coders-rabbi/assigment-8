import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import SideCart from './Component/SideCart/SideCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setwatchTime] = useState("");
  const [bookmark, setBookmark] = useState([])
  const handlWatchTime = (time) => {

    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if(previousWatchTime){
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setwatchTime(sum);
    }
    else{
      localStorage.setItem("watchTime", time);
      setwatchTime(time);
    }
  }
  

  const handlBlogTitle = (title,id) => {
    let storedBookmark = JSON.parse(localStorage.getItem("bookmark") || '[]');
    let index = storedBookmark.findIndex(index => index.id === id); 
    if(index === -1){
      storedBookmark.push({title,id});
      localStorage.setItem('bookmark', JSON.stringify(storedBookmark));
      toast("Bookmark added successfully");
      setBookmark(storedBookmark)
    }
    else{
      toast("Already Added");
      return;
    }
  }
  return (
    <div className="App">
      <div className='main-container'>
        <div className='home-container'>
          <Home handlWatchTime={handlWatchTime} handlBlogTitle={handlBlogTitle}></Home>
        </div>
        <div className='side-container'>
          <SideCart watchTime={watchTime} setBookmark={setBookmark}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
