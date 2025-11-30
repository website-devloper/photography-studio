import React from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();

    const portfolioItems = [
        {
            id: 1,
            category: 'Mariage',
            title: 'Magnifique Mariage',
            description: 'Cérémonie romantique',
            image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 2,
            category: 'Portrait',
            title: 'Portrait Professionnel',
            description: 'Séance en studio',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 3,
            category: 'Événement',
            title: 'Événement Corporatif',
            description: 'Conférence d\'affaires',
            image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 4,
            category: 'Famille',
            title: 'Moments en Famille',
            description: 'Séance en extérieur',
            image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 5,
            category: 'Voyage',
            title: 'Voyage Aventure',
            description: 'Beauté du paysage',
            image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 6,
            category: 'Commercial',
            title: 'Photos de Produits',
            description: 'Photos e-commerce',
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 7,
            category: 'Nouveau-né',
            title: 'Séance Nouveau-né',
            description: 'Moments doux',
            image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 8,
            category: 'Nature',
            title: 'Beauté de la Nature',
            description: 'Flore et faune',
            image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 9,
            category: 'Mode',
            title: 'Séance de Mode',
            description: 'Style éditorial',
            image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ];

    return (
        <section className="portfolio" id="portfolio">
            <div className="container-wide">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Mon Travail</span>
                    <h2 className="section-title">Galerie de Portfolio</h2>
                    <p className="section-description">
                        Explorez une collection de mes travaux récents présentant divers styles et moments photographiques
                    </p>
                </div>

                <div className="gallery-grid">
                    {portfolioItems.map((item, index) => (
                        <div
                            className="gallery-item"
                            key={item.id}
                            onClick={() => navigate(`/gallery/${item.id}`)}
                            data-aos="zoom-in"
                            data-aos-delay={index * 50}
                        >
                            <div className="gallery-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                                <div className="gallery-category-badge">{item.category}</div>
                            </div>
                            <div className="gallery-overlay">
                                <div className="gallery-overlay-content">
                                    <span className="category-tag">{item.category}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <span className="view-project">
                                        Voir le Projet
                                        <svg viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
