import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetails.css'; // Import the new CSS file

const BlogDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Données des articles de blog (dans une vraie application, cela viendrait d'une API ou d'une base de données)
    const blogPosts = {
        1: {
            id: 1,
            image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&h=800&fit=crop',
            title: '10 Conseils Essentiels pour une Photographie de Portrait Parfaite',
            excerpt: 'Découvrez les secrets pour capturer des portraits époustouflants...',
            date: '25 Nov 2025',
            author: 'Farah',
            authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            category: 'Tutoriel',
            readTime: '8 min de lecture',
            content: `
                <p>La photographie de portrait est une forme d'art qui nécessite à la fois des compétences techniques et la capacité de se connecter avec votre sujet. Que vous photographiez un client, un ami ou un membre de la famille, ces conseils essentiels vous aideront à capturer des portraits époustouflants qui se démarquent vraiment.</p>
                <h2>1. Connectez-vous avec Votre Sujet</h2>
                <p>L'aspect le plus important de la photographie de portrait est d'établir une connexion avec votre sujet. Prenez le temps de parler avec eux, de les mettre à l'aise et de comprendre leur personnalité. Un sujet détendu sera toujours mieux photographié qu'un sujet tendu.</p>
                <h2>2. Maîtrisez la Lumière Naturelle</h2>
                <p>La lumière naturelle est votre meilleure amie en photographie de portrait. L'heure dorée (peu après le lever du soleil ou avant le coucher du soleil) offre une lumière douce et flatteuse qui améliore les tons de la peau et crée de beaux reflets dans les yeux. Évitez le soleil dur de midi qui peut créer des ombres peu flatteuses.</p>
                <h2>3. Concentrez-vous sur les Yeux</h2>
                <p>Les yeux sont les fenêtres de l'âme, et ils doivent être la partie la plus nette de votre portrait. Utilisez l'autofocus à point unique pour vous assurer que les yeux sont parfaitement nets. Même si d'autres parties du visage sont légèrement floues, des yeux nets rendront le portrait captivant.</p>
                <h2>4. Utilisez la Bonne Ouverture</h2>
                <p>Une grande ouverture (f/1.8 à f/2.8) crée une belle profondeur de champ peu profonde, floutant l'arrière-plan et faisant ressortir votre sujet. Cependant, faites attention à ne pas aller trop large, car vous pourriez perdre des traits faciaux importants dans le flou.</p>
                <h2>5. Choisissez l'Arrière-plan Parfait</h2>
                <p>Votre arrière-plan doit compléter, et non distraire, votre sujet. Recherchez des arrière-plans simples et épurés ou utilisez une grande ouverture pour flouter les arrière-plans chargés. Considérez comment les couleurs de l'arrière-plan interagissent avec les vêtements et le teint de votre sujet.</p>
                <h2>6. Expérimentez avec les Angles</h2>
                <p>Ne photographiez pas seulement au niveau des yeux. Soyez créatif avec vos angles pour trouver la perspective la plus flatteuse. Photographier légèrement d'en haut peut être amincissant et universellement flatteur. Un angle plus bas peut transmettre la puissance et la force. Variez pendant votre séance.</p>
                <h2>7. Guidez, Ne Posez Pas</h2>
                <p>Au lieu d'une pose rigide, donnez à votre sujet des directions et des actions. Des phrases comme "marchez vers moi", "regardez par-dessus votre épaule" ou "jouez avec vos cheveux" peuvent conduire à des images plus naturelles et dynamiques qu'une pose statique. Cela aide à capturer des expressions authentiques.</p>
                <h2>8. Utilisez les Accessoires avec Réflexion</h2>
                <p>Les accessoires peuvent ajouter de la personnalité et du contexte à un portrait. Un musicien avec son instrument, un artiste dans son atelier ou un enfant avec son jouet préféré peuvent raconter une histoire. Assurez-vous que les accessoires sont significatifs et n'encombrent pas l'image.</p>
                <h2>9. Faites Attention à la Garde-robe</h2>
                <p>Conseillez vos sujets sur quoi porter. Les couleurs unies ou les motifs subtils fonctionnent généralement mieux que les graphiques criards ou les logos. Les vêtements doivent correspondre à l'ambiance souhaitée de la photo et au lieu. Le confort est également essentiel pour un sujet détendu.</p>
                <h2>10. Maîtrisez le Post-traitement</h2>
                <p>Le montage est l'endroit où vous pouvez vraiment améliorer vos portraits. Cela ne signifie pas une retouche lourde. Concentrez-vous sur l'ajustement de l'exposition, du contraste et de la couleur pour correspondre à votre vision artistique. Une légère retouche pour enlever les imperfections temporaires peut être faite, mais préservez l'aspect naturel du sujet.</p>
                <h3>Conclusion</h3>
                <p>Une excellente photographie de portrait est un mélange de connaissances techniques, de vision artistique et de compétences interpersonnelles. En pratiquant ces dix conseils, vous serez sur la bonne voie pour créer des portraits captivants qui ne sont pas seulement des images, mais des histoires.</p>
            `
        },
        2: {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop',
            title: 'Maîtriser la Lumière Naturelle en Photographie',
            excerpt: 'Apprenez à exploiter la puissance de la lumière naturelle...',
            date: '20 Nov 2025',
            author: 'Farah',
            authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            category: 'Trucs & Astuces',
            readTime: '9 min de lecture',
            content: `
                <p>La lumière naturelle est l'un des outils les plus puissants et polyvalents dans le kit d'un photographe. Elle est gratuite, elle est partout, et elle peut créer une large gamme d'ambiances, du doux et rêveur au dur et dramatique. Comprendre comment observer, prédire et manipuler la lumière naturelle est une compétence qui élèvera votre photographie au niveau supérieur.</p>
                <h2>Les Qualités de la Lumière</h2>
                <p>Tout d'abord, il est important de comprendre que toute la lumière n'est pas la même. Nous pouvons la catégoriser par sa qualité (dure vs. douce) et sa direction.</p>
                <p><strong>La lumière dure</strong>, comme le soleil direct par temps clair, crée des ombres nettes et bien définies. Elle ajoute du contraste et un sentiment de drame à une image. Elle peut être difficile à utiliser pour les portraits, mais elle est fantastique pour les détails architecturaux ou pour créer des images graphiques et audacieuses.</p>
                <p><strong>La lumière douce</strong> est diffusée et crée des ombres douces et subtiles. Pensez à un jour nuageux, à la lumière à l'ombre ouverte, ou à la lumière d'une fenêtre qui n'est pas en plein soleil. Cette lumière est très flatteuse pour les portraits car elle enveloppe le sujet, minimisant les imperfections de la peau et créant une ambiance douce.</p>
                <h2>Le Timing est Tout : Les Heures de Lumière</h2>
                <h3>L'Heure Dorée</h3>
                <p>C'est le moment magique peu après le lever du soleil et avant le coucher du soleil. Le soleil est bas dans le ciel, créant une lumière chaude et dorée qui est à la fois douce et directionnelle. C'est le moment le plus recherché par les photographes de portrait et de paysage pour ses qualités rêveuses et flatteuses.</p>
                <h3>L'Heure Bleue</h3>
                <p>La période juste avant le lever du soleil ou juste après le coucher du soleil, l'heure bleue offre une lumière fraîche, ambiante et très douce. Le ciel prend une teinte bleue profonde, et les lumières de la ville commencent à scintiller, ce qui en fait un moment parfait pour des paysages urbains mélancoliques ou des paysages sereins.</p>
                <h3>Soleil de Midi</h3>
                <p>Souvent considéré comme le "pire" moment pour photographier, le soleil direct de midi crée des ombres dures au-dessus de la tête. Cependant, vous pouvez l'utiliser à votre avantage ! Trouvez une "ombre ouverte" sous un bâtiment ou un grand arbre. Le sujet sera éclairé par la lumière douce et indirecte du ciel, tandis que l'arrière-plan peut rester vivement éclairé, créant une belle séparation.</p>
                <h2>Direction de la Lumière</h2>
                <p>La direction d'où la lumière frappe votre sujet change radicalement l'apparence et la sensation de la photo.</p>
                <ul>
                    <li><strong>Lumière Frontale :</strong> La source de lumière est derrière le photographe. Elle éclaire le sujet uniformément et peut être plate, mais elle est idéale pour des prises de vue claires et bien éclairées.</li>
                    <li><strong>Lumière Latérale :</strong> La lumière frappe le sujet sur le côté. C'est parfait pour créer de la profondeur, de la texture et de la dimension. Elle révèle la forme et le volume, ce qui en fait un favori pour les portraits dramatiques.</li>
                    <li><strong>Contre-jour :</strong> La source de lumière est derrière le sujet. Cela peut créer un beau "contre-jour" ou effet de halo autour de votre sujet, le séparant de l'arrière-plan. Faites attention à exposer pour le visage de votre sujet, ou vous pouvez l'utiliser pour créer des silhouettes saisissantes.</li>
                </ul>
                <h2>Utiliser la Lumière en Intérieur</h2>
                <p>Vous n'avez pas besoin d'un studio pour maîtriser la lumière. Une simple fenêtre peut être votre meilleure amie. La lumière de fenêtre est une grande source de lumière douce. Placer votre sujet près d'une fenêtre et le tourner à différents angles par rapport à la lumière peut créer une variété de portraits d'aspect professionnel. Vous pouvez utiliser un réflecteur blanc (même un morceau de carton mousse) pour renvoyer une partie de cette lumière de fenêtre sur le côté ombragé du visage de votre sujet pour un aspect plus équilibré.</p>
                <h3>Conclusion</h3>
                <p>La meilleure façon de maîtriser la lumière naturelle est de devenir un observateur. Faites attention à la façon dont la lumière tombe à différents moments de la journée et dans différentes conditions météorologiques. Pratiquez, expérimentez, et vous serez bientôt capable d'entrer dans n'importe quelle situation et de savoir exactement comment utiliser la lumière disponible pour créer des images époustouflantes.</p>
            `
        },
        3: {
            id: 3,
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
            title: 'Dans les Coulisses : Photographie de Mariage',
            excerpt: 'Un regard exclusif sur la journée d\'un photographe de mariage...',
            date: '15 Nov 2025',
            author: 'Farah',
            authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            category: 'Dans les Coulisses',
            readTime: '10 min de lecture',
            content: `
                <p>La photographie de mariage est plus que simplement prendre des photos. Il s'agit de raconter l'histoire de l'un des jours les plus importants de la vie d'un couple. C'est un mélange unique de portrait, de photojournalisme, de photographie d'événement et de nature morte. Un photographe de mariage doit être un maître de son métier, une présence calme dans une tempête d'émotions, et un conteur dans l'âme. Voici un aperçu derrière le rideau de ce qu'implique une journée de mariage.</p>
                <h2>La Consultation : Tout Commence par une Histoire</h2>
                <p>Des semaines ou même des mois avant le mariage, le processus commence par une conversation approfondie avec le couple. C'est là que j'apprends leur histoire, leurs personnalités et leur vision de la journée. Nous discutons du programme, des membres clés de la famille et des moments qui sont les plus importants pour eux. Cette connexion est cruciale pour établir la confiance et s'assurer que les photos finales reflètent qui ils sont.</p>
                <h2>Préparation : Le Matériel et le Plan</h2>
                <p>Mon sac est emballé avec une précision militaire la veille. J'ai au moins deux boîtiers d'appareil photo professionnels, une variété d'objectifs (du grand angle pour des prises de vue épiques de la cérémonie au téléobjectif pour des moments candides), plusieurs flashs, et une abondance de batteries et de cartes mémoire. Le matériel de secours n'est pas un luxe ; c'est une nécessité. J'ai également le calendrier de la journée, la liste de prises de vue et les coordonnées des autres fournisseurs imprimés et enregistrés sur mon téléphone.</p>
                <h2>Le Jour du Mariage : Un Marathon Photographique</h2>
                <h3>Préparatifs</h3>
                <p>La journée commence souvent par les photos de "préparation". C'est un moment d'excitation nerveuse et de beaux détails. Je capture la robe, les alliances, les chaussures et les moments calmes avec les demoiselles d'honneur ou les garçons d'honneur. Il s'agit de capturer l'anticipation dans l'air, une histoire qui se déroule avant l'événement principal.</p>
                <h3>Le Premier Regard</h3>
                <p>De nombreux couples optent maintenant pour un "premier regard" avant la cérémonie. C'est un moment intime et privé où ils se voient pour la première fois. C'est souvent l'une des parties les plus émotionnelles de la journée et permet des réactions authentiques et sincères sans des centaines d'yeux qui regardent. Cela offre également une excellente occasion détendue pour des portraits de couple.</p>
                <h3>La Cérémonie</h3>
                <p>C'est le cœur de la journée. Mon objectif ici est d'être un fantôme. Je me déplace silencieusement et discrètement, en utilisant de longs objectifs pour capturer les moments clés : la marche dans l'allée, l'échange des vœux, le premier baiser. Je cherche des larmes, des sourires et les regards amoureux entre le couple.</p>
                <h3>Portraits de Famille et de Couple</h3>
                <p>Après la cérémonie, nous passons aux portraits formels. Cette partie nécessite de l'organisation et de l'efficacité pour passer en douceur à travers les photos de famille. Ensuite, je vole le couple pour leur propre séance de portrait. Nous utilisons la meilleure lumière de la journée pour créer les images époustouflantes et romantiques qui seront accrochées sur leurs murs pendant des années.</p>
                <h3>La Réception</h3>
                <p>La fête commence ! La réception consiste à capturer l'énergie et la joie. L'entrée grandiose, la première danse, les discours émouvants, la coupe du gâteau et les moments fous sur la piste de danse. Je passe du flash sur l'appareil photo au flash hors caméra pour créer des images dynamiques et vibrantes qui ressemblent à la fête elle-même.</p>
                <h2>Après le Mariage : La Chambre Noire Numérique</h2>
                <p>Le travail est loin d'être terminé. Je passe de nombreuses heures à trier des milliers d'images pour sélectionner les meilleures. Chaque photo sélectionnée est ensuite éditée professionnellement pour améliorer sa beauté tout en maintenant une sensation intemporelle. C'est là que l'histoire finale est polie et préparée pour la livraison au couple heureux.</p>
                <h3>Conclusion</h3>
                <p>Être photographe de mariage est un honneur et une responsabilité énormes. C'est une journée sans possibilité de recommencer, et la confiance qu'un couple place en vous est immense. Mais capturer les moments fugaces d'amour et de joie, et les préserver pour toute une vie, est l'un des emplois les plus gratifiants imaginables.</p>
            `
        }
    };

    const post = blogPosts[id] || blogPosts[1];

    const relatedPosts = Object.values(blogPosts)
        .filter(p => p.id !== post.id)
        .slice(0, 2);

    return (
        <div className="blog-details-page-new">
            {/* New Hero Section */}
            <section
                className="blog-details-hero-new"
                style={{ '--bg-image': `url(${post.image})` }}
            >
                <div className="blog-details-hero-content-new">
                    <div className="blog-category-new">{post.category}</div>
                    <h1 className="blog-title-new">{post.title}</h1>
                    <div className="blog-meta-new">
                        <span className="meta-item-new">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {post.date}
                        </span>
                        <span className="meta-item-new">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="blog-main-content-new">
                    {/* Article Content */}
                    <div className="blog-article-container-new">
                        <article className="article-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Sidebar */}
                    <aside className="blog-sidebar-new">
                        <div className="sidebar-widget author-widget">
                            <h3>À Propos de l'Auteur</h3>
                            <div className="author-widget-content">
                                <img src={post.authorImage} alt={post.author} className="author-widget-image" />
                                <h4 className="author-widget-name">{post.author}</h4>
                                <p className="author-widget-bio">Photographe professionnelle passionnée par la narration à travers les images.</p>
                            </div>
                        </div>

                        <div className="sidebar-widget share-widget">
                            <h3>Partager l'Article</h3>
                            <div className="share-widget-buttons">
                                <a href="#" className="share-btn-new facebook"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
                                <a href="#" className="share-btn-new twitter"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></a>
                                <a href="#" className="share-btn-new linkedin"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                                <a href="#" className="share-btn-new pinterest"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg></a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Related Posts Section */}
            <div className="related-posts-section-new">
                <div className="container">
                    <h2 className="section-title">Articles Connexes</h2>
                    <div className="related-posts-grid-new">
                        {relatedPosts.map(relatedPost => (
                            <Link to={`/blog/${relatedPost.id}`} className="related-post-card-new" key={relatedPost.id}>
                                <div className="related-post-image-new">
                                    <img src={relatedPost.image} alt={relatedPost.title} />
                                </div>
                                <div className="related-post-content-new">
                                    <h4>{relatedPost.title}</h4>
                                    <div className="related-post-meta-new">
                                        <span>{relatedPost.date}</span>
                                        <span>{relatedPost.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;