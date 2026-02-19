// English and Spanish translations
const translations = {
    en: {
        // Page
        'pageTitle': 'Costa Rican Indigenous Masks - Authentic Artisan Collection',
        // Nav
        'nav.home': 'Home',
        'nav.masks': 'Masks',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'tagline': 'Costa Rican Heritage',

        // Hero
        'hero.title': 'Authentic Costa Rican Indigenous Masks',
        'hero.subtitle': 'Handcrafted by skilled artisans, each mask tells a story of rich cultural heritage and traditional craftsmanship',
        'hero.cta': 'Explore Collection',

        // About
        'about.title': 'Preserving Cultural Heritage',
        'about.p1': 'Our collection features authentic indigenous masks crafted by Costa Rican artisans. Each piece is a unique work of art, representing centuries of tradition and cultural significance. These masks are not just decorative items—they are symbols of identity, spirituality, and the rich tapestry of Costa Rican indigenous culture.',
        'about.p2': "Every mask in our collection is carefully selected to ensure authenticity and quality. By purchasing from us, you're supporting local artisans and helping preserve these important cultural traditions for future generations.",

        // Products
        'products.title': 'Our Collection',
        'products.subtitle': 'Each mask is a unique piece of art, priced at $50',
        'product.name': 'Traditional Indigenous Mask',
        'btn.addToCart': 'Add to Cart',
        'btn.added': 'Added!',

        // Cart
        'cart.title': 'Your Cart',
        'cart.empty': 'Your cart is empty',
        'cart.total': 'Total',
        'cart.checkout': 'Checkout',

        // Checkout
        'checkout.title': 'Checkout',
        'checkout.name': 'Full Name',
        'checkout.email': 'Email',
        'checkout.phone': 'Phone',
        'checkout.address': 'Shipping Address',
        'checkout.city': 'City',
        'checkout.zip': 'ZIP Code',
        'checkout.country': 'Country',
        'checkout.placeOrder': 'Place Order',

        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': "Have questions? We'd love to hear from you!",
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.sendMessage': 'Send us a Message',
        'contact.yourName': 'Your Name',
        'contact.yourEmail': 'Your Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',

        // Footer
        'footer.about': 'Preserving Costa Rican cultural heritage through authentic artisan masks.',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2024 Máscaras Indígenas. All rights reserved.',

        // Alerts
        'alert.orderThanks': 'Thank you for your order, {name}!',
        'alert.orderTotal': 'Your order total is ${total}.',
        'alert.orderContact': 'We will contact you at {email} to confirm your order and arrange shipping.',
        'alert.contactThanks': 'Thank you for your message, {name}!',
        'alert.contactReply': "We'll get back to you at {email} as soon as possible."
    },
    es: {
        // Page
        'pageTitle': 'Máscaras Indígenas de Costa Rica - Colección Artesanal Auténtica',
        // Nav
        'nav.home': 'Inicio',
        'nav.masks': 'Máscaras',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'tagline': 'Patrimonio Costarricense',

        // Hero
        'hero.title': 'Máscaras Indígenas Auténticas de Costa Rica',
        'hero.subtitle': 'Hechas a mano por artesanos expertos, cada máscara cuenta una historia de rico patrimonio cultural y artesanía tradicional',
        'hero.cta': 'Explorar Colección',

        // About
        'about.title': 'Preservando el Patrimonio Cultural',
        'about.p1': 'Nuestra colección presenta máscaras indígenas auténticas elaboradas por artesanos costarricenses. Cada pieza es una obra de arte única que representa siglos de tradición e importancia cultural. Estas máscaras no son solo objetos decorativos—son símbolos de identidad, espiritualidad y el rico tapiz de la cultura indígena costarricense.',
        'about.p2': 'Cada máscara de nuestra colección es seleccionada con cuidado para garantizar autenticidad y calidad. Al comprar con nosotros, apoyas a artesanos locales y ayudas a preservar estas importantes tradiciones culturales para las generaciones futuras.',

        // Products
        'products.title': 'Nuestra Colección',
        'products.subtitle': 'Cada máscara es una pieza de arte única, a $50',
        'product.name': 'Máscara Indígena Tradicional',
        'btn.addToCart': 'Añadir al Carrito',
        'btn.added': '¡Añadido!',

        // Cart
        'cart.title': 'Tu Carrito',
        'cart.empty': 'Tu carrito está vacío',
        'cart.total': 'Total',
        'cart.checkout': 'Pagar',

        // Checkout
        'checkout.title': 'Pagar',
        'checkout.name': 'Nombre Completo',
        'checkout.email': 'Correo Electrónico',
        'checkout.phone': 'Teléfono',
        'checkout.address': 'Dirección de Envío',
        'checkout.city': 'Ciudad',
        'checkout.zip': 'Código Postal',
        'checkout.country': 'País',
        'checkout.placeOrder': 'Realizar Pedido',

        // Contact
        'contact.title': 'Contáctenos',
        'contact.subtitle': '¿Tienes preguntas? ¡Nos encantaría saber de ti!',
        'contact.email': 'Correo',
        'contact.phone': 'Teléfono',
        'contact.location': 'Ubicación',
        'contact.sendMessage': 'Envíanos un Mensaje',
        'contact.yourName': 'Tu Nombre',
        'contact.yourEmail': 'Tu Correo',
        'contact.message': 'Mensaje',
        'contact.send': 'Enviar Mensaje',

        // Footer
        'footer.about': 'Preservando el patrimonio cultural costarricense a través de máscaras artesanales auténticas.',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.contact': 'Contacto',
        'footer.copyright': '© 2024 Máscaras Indígenas. Todos los derechos reservados.',

        // Alerts
        'alert.orderThanks': '¡Gracias por tu pedido, {name}!',
        'alert.orderTotal': 'El total de tu pedido es ${total}.',
        'alert.orderContact': 'Te contactaremos en {email} para confirmar tu pedido y coordinar el envío.',
        'alert.contactThanks': '¡Gracias por tu mensaje, {name}!',
        'alert.contactReply': 'Te responderemos a {email} lo antes posible.'
    }
};

function t(key) {
    const lang = currentLang || 'en';
    return translations[lang][key] ?? translations.en[key] ?? key;
}
