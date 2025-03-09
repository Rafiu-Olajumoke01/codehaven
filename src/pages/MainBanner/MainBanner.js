import React, { useState, useEffect } from "react";
import moment from "moment";
import "./mainbanner.css";

function MainBanner() {
    const initialTime = moment().add(295, "days"); // Start countdown from 295 days

    const calculateTimeLeft = () => {
        const now = moment();
        const duration = moment.duration(initialTime.diff(now));
        return {
            days: Math.floor(duration.asDays()),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mainBanner">
            <div className="container">
                <div className="row">
                    {/* Left Section (Text + Countdown) */}
                    <div className="col-md-8 text-center banner-text">
                        <h2>
                            Take <span className="anycourseonline">any online course</span> and win $326 <br /> for your next class
                        </h2>

                        {/* Countdown Timer (Arranged Horizontally) */}
                        <div className="countdown-container">
                            <div className="countdown-box">
                                <span className="time">{timeLeft.days}</span>
                                <span className="label">Days</span>
                            </div>
                            <div className="countdown-box">
                                <span className="time">{timeLeft.hours}</span>
                                <span className="label">Hours</span>
                            </div>
                            <div className="countdown-box">
                                <span className="time">{timeLeft.minutes}</span>
                                <span className="label">Minutes</span>
                            </div>
                            <div className="countdown-box">
                                <span className="time">{timeLeft.seconds}</span>
                                <span className="label">Seconds</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Registration Form) */}
                    <div className="col-md-4">
                        <div className="register-box">
                            <h3>Register Your Free Account</h3>
                            <p>Get immediate access to online courses.</p>
                            <form>
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <input type="tel" placeholder="Phone Number" required />
                                <button type="submit">Get It Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
