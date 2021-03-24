import React from 'react';
import screenshot from './screenshot.png';
import './Vegometer.css';

export const Vegometer = (): JSX.Element => {
    return (
        <div className="Vegometer">
            <div className="flex-container">
                <div className="left">
                    <img className="screenshotImg" src={screenshot} alt="Screenshot" />
                </div>
                <div className="right">
                    <h1 className="title">Veg-O-Meter</h1>
                    <p className="subtitle">A Ridiculous iOS App</p>
                    <p>Everyone needs time to veg out!  How hard are you vegging?  Find out today with the Veg-O-Meter!</p>
                    <div className="privacy-policy">
                        <h2 className="title">Privacy Policy</h2>
                        <p className="privacy-policy-paragraph">
                            The Veg-O-Meter does not collect or store any user data.  The Veg-O-Meter may ask for photo library access to save screenshots of high scores, however it cannot access other photos.  Happy data-free vegging!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
