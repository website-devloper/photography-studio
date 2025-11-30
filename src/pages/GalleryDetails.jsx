import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCameraRetro, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaClock, FaCamera, FaCogs, FaPalette, FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaHeart, FaShare } from 'react-icons/fa';

const GalleryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
        window.scrollTo(0, 0);
    }, []);

    // Sample images for the gallery (using Pexels)
    const getGalleryImages = (category, count) => {
        const imageCollections = {
            'Mariage': [
                'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Portrait': [
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Événement': [
                'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Famille': [
                'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1146603/pexels-photo-1146603.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Voyage': [
                'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Commercial': [
                'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Nouveau-né': [
                'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1912456/pexels-photo-1912456.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Nature': [
                'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ],
            'Mode': [
                'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200'
            ]
        };

        return imageCollections[category] || imageCollections['Portrait'];
    };

    const portfolioItems = [
        {
            id: 1,
            category: 'Mariage',
            emoji: '💑',
            title: 'Magnifique Mariage',
            location: 'Malibu, California',
            date: 'Juin 2024',
            client: 'Sarah & Michael',
            description: 'Une superbe cérémonie de mariage sur la plage capturant l\'essence de l\'amour et de la célébration. La lumière de l\'heure dorée a créé des conditions parfaites pour des portraits romantiques.',
            image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '💑', caption: 'Le premier regard - pure émotion', description: 'Ce moment magique où les mariés se voient pour la première fois, capturant l\'émotion brute et authentique.' },
                { id: 2, emoji: '💍', caption: 'Cérémonie d\'échange des alliances', description: 'L\'instant solennel de l\'échange des alliances sous le ciel californien.' },
                { id: 3, emoji: '💐', caption: 'Détails du bouquet de la mariée', description: 'Un arrangement floral délicat de roses blanches et de verdure.' },
                { id: 4, emoji: '👰', caption: 'Préparatifs de la mariée', description: 'Les moments intimes de préparation avant la grande cérémonie.' },
                { id: 5, emoji: '🤵', caption: 'Portraits du marié', description: 'Portraits élégants capturant la confiance et l\'anticipation.' },
                { id: 6, emoji: '🌅', caption: 'Portraits de couple au coucher du soleil', description: 'La lumière dorée parfaite pour des portraits romantiques inoubliables.' },
                { id: 7, emoji: '🎂', caption: 'Coupe du gâteau de mariage', description: 'Moment de joie partagée lors de la coupe du gâteau.' },
                { id: 8, emoji: '💃', caption: 'Première danse', description: 'La première danse sous les étoiles, un moment magique.' },
                { id: 9, emoji: '🎉', caption: 'Célébration de la réception', description: 'L\'énergie et la joie de la célébration avec famille et amis.' }
            ],
            details: {
                duration: '10 heures',
                photos: '500+ images éditées',
                equipment: 'Canon EOS R5, Divers objectifs',
                style: 'Romantique, spontané, éditorial'
            }
        },
        {
            id: 2,
            category: 'Portrait',
            emoji: '👤',
            title: 'Portrait Professionnel',
            location: 'Studio Centre-ville',
            date: 'Juillet 2024',
            client: 'Équipe Tech Startup',
            description: 'Portraits modernes et professionnels pour une entreprise technologique en pleine croissance. Style épuré et contemporain avec éclairage naturel et retouche professionnelle.',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '👔', caption: 'Portraits exécutifs', description: 'Portraits professionnels pour les dirigeants de l\'entreprise.' },
                { id: 2, emoji: '💼', caption: 'Style business casual', description: 'Une approche moderne et décontractée du portrait professionnel.' },
                { id: 3, emoji: '🎨', caption: 'Photos d\'équipe créatives', description: 'Captures dynamiques de l\'équipe créative au travail.' },
                { id: 4, emoji: '👥', caption: 'Photo de groupe', description: 'Toute l\'équipe réunie pour un portrait collectif.' },
                { id: 5, emoji: '💡', caption: 'Espace de travail lifestyle', description: 'L\'environnement de travail moderne et inspirant.' },
                { id: 6, emoji: '📸', caption: 'Portraits individuels', description: 'Portraits personnalisés de chaque membre de l\'équipe.' }
            ],
            details: {
                duration: '4 heures',
                photos: '120 images éditées',
                equipment: 'Sony A7R IV, Éclairage studio',
                style: 'Épuré, professionnel, moderne'
            }
        },
        {
            id: 3,
            category: 'Événement',
            emoji: '🎉',
            title: 'Événement Corporatif',
            location: 'Grand Salle de Bal',
            date: 'Août 2024',
            client: 'Entreprise Fortune 500',
            description: 'Photographie d\'événement d\'entreprise à grande échelle couvrant les discours, le réseautage et le divertissement. Capturé l\'énergie et la sophistication de cet événement prestigieux.',
            image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '🎤', caption: 'Conférencier principal', description: 'Le discours inspirant du CEO devant l\'assemblée.' },
                { id: 2, emoji: '🍾', caption: 'Réception cocktail', description: 'Moments de networking lors de la réception.' },
                { id: 3, emoji: '🎭', caption: 'Spectacles de divertissement', description: 'Performances artistiques de haute qualité.' },
                { id: 4, emoji: '🤝', caption: 'Moments de réseautage', description: 'Connexions professionnelles et échanges enrichissants.' },
                { id: 5, emoji: '🏆', caption: 'Cérémonie de remise des prix', description: 'Reconnaissance des accomplissements exceptionnels.' },
                { id: 6, emoji: '✨', caption: 'Ambiance du lieu', description: 'La décoration somptueuse et l\'atmosphère élégante.' }
            ],
            details: {
                duration: '6 heures',
                photos: '300+ images éditées',
                equipment: 'Configuration double caméra',
                style: 'Photojournalistique, spontané'
            }
        },
        {
            id: 4,
            category: 'Famille',
            emoji: '👨‍👩‍👧‍👦',
            title: 'Moments en Famille',
            location: 'Parc Local',
            date: 'Septembre 2024',
            client: 'Famille Smith',
            description: 'Une séance familiale joyeuse et détendue en extérieur. Capturer les rires authentiques et les liens précieux entre les membres de la famille.',
            image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '🌳', caption: 'Jeux dans le parc', description: 'Moments de joie et de complicité en famille.' },
                { id: 2, emoji: '☀️', caption: 'Portraits ensoleillés', description: 'La lumière naturelle sublime les sourires.' },
                { id: 3, emoji: '🎈', caption: 'Les enfants s\'amusent', description: 'L\'innocence et la spontanéité de l\'enfance.' }
            ],
            details: {
                duration: '2 heures',
                photos: '80 images éditées',
                equipment: 'Nikon Z6 II',
                style: 'Naturel, joyeux, spontané'
            }
        },
        {
            id: 5,
            category: 'Voyage',
            emoji: '✈️',
            title: 'Voyage Aventure',
            location: 'Islande',
            date: 'Octobre 2024',
            client: 'Magazine de Voyage',
            description: 'Expédition photographique à travers les paysages époustouflants de l\'Islande. Des cascades majestueuses aux aurores boréales.',
            image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '🏔️', caption: 'Vues montagneuses', description: 'Paysages dramatiques des montagnes islandaises.' },
                { id: 2, emoji: '🌊', caption: 'Côtes dramatiques', description: 'La puissance de l\'océan Atlantique.' },
                { id: 3, emoji: '🌌', caption: 'Spectacle d\'aurores boréales', description: 'Magie céleste des lumières du nord.' }
            ],
            details: {
                duration: '5 jours',
                photos: '200+ images éditées',
                equipment: 'Fujifilm X-T4',
                style: 'Épique, paysage, aventure'
            }
        },
        {
            id: 6,
            category: 'Commercial',
            emoji: '🛍️',
            title: 'Photos de Produits',
            location: 'Studio Produit',
            date: 'Novembre 2024',
            client: 'Marque E-commerce',
            description: 'Photographie de produits haute définition pour une nouvelle ligne de cosmétiques. Mise en valeur des textures et du packaging premium.',
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '📦', caption: 'Packshots épurés', description: 'Mise en valeur du design du packaging.' },
                { id: 2, emoji: '✨', caption: 'Utilisation lifestyle', description: 'Produits dans leur contexte d\'utilisation.' },
                { id: 3, emoji: '💡', caption: 'Gros plans détaillés', description: 'Textures et détails en haute définition.' }
            ],
            details: {
                duration: '8 heures',
                photos: '150 images éditées',
                equipment: 'Hasselblad X1D II',
                style: 'Minimaliste, high-key, net'
            }
        },
        {
            id: 7,
            category: 'Nouveau-né',
            emoji: '👶',
            title: 'Séance Nouveau-né',
            location: 'Studio à Domicile',
            date: 'Décembre 2024',
            client: 'Nouveaux Parents',
            description: 'Une séance douce et intime pour capturer les premiers jours de vie. Ambiance chaleureuse et apaisante pour le confort du bébé.',
            image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '🍼', caption: 'Bébé endormi', description: 'Douceur et sérénité des premiers jours.' },
                { id: 2, emoji: '🧸', caption: 'Mises en scène thématiques', description: 'Compositions créatives et tendres.' },
                { id: 3, emoji: '👣', caption: 'Petits détails', description: 'Les petites mains et pieds précieux.' }
            ],
            details: {
                duration: '3 heures',
                photos: '60 images éditées',
                equipment: 'Canon EOS R6',
                style: 'Doux, chaleureux, intime'
            }
        },
        {
            id: 8,
            category: 'Nature',
            emoji: '🌿',
            title: 'Beauté de la Nature',
            location: 'Parc National',
            date: 'Janvier 2025',
            client: 'ONG Environnementale',
            description: 'Documentation de la biodiversité locale pour une campagne de conservation. Focus sur la flore et la faune dans leur habitat naturel.',
            image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '🌲', caption: 'Scènes de forêt luxuriante', description: 'La richesse de la biodiversité forestière.' },
                { id: 2, emoji: '🦋', caption: 'Faune dans son habitat', description: 'Animaux sauvages dans leur environnement naturel.' },
                { id: 3, emoji: '💧', caption: 'Macro de gouttes de rosée', description: 'Détails microscopiques de la nature.' }
            ],
            details: {
                duration: 'Journée complète',
                photos: '100+ images éditées',
                equipment: 'Olympus OM-D E-M1 Mark III',
                style: 'Documentaire, vibrant, détaillé'
            }
        },
        {
            id: 9,
            category: 'Mode',
            emoji: '👗',
            title: 'Séance de Mode',
            location: 'Loft Urbain',
            date: 'Février 2025',
            client: 'Créateur de Mode',
            description: 'Shooting éditorial pour la nouvelle collection printemps-été. Style avant-gardiste avec des poses dynamiques et un éclairage dramatique.',
            image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
            images: [
                { id: 1, emoji: '👠', caption: 'Looks de défilé', description: 'Les pièces phares de la collection.' },
                { id: 2, emoji: '📸', caption: 'Coulisses', description: 'L\'énergie et la créativité du shooting.' },
                { id: 3, emoji: '🌟', caption: 'Pages éditoriales', description: 'Images destinées aux magazines de mode.' }
            ],
            details: {
                duration: '6 heures',
                photos: '120 images éditées',
                equipment: 'Phase One XF IQ4',
                style: 'Haute couture, éditorial, dramatique'
            }
        }
    ];

    const gallery = portfolioItems.find(item => item.id === parseInt(id)) || portfolioItems[0];
    const galleryImages = getGalleryImages(gallery.category, gallery.images.length);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setSelectedImage(gallery.images[index]);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % gallery.images.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(gallery.images[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + gallery.images.length) % gallery.images.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(gallery.images[newIndex]);
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage, currentImageIndex]);

    return (
        <>
            <div style={{ height: '80px' }}></div>

            <section className="gallery-details-section">
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="gallery-breadcrumb" data-aos="fade-down">
                        <span onClick={() => navigate('/')} className="breadcrumb-link">Accueil</span>
                        <span className="breadcrumb-separator">/</span>
                        <span onClick={() => navigate('/#portfolio')} className="breadcrumb-link">Portfolio</span>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">{gallery.title}</span>
                    </div>

                    {/* Hero Header */}
                    <div className="gallery-hero" data-aos="fade-up">
                        <div className="gallery-hero-badge">
                            <span className="hero-emoji">{gallery.emoji}</span>
                            <span className="hero-category">{gallery.category}</span>
                        </div>
                        <h1 className="gallery-hero-title">{gallery.title}</h1>
                        <p className="gallery-hero-description">{gallery.description}</p>

                        <div className="gallery-meta-grid">
                            <div className="meta-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="meta-icon-wrapper">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="meta-content">
                                    <span className="meta-label">Lieu</span>
                                    <span className="meta-value">{gallery.location}</span>
                                </div>
                            </div>
                            <div className="meta-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="meta-icon-wrapper">
                                    <FaCalendarAlt />
                                </div>
                                <div className="meta-content">
                                    <span className="meta-label">Date</span>
                                    <span className="meta-value">{gallery.date}</span>
                                </div>
                            </div>
                            <div className="meta-card" data-aos="fade-up" data-aos-delay="300">
                                <div className="meta-icon-wrapper">
                                    <FaUser />
                                </div>
                                <div className="meta-content">
                                    <span className="meta-label">Client</span>
                                    <span className="meta-value">{gallery.client}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="gallery-featured-image" data-aos="zoom-in">
                        <div className="featured-image-wrapper">
                            <img src={galleryImages[0]} alt={gallery.title} />
                            <div className="featured-overlay">
                                <button className="expand-btn" onClick={() => openLightbox(0)}>
                                    <FaExpand /> Voir en grand
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery Grid - Masonry Style */}
                    <div className="gallery-masonry-grid">
                        {gallery.images.map((image, index) => {
                            if (index === 0) return null; // Skip first image as it's featured
                            return (
                                <div
                                    className="masonry-item"
                                    key={image.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="masonry-image-wrapper">
                                        <img src={galleryImages[index]} alt={image.caption} loading="lazy" />
                                        <div className="masonry-overlay">
                                            <div className="overlay-content">
                                                <span className="overlay-emoji">{image.emoji}</span>
                                                <h4 className="overlay-caption">{image.caption}</h4>
                                                <button className="view-btn">
                                                    <FaExpand /> Voir
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Project Details */}
                    <div className="project-details-wrapper" data-aos="fade-up">
                        <div className="section-header-inline">
                            <FaCameraRetro className="section-icon" />
                            <h2>Détails du Projet</h2>
                        </div>
                        <div className="details-cards-grid">
                            <div className="detail-info-card" data-aos="flip-up" data-aos-delay="100">
                                <div className="detail-card-icon">
                                    <FaClock />
                                </div>
                                <div className="detail-card-content">
                                    <h4>Durée</h4>
                                    <p>{gallery.details.duration}</p>
                                </div>
                            </div>
                            <div className="detail-info-card" data-aos="flip-up" data-aos-delay="200">
                                <div className="detail-card-icon">
                                    <FaCamera />
                                </div>
                                <div className="detail-card-content">
                                    <h4>Livrables</h4>
                                    <p>{gallery.details.photos}</p>
                                </div>
                            </div>
                            <div className="detail-info-card" data-aos="flip-up" data-aos-delay="300">
                                <div className="detail-card-icon">
                                    <FaCogs />
                                </div>
                                <div className="detail-card-content">
                                    <h4>Équipement</h4>
                                    <p>{gallery.details.equipment}</p>
                                </div>
                            </div>
                            <div className="detail-info-card" data-aos="flip-up" data-aos-delay="400">
                                <div className="detail-card-icon">
                                    <FaPalette />
                                </div>
                                <div className="detail-card-content">
                                    <h4>Style</h4>
                                    <p>{gallery.details.style}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="gallery-cta-section" data-aos="fade-up">
                        <div className="cta-content">
                            <h2 className="cta-title">Vous aimez ce que vous voyez ?</h2>
                            <p className="cta-subtitle">Créons quelque chose d'incroyable ensemble</p>
                            <div className="cta-buttons-wrapper">
                                <button className="btn btn-primary" onClick={() => navigate('/#contact')}>
                                    Réserver une Séance
                                </button>
                                <button className="btn btn-outline" onClick={() => navigate('/#portfolio')}>
                                    Voir Plus de Travaux
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <FaTimes />
                    </button>

                    <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                        <FaChevronLeft />
                    </button>

                    <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                        <FaChevronRight />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox-image-wrapper">
                            <img src={galleryImages[currentImageIndex]} alt={selectedImage.caption} />
                        </div>

                        <div className="lightbox-info">
                            <div className="lightbox-header">
                                <span className="lightbox-emoji">{selectedImage.emoji}</span>
                                <div className="lightbox-actions">
                                    <button className="action-btn" title="Ajouter aux favoris">
                                        <FaHeart />
                                    </button>
                                    <button className="action-btn" title="Partager">
                                        <FaShare />
                                    </button>
                                </div>
                            </div>
                            <h3 className="lightbox-caption">{selectedImage.caption}</h3>
                            <p className="lightbox-description">{selectedImage.description}</p>
                            <div className="lightbox-counter">
                                {currentImageIndex + 1} / {gallery.images.length}
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="lightbox-thumbnails">
                        {gallery.images.map((img, idx) => (
                            <div
                                key={img.id}
                                className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); setSelectedImage(img); }}
                            >
                                <img src={galleryImages[idx]} alt={img.caption} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryDetails;
