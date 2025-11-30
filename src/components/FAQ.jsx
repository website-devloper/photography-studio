import React from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const faqs = [
        {
            question: 'Combien de temps à l\'avance dois-je réserver une séance photo ?',
            answer: 'Pour une meilleure disponibilité, je recommande de réserver au moins 2 à 3 mois à l\'avance, surtout pour les mariages et les événements spéciaux. Cependant, je peux parfois répondre aux demandes de dernière minute en fonction de mon emploi du temps. Contactez-moi pour vérifier la disponibilité !'
        },
        {
            question: 'Qu\'est-ce qui est inclus dans vos forfaits photo ?',
            answer: 'Chaque forfait comprend une couverture photographique professionnelle, des images numériques haute résolution éditées, une galerie en ligne pour la visualisation et le téléchargement, et des droits d\'impression complets. Les détails spécifiques varient selon le type de forfait - consultez la section tarifs pour plus d\'informations.'
        },
        {
            question: 'Combien de temps faut-il pour recevoir les photos finales ?',
            answer: 'Pour les séances de portrait, vous pouvez vous attendre à recevoir vos photos éditées dans les 2 à 3 semaines. La photographie de mariage prend généralement 4 à 6 semaines en raison du processus d\'édition étendu. Vous recevrez une galerie d\'aperçu avec les moments forts dans les 48 heures après votre séance !'
        },
        {
            question: 'Voyagez-vous pour des séances photo ?',
            answer: 'Absolument ! J\'adore voyager pour des séances photo et j\'ai photographié des sessions à travers le pays et à l\'étranger. Des frais de déplacement peuvent s\'appliquer en fonction de l\'emplacement et de la distance. Discutons de votre destination et créons quelque chose d\'incroyable ensemble !'
        },
        {
            question: 'Puis-je demander des styles d\'édition spécifiques ?',
            answer: 'Oui ! Lors de notre consultation, nous discuterons de votre style d\'édition et de votre esthétique préférés. Que vous aimiez les looks lumineux et aérés, sombres et dramatiques, ou naturels et intemporels, j\'adapterai l\'édition pour correspondre parfaitement à votre vision.'
        },
        {
            question: 'Que se passe-t-il s\'il pleut le jour d\'une séance en extérieur ?',
            answer: 'Excellente question ! Nous aurons un plan de secours en place, qui peut inclure la reprogrammation à une autre date, le déplacement vers un lieu couvert, ou même l\'adoption de la pluie pour des clichés uniques et dramatiques. Nous en discuterons lors de la planification pour nous assurer que vous êtes à l\'aise avec le plan de contingence.'
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">FAQ</span>
                    <h2 className="section-title">Foire Aux Questions</h2>
                    <p className="section-description">
                        Trouvez des réponses aux questions courantes sur mes services de photographie
                    </p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
