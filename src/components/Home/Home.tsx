/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import max from './max.jpg';
import './Home.css';

export const Home = (): JSX.Element => {
    return (
        <div className="Home">
            <div className="flex-container">
                <div className="left">
                    <img className="maxImg" src={max} alt="this is me" />
                </div>
                <div className="right">
                    <h1 className="title">Maxwell Peck</h1>
                    <p className="subtitle">Software Engineer</p>
                    <p>Hi!  I'm Max, and I write software for Liberty Mutual.  I live in Vermont, and I have a Bachelor of Science in Computer Science degree from The University of Vermont.</p> 
                    <p className="title">Location</p>
                    <p className="subtitle">Burlington, Vermont</p>
                    <p className="title">Skills</p>
                    <p className="subtitle">AWS, Node, React, TypeScript/JavaScript, Swift/SwiftUI, Java, C++, C, Python</p>
                    <p className="title">Contact</p>
                    <p className="subtitle">maxwell.a.peck@gmail.com</p>
                </div>
            </div>
        </div>
    );
};
