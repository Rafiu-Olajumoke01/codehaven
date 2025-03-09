import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import './Courses.css'
function Courses() {
    return (
        <div className="container courses_section">
            <div className="row">
                <div className="col-md-4 all_courses">
                    <h5><FaPen size={20} /> ALL COURSES</h5>
                    <p>Enhance your skills with our well-structured courses, <br />
                        designed for beginners and experts alike. Learn at your own pace
                        with industry-relevant content.
                    </p>
                </div>

                <div className="col-md-4 vitual_class">
                    <h5> <FaGraduationCap size={30} />VIRTUAL CLASS</h5>
                    <p>Learn from anywhere with our interactive and engaging virtual classes. <br />
                        Get real-time guidance from experts and collaborate with fellow learners.
                    </p>
                </div>

                <div className="col-md-4 real_meeting">
                    <h5><FaBook size={20} />REAL MEETING</h5>
                    <p>Get hands-on experience, collaborate with fellow learners,  <br />
                    and meet industry experts in our physical workshops and real-world training sessions.</p>
                </div>
            </div>
        </div>
    )
}

export default Courses
