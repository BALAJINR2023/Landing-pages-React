import './App.css'
import React from 'react'
import Navbar from './webpage component/Navbar/Navbar'
import Hcards from './webpage component/Head&Foot/Hcards'
import Iconncard from './webpage component/Icon01/Iconn card'
import {data} from './data'
import Fcards from './webpage component/Head&Foot/Fcards'
import Detailcont from './webpage component/Detailcont/Detailcont'
import Iconnig from './webpage component/Icon02/Iconnig'
import Lasticon from './webpage component/Lasticon/Lasticon.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hcards/>
    <div className='iconcard'>{data.map((val)=>(<Iconncard {...val} key={val.title}/>))}</div>
    <div className='box'>{data.map((val)=>(<Detailcont {...val} key={val.title}/>))}</div>
    <div className='interdesc'>What people are saying...</div>
    <div className='iconcard'>{data.map((val)=>(<Iconnig {...val} key={val.title}/>))}</div>
    <Fcards/>
    <Lasticon/>
    </>
  )
}

export default App
