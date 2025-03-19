// script.js
$(document).ready(function() {
    // Gestion du panier
    let cartCount = 0;
    let cartTotal = 0;

    function updateCart() {
        $('#cart-count').text(cartCount);
        $('#cart-total-amount').text(cartTotal.toFixed(2) + ' €');
    }

    $('.add-to-cart').on('click', function() {
        cartCount++;
        cartTotal += parseFloat($(this).data('price'));
        updateCart();
    });

    // Gestion des modales
    $('.modal .close').on('click', function() {
        $(this).closest('.modal').hide();
    });

    $('#cart-icon').on('click', function(e) {
        e.preventDefault();
        $('#cart-modal').show();
    });

    $('#search-icon').on('click', function(e) {
        e.preventDefault();
        $('#search-modal').show();
    });

    // Formulaire de contact
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        // Ici, vous pouvez ajouter le code pour envoyer le formulaire
        alert('Message envoyé !');
    });

    // Formulaire de newsletter
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault();
        // Ici, vous pouvez ajouter le code pour gérer l'abonnement à la newsletter
        alert('Vous êtes maintenant abonné à notre newsletter !');
    });

    // Slider de produits
    function loadProducts() {
        // Ici, vous pouvez charger dynamiquement les produits depuis une API ou une base de données
        const products = [
            { name: 'Smartphone XYZ', price: 799, image: 'product1.jpg' },
            { name: 'Tablette ABC', price: 499, image: 'product2.jpg' },
            { name: 'Laptop DEF', price: 1299,
