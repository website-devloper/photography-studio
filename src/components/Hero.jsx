import React from 'react';
import heroimg from "../assets/imgs/heroimg.jpg";
import photocamera from "../assets/imgs/photo-camera.png";
import rate from "../assets/imgs/rate.png";
import christmasstars from "../assets/imgs/christmas-stars.png";



const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="badge-container " data-aos="fade-down" data-aos-delay="100">
                            <span className="hero-badge" style={{ display: 'flex', alignItems: 'center' }}><img src={christmasstars} alt="" style={{ marginRight: '8px', width: '20px', height: '20px' }} /> Photographie Professionnelle</span>
                        </div>

                        <h1 className="hero-title" data-aos="fade-right" data-aos-delay="200">
                            Capturer les 
                            <span className="highlight-text">Moments Précieux</span><br/>de la Vie
                        </h1>

                        <p className="hero-description" data-aos="fade-right" data-aos-delay="300">
                            Transformer les moments éphémères en souvenirs intemporels grâce à l'art de la photographie.
                            Chaque clic raconte une histoire unique, chaque cadre capture une émotion.
                        </p>

                        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
                            <button className="btn btn-primary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                                Voir Portfolio
                            </button>
                            <button className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                Réserver une Séance
                            </button>
                        </div>

                        <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                            <div className="stat-item">
                                <h3>5k+</h3>
                                <p>Clients Satisfaits</p>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <h3>150+</h3>
                                <p>Séances/Mois</p>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Ans d'Exp.</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image-container" data-aos="zoom-in" data-aos-delay="200">
                        <div className="hero-image-wrapper">
                            <img className='hero-main-img' src={heroimg} alt="Photographie Professionnelle" />
                            <div className="floating-card card-1" data-aos="fade-left" data-aos-delay="600">
                                <span className="icon"><img src={photocamera} alt="" style={{ width: '35px', height: '35px' }} /></span>
                                <div className="text">
                                    <strong>Équipement Pro</strong>
                                    <span>Qualité Supérieure</span>
                                </div>
                            </div>
                            <div className="floating-card card-2" data-aos="fade-right" data-aos-delay="700">
                                <span className="icon"><img src={rate} alt="" style={{ width: '40px', height: '40px' }} /></span>
                                <div className="text">
                                    <strong>Noté 5.0</strong>
                                    <span>par les Clients</span>
                                </div>
                            </div>
                        </div>
                        <div className="image-pattern"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Faites défiler pour explorer</span>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

