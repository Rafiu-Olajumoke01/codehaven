import React from 'react'
import { FaPen } from "react-icons/fa6";
function Courses() {
    return (
        <div className="courses_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 all_courses">

                        <h4>ALL COURSES</h4>
                    </div>

                    <div className="col-md-4 vitual_class">
                        <h4>VIRTUAL CLASS</h4>
                    </div>

                    <div className="col-md-4 vitual_class">
                        <h4>REAL MEETING</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
