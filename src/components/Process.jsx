import React from 'react';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Consultation',
            description: 'Nous discutons de votre vision, de vos exigences et de vos attentes pour créer le plan photographique parfait pour vos besoins.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Planification',
            description: 'Préparation détaillée incluant la recherche de lieux, la mise en place de l\'équipement et la planification pour assurer le bon déroulement de tout.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Séance Photo',
            description: 'Session de photographie professionnelle où nous capturons des moments époustouflants avec une direction experte et une vision créative.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Retouche & Livraison',
            description: 'Post-traitement et retouche minutieux suivis d\'une livraison rapide de vos images finales de haute qualité.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="process" id="process">
            <div className="process-bg-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
            </div>

            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Comment ça marche</span>
                    <h2 className="section-title">Mon Processus de Photographie</h2>
                    <p className="section-description">
                        Un parcours fluide en quatre étapes, de la consultation initiale à la livraison finale
                    </p>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div
                            className="process-step-card"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="step-connector"></div>
                            <div className="step-icon-wrapper">
                                <div className="step-icon">
                                    {step.icon}
                                </div>
                                <div className="step-number-badge">{step.number}</div>
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            <div className="step-hover-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
