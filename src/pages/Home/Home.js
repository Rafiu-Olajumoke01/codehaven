import React from 'react'
import NavigationBar from './../../components/Navbar/Navbar'
import Banner from '../Banner/Banner'
import Courses from '../Courses/Courses'
import ChooseUs from '../Why Choose Us/ChooseUs'
import MainBanner from '../MainBanner/MainBanner'


function Home() {
  return (
    <div>
      <div className="navigationTag">
        <NavigationBar />
      </div>

      <div className="bannerTag">
        <Banner />
      </div>

      <div className="coursesTag">
        <Courses />
      </div>

      <div className="chooseTag">
        <ChooseUs />
      </div>

      <div className="mainbannerTag">
        <MainBanner/>
      </div>
    </div>
  )
}

export default Home
