import React from 'react'
import NavigationBar from './../../components/Navbar/Navbar'
import Banner from '../Banner/Banner'
import Courses from '../Courses/Courses'

function Home() {
  return (
    <div>
      <div className="navigationTag">
        <NavigationBar />
      </div>

      <div className="bannerTag">
        <Banner />
      </div>

      <div className="coursesTag mt-5">
        <Courses />
      </div>
    </div>
  )
}

export default Home
