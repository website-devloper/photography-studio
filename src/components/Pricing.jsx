import React from 'react';

const Pricing = () => {
    const packages = [
        {
            name: 'Démarrage',
            price: '1990 MAD',
            period: 'session',
            features: [
                'Séance 2h',
                '50 images éditées',
                'Galerie en ligne',
                'Usage perso',
                'Retouche basique'
            ],
            featured: false
        },
        {
            name: 'Pro',
            price: '3150 MAD',
            period: 'session',
            features: [
                'Séance 4h',
                '100 images éditées',
                'Galerie + DL',
                'Usage pro',
                'Retouche avancée',
                'Fichiers print',
                '1 lieu supp.'
            ],
            featured: true
        },
        {
            name: 'Premium',
            price: '5000 MAD',
            period: 'session',
            features: [
                'Journée complète',
                '200+ images éditées',
                'Galerie illimitée',
                'Droits commerciaux',
                'Retouche premium',
                'Album inclus',
                'Multi-lieux',
                'Livraison rapide'
            ],
            featured: false
        }
    ];

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Tarifs</span>
                    <h2 className="section-title">Forfaits Photo</h2>
                    <p className="section-description">
                        Choisissez le forfait parfait qui correspond à vos besoins et à votre budget
                    </p>
                </div>

                <div className="pricing-grid">
                    {packages.map((pkg, index) => (
                        <div
                            className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
                            key={index}
                            data-aos="flip-left"
                            data-aos-delay={index * 150}
                        >
                            {pkg.featured && <div className="popular-badge">Le Plus Populaire</div>}
                            <div className="pricing-header">
                                 {pkg.featured? <h3 className='featured-name'>{pkg.name}</h3>: <h3>{pkg.name}</h3>}
                               
                                <div className="price">{pkg.price}</div>
                                <p className="price-period">{pkg.period}</p>
                            </div>
                            <ul className="pricing-features">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                Choisir ce Forfait
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
