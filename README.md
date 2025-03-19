<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MédiaBAZAR - Votre spécialiste high-tech</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <img src="logo.png" alt="MédiaBAZAR Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#products">Produits</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="user-actions">
                <a href="#" id="search-icon"><i class="fas fa-search"></i></a>
                <a href="#" id="cart-icon"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a>
                <a href="#" id="account-icon"><i class="fas fa-user"></i></a>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <h1>Bienvenue chez MédiaBAZAR</h1>
                <p>Votre destination pour tous vos besoins high-tech</p>
                <a href="#products" class="cta-button">Découvrir nos produits</a>
            </div>
        </section>

        <section id="featured-products" class="featured-products">
            <div class="container">
                <h2>Produits vedettes</h2>
                <div class="product-slider">
                    <!-- Les produits seront insérés ici dynamiquement -->
                </div>
            </div>
        </section>

        <section id="services" class="services">
            <div class="container">
                <h2>Nos Services</h2>
                <div class="service-grid">
                    <div class="service-card">
                        <i class="fas fa-tools"></i>
                        <h3>Réparation</h3>
                        <p>Réparation rapide et fiable pour vos appareils.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-laptop"></i>
                        <h3>Vente</h3>
                        <p>Large gamme de produits high-tech.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-headset"></i>
                        <h3>Support</h3>
                        <p>Assistance technique experte.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <h2>À propos de MédiaBAZAR</h2>
                <p>MédiaBAZAR est votre partenaire de confiance pour tous vos besoins en technologie depuis 2010. Notre équipe d'experts passionnés est là pour vous conseiller et vous offrir le meilleur service possible.</p>
            </div>
        </section>

        <section id="testimonials" class="testimonials">
            <div class="container">
                <h2>Ce que disent nos clients</h2>
                <div class="testimonial-slider">
                    <!-- Les témoignages seront insérés ici dynamiquement -->
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2>Contactez-nous</h2>
                <div class="contact-grid">
                    <div class="contact-form">
                        <form id="contact-form">
                            <input type="text" name="name" placeholder="Votre nom" required>
                            <input type="email" name="email" placeholder="Votre email" required>
                            <textarea name="message" placeholder="Votre message" required></textarea>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div class="contact-info">
                        <h3>Informations</h3>
                        <p><i class="fas fa-map-marker-alt"></i> 180 Rue de la République, 59430 Dunkerque</p>
                        <p><i class="fas fa-phone"></i> 03 28 26 98 01</p>
                        <p><i class="fas fa-envelope"></i> contact@mediabazar.com</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h4>MédiaBAZAR</h4>
                    <p>Votre spécialiste high-tech à Dunkerque</p>
                </div>
                <div class="footer-column">
                    <h4>Liens rapides</h4>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#products">Produits</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Suivez-nous</h4>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>Newsletter</h4>
                    <form id="newsletter-form">
                        <input type="email" placeholder="Votre email" required>
                        <button type="submit">S'abonner</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 MédiaBAZAR. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Votre panier</h2>
            <div id="cart-items">
                <!-- Les articles du panier seront insérés ici dynamiquement -->
            </div>
            <div id="cart-total">
                <p>Total: <span id="cart-total-amount">0.00 €</span></p>
            </div>
            <button id="checkout-button">Passer à la caisse</button>
        </div>
    </div>

    <div id="search-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Recherche</h2>
            <form id="search-form">
                <input type="text" id="search-input" placeholder="Rechercher un produit...">
                <button type="submit">Rechercher</button>
            </form>
            <div id="search-results">
                <!-- Les résultats de recherche seront insérés ici dynamiquement -->
            </div>
        </div>
    </div>
</body>
</html>
