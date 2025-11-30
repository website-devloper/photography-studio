import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCameraRetro, FaRing, FaCalendarAlt, FaUsers, FaBriefcase, FaGlobeAmericas } from 'react-icons/fa';

const ServiceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
        window.scrollTo(0, 0);
    }, []);

    const iconMap = {
        portrait: <FaCameraRetro />,
        wedding: <FaRing />,
        event: <FaCalendarAlt />,
        family: <FaUsers />,
        commercial: <FaBriefcase />,
        travel: <FaGlobeAmericas />
    };

    const servicesData = [
        {
            id: 'portrait',
            iconType: 'portrait',
            title: 'Photographie de Portrait',
            description: 'Séances de portrait professionnelles qui capturent l\'essence de votre personnalité avec des détails époustouflants.',
            features: ['Séances en Studio', 'Séances en Extérieur', 'Retouche Professionnelle', 'Livraison Numérique'],
            color: '#E07A5F',
            detailedContent: `
                <p>Plongez dans une expérience photographique où votre personnalité est la star. Que ce soit pour un profil professionnel, un portfolio artistique ou simplement pour immortaliser un moment de votre vie, nous créons des images qui parlent.</p>
                <p>Chaque séance est une collaboration, visant à révéler votre authenticité et votre force intérieure. Nous explorons différentes ambiances, lumières et poses pour garantir des clichés uniques et mémorables, qui vous ressemblent vraiment. Laissez-nous capturer votre essence.</p>
            `
        },
        {
            id: 'wedding',
            iconType: 'wedding',
            title: 'Photographie de Mariage',
            description: 'Couverture complète du mariage, de la préparation à la réception, préservant chaque moment précieux.',
            features: ['Couverture Journée Complète', 'Séances Pré-mariage', 'Moments Spontanés', 'Album de Mariage'],
            color: '#E63946',
            detailedContent: `
                <p>Votre grand jour est une mosaïque d'émotions, de rires et de larmes de joie. Notre approche de la photographie de mariage est de raconter cette histoire unique avec une sensibilité artistique et une attention méticuleuse aux détails.</p>
                <p>Des préparatifs intimes aux vœux émouvants, de la célébration vibrante à la première danse, nous capturons chaque instant fugace, chaque regard échangé, pour que vous puissiez revivre la magie de votre mariage encore et encore. Nous offrons également des séances d'engagement pour immortaliser les prémices de votre union.</p>
            `
        },
        {
            id: 'event',
            iconType: 'event',
            title: 'Photographie d\'Événement',
            description: 'Couverture événementielle professionnelle pour fonctions d\'entreprise, fêtes et célébrations spéciales.',
            features: ['Événements d\'Entreprise', 'Fêtes d\'Anniversaire', 'Lancements de Produits', 'Rencontres Sociales'],
            color: '#F2CC8F',
            detailedContent: `
                <p>Chaque événement est une occasion spéciale, qu'il s'agisse d'une conférence d'entreprise, d'une fête d'anniversaire ou d'un lancement de produit. Notre objectif est de documenter l'énergie, l'ambiance et les moments clés de votre rassemblement.</p>
                <p>Nous nous fondons dans le décor pour capturer des clichés spontanés et authentiques, tout en assurant une couverture complète des discours, des interactions et des détails qui rendent votre événement unique. Laissez-nous transformer vos souvenirs en images dynamiques et professionnelles.</p>
            `
        },
        {
            id: 'family',
            iconType: 'family',
            title: 'Famille & Nouveau-né',
            description: 'Moments tendres avec vos proches capturés dans des portraits de famille intemporels et des séances nouveau-né.',
            features: ['Portraits de Famille', 'Séances Nouveau-né', 'Photos de Maternité', 'Moments Clés'],
            color: '#81B29A',
            detailedContent: `
                <p>La famille est un trésor, et chaque étape de sa vie mérite d'être célébrée et immortalisée. Nos séances de photographie de famille et de nouveau-né sont conçues pour capturer l'amour, la joie et les liens uniques qui vous unissent.</p>
                <p>Nous créons un environnement détendu et amusant pour que les personnalités de chacun brillent, résultant en des images naturelles et émouvantes. Des premiers jours précieux de votre nouveau-né aux rires partagés lors d'une réunion de famille, nous créons des souvenirs que vous chérirez pour toujours.</p>
            `
        },
        {
            id: 'commercial',
            iconType: 'commercial',
            title: 'Photographie Commerciale',
            description: 'Photographie de produits et commerciale de haute qualité pour les entreprises et les marques.',
            features: ['Photographie de Produits', 'Portraits d\'Entreprise', 'Photographie de Marque', 'Matériel Marketing'],
            color: '#457B9D',
            detailedContent: `
                <p>Dans le monde des affaires d'aujourd'hui, une image vaut mille mots. Notre service de photographie commerciale est dédié à aider votre marque à se démarquer avec des visuels percutants et professionnels.</p>
                <p>Que vous ayez besoin de photographies de produits éclatantes, de portraits d'entreprise qui inspirent confiance, ou d'images de marque qui racontent votre histoire, nous travaillons en étroite collaboration avec vous pour comprendre votre vision et la traduire en images qui captivent votre public cible et renforcent votre identité de marque.</p>
            `
        },
        {
            id: 'travel',
            iconType: 'travel',
            title: 'Photographie de Voyage',
            description: 'Superbes photographies de voyage et de paysage qui capturent l\'essence de vos aventures.',
            features: ['Séances de Destination', 'Photographie de Paysage', 'Portfolios de Voyage', 'Séances d\'Aventure'],
            color: '#2A9D8F',
            detailedContent: `
                <p>L'aventure vous appelle, et nous sommes là pour en immortaliser chaque étape. Notre photographie de voyage capture la beauté brute des paysages, l'âme des cultures et l'esprit d'exploration.</p>
                <p>Que vous souhaitiez documenter un voyage épique, créer un portfolio de paysages à couper le souffle, ou simplement avoir des souvenirs professionnels de vos escapades, nous vous accompagnons pour saisir l'essence de chaque destination. Chaque image est une fenêtre ouverte sur le monde, racontant une histoire de découverte et d'émerveillement.</p>
            `
        }
    ];

    const service = servicesData.find(s => s.id === id) || servicesData[0]; // Fallback to first service if ID not found

    return (
        <>
            <div style={{ height: '80px' }}></div>

            <section className="service-details" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 15px' }}>
                    {/* Breadcrumb */}
                    <div className="breadcrumb" data-aos="fade-down" style={{ marginBottom: '30px', fontSize: '1rem', color: '#555' }}>
                        <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'none' }}>Home</span>
                        <span style={{ margin: '0 8px' }}> / </span>
                        <span onClick={() => navigate('/#services')} style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'none' }}>Services</span>
                        <span style={{ margin: '0 8px' }}> / </span>
                        <span style={{ fontWeight: '600', color: '#333' }}>{service.title}</span>
                    </div>

                    <div className="service-hero" data-aos="fade-up" style={{ textAlign: 'center', padding: '40px', marginBottom: '50px', borderRadius: '10px', background: `linear-gradient(135deg, ${service.color}33, #e0f2f7)`, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <div className="service-hero-icon" style={{ fontSize: '4rem', marginBottom: '20px', color: service.color }}>{iconMap[service.iconType]}</div>
                        <h1 className="service-title" style={{ fontSize: '2.8rem', color: '#333', marginBottom: '15px', fontWeight: '700' }}>{service.title}</h1>
                        <p className="service-description" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', maxWidth: '800px', margin: '0 auto 30px auto' }}>{service.description}</p>
                    </div>

                    <div className="service-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', marginBottom: '60px' }}>
                        <div className="service-features-section" data-aos="fade-right" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>Ce qui est inclus</h2>
                            <ul className="service-feature-list" style={{ listStyle: 'none', padding: '0' }}>
                                {service.features.map((feature, index) => (
                                    <li key={index} data-aos="fade-up" data-aos-delay={index * 100} style={{ fontSize: '1.1rem', color: '#444', marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                                        <span className="check-icon" style={{ color: service.color, marginRight: '10px', fontSize: '1.3rem', lineHeight: '1' }}>✓</span> <span style={{ flex: 1 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {service.detailedContent && (
                            <div className="service-detailed-content" data-aos="fade-left" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>En savoir plus</h2>
                                <div dangerouslySetInnerHTML={{ __html: service.detailedContent }} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}></div>
                            </div>
                        )}
                    </div>

                    <div className="service-cta" data-aos="fade-up" style={{ textAlign: 'center', padding: '50px', borderRadius: '10px', backgroundColor: '#e9f7ef', border: '1px solid #d4edda', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '2.5rem', color: service.color, marginBottom: '20px' }}>Prêt à Réserver?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>Sécurisez votre date dès aujourd'hui et créons quelque chose de magnifique.</p>
                        <button className="btn btn-primary" onClick={() => navigate('/#contact')} style={{
                            backgroundColor: service.color,
                            color: '#fff',
                            padding: '15px 30px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            boxShadow: `0 4px 10px ${service.color}4D`
                        }}>
                            Contactez-moi
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetails;
