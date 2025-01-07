import React from 'react';
import '../certificate.css';

const Certificate = () => {
    const certs = [
        { name: 'PMP Dasar', by: 'Google', url: 'images/cert_pmp.jpeg', image: 'images/cert_pmp_b.jpeg' },
        { name: 'Javascript', by: 'Google', url: 'images/cert_javascript.jpeg', image: 'images/cert_javascript.jpeg', check: true },
        { name: 'PMP Fundation', by: 'Google', url: 'images/cert_pmp.jpeg', image: 'images/cert_pmp.jpeg' },
        //{ name: 'PMP', by: 'Google', url: 'images/cert_pmp.jpeg', image: 'images/cert_pmp.jpeg' },
    ]
    return (
        <>
            <p style={{ display: 'flex', width: '80%', margin: '2rem auto  0 auto', textAlign: 'center', color: '#FFF', fontSize: '25px', justifyContent: 'center' }}>Certification</p>
            <div className="container">
                <div className="wgh-slider">
                    {certs.map((cert, index) => (
                        <input
                            key={index}
                            className="wgh-slider-target"
                            type="radio"
                            id={`slide-${index + 1}`}
                            name="slider"
                            defaultChecked={cert.check ? true : false}
                        />
                    ))}
                    <div className="wgh-slider__viewport">
                        <div className="wgh-slider__viewbox">
                            <div className="wgh-slider__container">
                                {certs.map((cert, index) => (
                                    <div className="wgh-slider-item">
                                        <div className="wgh-slider-item__inner">
                                            <figure className="wgh-slider-item-figure">
                                                <img className="wgh-slider-item-figure__image" src={cert.image} alt={`Item ${index + 1}`} />
                                                <figcaption className="wgh-slider-item-figure__caption">
                                                    <a href={cert.url} >{cert.name}</a>
                                                    <span>{cert.by}</span>
                                                </figcaption>
                                            </figure>
                                            <label className="wgh-slider-item__trigger" htmlFor={`slide-${index + 1}`} title={`Show product ${index + 1}`} ></label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Certificate;
