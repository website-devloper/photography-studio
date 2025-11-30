import React from 'react';

const Equipment = () => {
    const equipment = [
        {
            id: 1,
            title: 'Appareils Photo Professionnels',
            description: 'Canon EOS R5 & Sony A7R IV',
            details: 'Capteurs Plein Format 45MP, Vidéo 8K',
            image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Objectifs Premium',
            description: 'Collection G-Master & Série L',
            details: '24-70mm f/2.8, 85mm f/1.2, 70-200mm',
            image: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M21.17 8l-5-2.9" />
                    <path d="M2.83 16l5 2.9" />
                    <path d="M12 2v6" />
                    <path d="M12 22v-6" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Systèmes d\'Éclairage',
            description: 'Flasheurs de Studio Profoto',
            details: 'B10 Plus, Boîtes à Lumière, Réflecteurs',
            image: 'https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Drone Aérien',
            description: 'DJI Mavic 3 Pro',
            details: 'Vidéo 5.1K, Caméra Hasselblad',
            image: 'https://images.pexels.com/photos/7214470/pexels-photo-7214470.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        }
    ];

    return (
        <section className="equipment" id="equipment">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Mon Équipement</span>
                    <h2 className="section-title">Équipement Professionnel</h2>
                    <p className="section-description">
                        Je crois en l'utilisation des meilleurs outils pour créer le meilleur art. Voici le matériel professionnel que j'utilise pour capturer vos moments.
                    </p>
                </div>

                <div className="equipment-grid">
                    {equipment.map((item, index) => (
                        <div
                            className="equipment-card"
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="equipment-image-wrapper">
                                <img src={item.image} alt={item.title} className="equipment-image" />
                                <div className="equipment-overlay"></div>
                                <div className="equipment-icon-floating">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="equipment-content">
                                <h3>{item.title}</h3>
                                <p className="equipment-main-desc">{item.description}</p>
                                <div className="equipment-divider"></div>
                                <p className="equipment-details">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Equipment;
