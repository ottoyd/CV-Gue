import React from 'react';
import ReactPlayer from 'react-player';

const Youtube = () => {
    return (
        <>
            <p style={{ display: 'flex', width: '80%', margin: 'auto', textAlign: 'center', color: '#FFF', fontSize: '25px', marginBottom: '1rem', justifyContent:'center'}}>Youtube Contet</p>
            <div style={{ display: 'flex', width: '80%', margin: 'auto', paddingBottom: '2rem' }} className="video-container">

                <ReactPlayer
                    url="https://www.youtube.com/watch?v=9LXhY9QuuPM&t=511s"
                    controls
                    width="310px"
                    height="180px"
                    style={{ padding: '5px' }}
                />
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=BnoLHceKEMA"
                    controls
                    width="310px"
                    height="180px"
                    style={{ padding: '5px' }}
                />
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=BnoLHceKEMA"
                    controls
                    width="310px"
                    height="180px"
                    style={{ padding: '5px' }}
                />
                
            </div>
        </>

    );
};

export default Youtube;
