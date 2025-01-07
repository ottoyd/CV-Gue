import React from 'react';
import '../experience.css';

const Experience = () => {
    return (
        <section className="expBox" style={{ width: '100%' }}>
            <div className="autoShow">
                <div className='expItem'>
                    <div style={{ width: '70%', fontFamily: 'system-ui' }}>
                        <h1>TOYOTA (TMMIN)</h1>
                        <i>FULLSTACK DEVELOPER</i>
                        <p style={{ color: 'green', fontSize: 'small' }}>2024-JUN s/d PRESENT</p>
                        <figure>
                            <img src="images/intro_nodejs.png" alt="blank" />
                            <img src="images/intro_sql.png" alt="blank" />
                            <img src="images/intro_oracle.png" alt="blank" />
                            <img src="images/intro_vue.png" alt="blank" />
                            <img src="images/intro_talend.png" alt="blank" />
                            <img src="images/intro_aws.png" alt="blank" />
                            <img src="images/intro_linux.png" alt="blank" />
                        </figure>
                    </div>
                    <img style={{ minWidth: '100px', height: '100%' }} width={'20%'} src="images/exp_3.jpg" alt="blank" />
                </div>
            </div>
            <div className="autoShow">

                <div className='expItem'>
                    <img style={{ minWidth: '100px', height: '100%' }} width={'20%'} src="images/exp_2.jpeg" alt="blank" />
                    <div style={{ width: '70%', fontFamily: 'system-ui' }}>
                        <h1>SINARMAS MINING</h1>
                        <i>FULLSTACK DEVELOPER</i>
                        <p style={{ color: 'green', fontSize: 'small' }}>2022-NOV s/d 2024-MEI</p>
                        <figure>
                            <img src="images/intro_nodejs.png" alt="blank" />
                            <img src="images/intro_mongo.png" alt="blank" />
                            <img src="images/intro_redis.png" alt="blank" />
                            <img src="images/intro_vue.png" alt="blank" />
                            <img src="images/intro_docker.png" alt="blank" />
                            <img src="images/intro_linux.png" alt="blank" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="autoShow">

                <div className='expItem'>
                    <div style={{ width: '70%', fontFamily: 'system-ui' }}>
                        <h1>MURNI SOLUSINDO</h1>
                        <i>FULLSTACK DEVELOPER</i>
                        <p style={{ color: 'green', fontSize: 'small' }}>2020-NOV s/d 2022-NOV</p >
                        <figure>
                            <img src="images/intro_nodejs.png" alt="blank" />
                            <img src="images/intro_sql.png" alt="blank" />
                            <img src="images/intro_grpc.png" alt="blank" />
                            <img src="images/intro_serial.png" alt="blank" />
                            <img src="images/intro_jquery.png" alt="blank" />
                        </figure>
                    </div>

                    <img style={{ minWidth: '100px', height: '100%' }} width={'20%'} src="images/exp_1.png" alt="blank" />
                </div>
            </div>

        </section>
    );
};

export default Experience;
