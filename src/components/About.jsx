import React from 'react';
import aboutimg1 from "../assets/imgs/aboutus1.jpg";
import aboutimg2 from "../assets/imgs/aboutus2.jpg";
import badge from "../assets/imgs/badge.png";
import happyfriends from "../assets/imgs/happy-friends.png";
import quick from "../assets/imgs/quick.png";
import eye from "../assets/imgs/eye.png";


const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    {/* Image Side - Left on Desktop */}
                    <div className="about-images-wrapper" data-aos="fade-right">
                        <div className="about-image-composition">
                            <div className="image-frame main-frame">
                                <img src={aboutimg2} alt="Portrait de Photographe" className="about-img-main" />
                            </div>
                            <div className="image-frame secondary-frame" data-aos="fade-up" data-aos-delay="200">
                                <img src={aboutimg1} alt="Séance Photo" className="about-img-secondary" />
                            </div>
                            <div className="experience-badge" data-aos="zoom-in" data-aos-delay="400">
                                <span className="years">10+</span>
                                <span className="text">Années d'Expérience</span>
                            </div>
                            <div className="decorative-pattern"></div>
                        </div>
                    </div>

                    {/* Text Side - Right on Desktop */}
                    <div className="about-text-content" data-aos="fade-left">
                        <div className="section-header-left">
                            <span className="section-subtitle">À Propos de Moi</span>
                            <h2 className="section-title">Capturer l'Âme du Moment</h2>
                            <p className="intro-text">
                                "La photographie est l'histoire que je ne parviens pas à mettre en mots."
                            </p>
                        </div>

                        <p className="about-description">
                            Bonjour ! Je suis Farah, photographe professionnelle passionnée par la narration. Depuis plus d'une décennie, je fige le temps, transformant des moments éphémères en souvenirs tangibles. Mon parcours a commencé avec un simple appareil photo argentique et a évolué vers une quête de toute une vie pour la photo parfaite.
                        </p>
                        <p className="about-description">
                            Qu'il s'agisse de la joie émue d'un mariage, de la confiance tranquille d'un portrait ou des rires spontanés d'une séance en famille, je m'efforce de capturer l'émotion authentique dans chaque cliché.
                        </p>

                        <div className="about-features-grid">
                            <div className="feature-card">
                                <div className="icon-box"><img src={eye} alt="" style={{ width: '40px', height: '40px' }}/></div>
                                <h4>Vision Artistique</h4>
                            </div>
                            <div className="feature-card">
                                <div className="icon-box"><img src={quick} alt="" style={{ width: '40px', height: '40px' }}/></div>
                                <h4>Livraison Rapide</h4>
                            </div>
                            <div className="feature-card">
                                <div className="icon-box"><img src={badge} alt="" style={{ width: '40px', height: '40px' }}/></div>
                                <h4>Haute Qualité</h4>
                            </div>
                            <div className="feature-card">
                                <div className="icon-box"><img src={happyfriends} alt="" style={{ width: '40px', height: '40px' }}/></div>
                                <h4>Ambiance Chaleureuse</h4>
                            </div>
                        </div>

                        <div className="about-signature">
                            <span className="signature-text">Farah Photography</span>
                        </div>

                        <button className="btn btn-outline" style={{ marginTop: '30px' }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Discutons
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
