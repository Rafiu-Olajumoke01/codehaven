import React from 'react'
import BannerVideo from './../../Assets/codeHaven homeBanner Video.mp4'
import TypedText from '../../components/TypedText'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {

    const strings = ['Welcome to CodeHaven']
    return (
        <div className='container-fluid banner'>
            <video src={require('./../../Assets/codeHaven homeBanner Video.mp4')} className='bannerVideo' autoPlay muted loop id='bg-video'></video>
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <h5 className='mt-5 fw-bold  animate'>
                    <TypedText strings={strings} />
                </h5>
                <h1>Empowering you with top-notch coding skills</h1>

                <div className="banner-btn">
                    <Link to='/'>Discover More</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
