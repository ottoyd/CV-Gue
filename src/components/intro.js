import React from 'react';
import '../intro.css';

const Intro = () => {
    const skills = [
        { url: '/images/intro_nodejs.png' },
        { url: '/images/intro_react.png' },
        { url: '/images/intro_vue.png' },
        { url: '/images/intro_mongo.png' },
        { url: '/images/intro_postgresql.png' },
        { url: '/images/intro_graphql.png' },
        { url: '/images/intro_redis.png' },
        { url: '/images/intro_kafka.png' }
    ];

    return (
        <div className="banner">
            <div className="slider" style={{ '--quantity': skills.length }}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="item"
                        style={{ '--position': index }}
                    >
                        <img className='skillImage' src={skill.url} alt={`Item ${index + 1}`} />
                    </div>
                ))}
            </div>


            <div className="image-container">
                <img src={'/images/hero.png'} alt="blank" />
                <div className="overlay-text">
                    BAIHAQI<br/> <i>FULLSTACK DEVELOPER</i>
                </div>
            </div>
        </div>
    );
};

export default Intro;
