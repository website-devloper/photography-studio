import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop',
            title: '10 conseils essentiels pour une photographie de portrait parfaite',
            excerpt: 'Découvrez les secrets pour capturer des portraits époustouflants qui reflètent véritablement la personnalité et le caractère de votre sujet...',
            date: '25 nov. 2025',
            author: 'Farah',
            category: 'Tutoriel',
            readTime: '5 min de lecture'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop',
            title: 'Maîtriser la lumière naturelle en photographie',
            excerpt: 'Apprenez à exploiter la puissance de la lumière naturelle pour créer des photographies à couper le souffle dans n\'importe quel environnement sans équipement coûteux...',
            date: '20 nov. 2025',
            author: 'Farah',
            category: 'Conseils & Astuces',
            readTime: '7 min de lecture'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
            title: 'Dans les coulisses : Photographie de mariage',
            excerpt: 'Un regard exclusif sur la façon dont je me prépare et capture les moments les plus précieux de votre journée de mariage spéciale...',
            date: '15 nov. 2025',
            author: 'Farah',
            category: 'Dans les coulisses',
            readTime: '6 min de lecture'
        }
    ];

    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Dernier Blog</span>
                    <h2 className="section-title">Histoires & Conseils</h2>
                    <p className="section-description">
                        Insights photographiques, histoires des coulisses et conseils professionnels pour inspirer votre créativité
                    </p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <div
                            className="blog-card"
                            key={post.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <Link to={`/blog/${post.id}`} className="blog-card-link">
                                <div className="blog-image-wrapper">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="blog-image-photo"
                                    />
                                    <div className="blog-category-badge">{post.category}</div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="meta-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {post.date}
                                        </span>
                                        <span className="meta-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <span className="read-more">
                                        Lire la suite
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
