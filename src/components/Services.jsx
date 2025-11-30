import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    // Professional SVG Icons Component
    const ServiceIcon = ({ type }) => {
        const icons = {
            portrait: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            wedding: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            ),
            event: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
                </svg>
            ),
            family: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            commercial: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            travel: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            )
        };
        return icons[type] || icons.portrait;
    };

    const services = [
        {
            id: 'portrait',
            iconType: 'portrait',
            title: 'Photographie de Portrait',
            description: 'Séances de portrait professionnelles qui capturent l\'essence de votre personnalité avec des détails époustouflants.',
            features: ['Séances en Studio', 'Séances en Extérieur', 'Retouche Professionnelle', 'Livraison Numérique'],
            color: '#E07A5F'
        },
        {
            id: 'wedding',
            iconType: 'wedding',
            title: 'Photographie de Mariage',
            description: 'Couverture complète du mariage, de la préparation à la réception, préservant chaque moment précieux.',
            features: ['Couverture Journée Complète', 'Séances Pré-mariage', 'Moments Spontanés', 'Album de Mariage'],
            color: '#E63946'
        },
        {
            id: 'event',
            iconType: 'event',
            title: 'Photographie d\'Événement',
            description: 'Couverture événementielle professionnelle pour fonctions d\'entreprise, fêtes et célébrations spéciales.',
            features: ['Événements d\'Entreprise', 'Fêtes d\'Anniversaire', 'Lancements de Produits', 'Rencontres Sociales'],
            color: '#F2CC8F'
        },
        {
            id: 'family',
            iconType: 'family',
            title: 'Famille & Nouveau-né',
            description: 'Moments tendres avec vos proches capturés dans des portraits de famille intemporels et des séances nouveau-né.',
            features: ['Portraits de Famille', 'Séances Nouveau-né', 'Photos de Maternité', 'Moments Clés'],
            color: '#81B29A'
        },
        {
            id: 'commercial',
            iconType: 'commercial',
            title: 'Photographie Commerciale',
            description: 'Photographie de produits et commerciale de haute qualité pour les entreprises et les marques.',
            features: ['Photographie de Produits', 'Portraits d\'Entreprise', 'Photographie de Marque', 'Matériel Marketing'],
            color: '#457B9D'
        },
        {
            id: 'travel',
            iconType: 'travel',
            title: 'Photographie de Voyage',
            description: 'Superbes photographies de voyage et de paysage qui capturent l\'essence de vos aventures.',
            features: ['Séances de Destination', 'Photographie de Paysage', 'Portfolios de Voyage', 'Séances d\'Aventure'],
            color: '#2A9D8F'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Ce que j'offre</span>
                    <h2 className="section-title">Services de Photographie</h2>
                    <p className="section-description">
                        Des services de photographie professionnels adaptés pour capturer vos moments et histoires uniques
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            className="service-card"
                            key={index}
                            onClick={() => navigate(`/service/${service.id}`)}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-icon-wrapper">
                                <div className="service-icon" style={{ '--icon-color': service.color }}>
                                    <ServiceIcon type={service.iconType} />
                                </div>
                                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                            </div>

                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-footer">
                                    <span className="learn-more">
                                        En savoir plus
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

export default Services;
