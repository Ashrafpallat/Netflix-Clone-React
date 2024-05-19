import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src= {hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src= {hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an imortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'>  <img src={play_icon} alt="" /> Play</button>
            <button className='btn dark-btn'> <img src={info_icon} alt="" /> More Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={'Blockbuste Movies'} category={'top_rated'}/>
      <TitleCard title={'Only on Netflix'} category={'popular'}/>
      <TitleCard title={'Upcoming'} category={'upcoming'}/>
      <TitleCard title={'Top pics for you'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
