import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import SideCart from './Component/SideCart/SideCart'

function App() {
  const [watchTime, setwatchTime] = useState("");
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
  return (
    <div className="App">
      <div className='main-container'>
        <div className='home-container'>
          <Home handlWatchTime={handlWatchTime}></Home>
        </div>
        <div className='side-container'>
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
