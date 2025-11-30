import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Amina El Amrani',
            role: 'Mariée',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            rating: 5,
            text: 'Farah a parfaitement immortalisé notre journée de mariage ! Chaque émotion, chaque moment a été magnifiquement préservé. Nous ne pourrions être plus heureux des résultats. Un travail vraiment exceptionnel !'
        },
        {
            id: 2,
            name: 'Ahmed El Fassi',
            role: 'Propriétaire d\'entreprise',
            image: 'https://randomuser.me/api/portraits/men/88.jpg',
            rating: 5,
            text: 'Professionnel, créatif et fiable. La photographie de produits pour notre boutique en ligne a considérablement augmenté nos ventes. Fortement recommandé !'
        },
        {
            id: 3,
            name: 'Khadija Benani',
            role: 'Jeune Maman',
            image: 'https://randomuser.me/api/portraits/women/99.jpg',
            rating: 5,
            text: 'La séance nouveau-né était incroyable ! Farah a été si patiente et douce avec notre bébé. Les photos sont absolument précieuses et nous les chérirons pour toujours.'
        }
    ];

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Témoignages</span>
                    <h2 className="section-title">Ce que disent les clients</h2>
                    <p className="section-description">
                        Ne me croyez pas sur parole - écoutez mes clients satisfaits
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className="testimonial-card"
                            key={testimonial.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="stars">
                                {'⭐'.repeat(testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="author-avatar-img"
                                />
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
