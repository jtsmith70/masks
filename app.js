// Spanish vocabulary database
const vocabulary = [
    { spanish: "hola", english: "hello", example: "Hola, ¿cómo estás?" },
    { spanish: "adiós", english: "goodbye", example: "Adiós, hasta luego." },
    { spanish: "gracias", english: "thank you", example: "Muchas gracias por tu ayuda." },
    { spanish: "por favor", english: "please", example: "Por favor, pásame el libro." },
    { spanish: "sí", english: "yes", example: "Sí, estoy de acuerdo." },
    { spanish: "no", english: "no", example: "No, no puedo ir." },
    { spanish: "agua", english: "water", example: "Necesito un vaso de agua." },
    { spanish: "comida", english: "food", example: "La comida está deliciosa." },
    { spanish: "casa", english: "house", example: "Vivo en una casa grande." },
    { spanish: "familia", english: "family", example: "Mi familia es muy importante." },
    { spanish: "amigo", english: "friend", example: "Él es mi mejor amigo." },
    { spanish: "trabajo", english: "work", example: "Voy al trabajo todos los días." },
    { spanish: "escuela", english: "school", example: "Los niños van a la escuela." },
    { spanish: "libro", english: "book", example: "Estoy leyendo un libro interesante." },
    { spanish: "tiempo", english: "time", example: "No tengo tiempo ahora." },
    { spanish: "día", english: "day", example: "Hoy es un día hermoso." },
    { spanish: "noche", english: "night", example: "Buenas noches, que descanses." },
    { spanish: "mañana", english: "morning", example: "Buenos días, buenos días." },
    { spanish: "bien", english: "well/good", example: "Estoy bien, gracias." },
    { spanish: "mal", english: "bad", example: "Me siento mal hoy." },
    { spanish: "grande", english: "big", example: "Tengo una casa grande." },
    { spanish: "pequeño", english: "small", example: "El perro es pequeño." },
    { spanish: "bueno", english: "good", example: "Es un buen día." },
    { spanish: "malo", english: "bad", example: "Eso es malo." },
    { spanish: "nuevo", english: "new", example: "Tengo un coche nuevo." },
    { spanish: "viejo", english: "old", example: "Ese edificio es viejo." },
    { spanish: "fácil", english: "easy", example: "Este ejercicio es fácil." },
    { spanish: "difícil", english: "difficult", example: "El examen fue difícil." },
    { spanish: "rápido", english: "fast", example: "Corre muy rápido." },
    { spanish: "lento", english: "slow", example: "El tráfico está lento." },
    // Advanced vocabulary
    { spanish: "entender", english: "to understand", example: "No entiendo la pregunta." },
    { spanish: "aprender", english: "to learn", example: "Quiero aprender español." },
    { spanish: "pensar", english: "to think", example: "Necesito pensar en esto." },
    { spanish: "decidir", english: "to decide", example: "Debo decidir pronto." },
    { spanish: "conseguir", english: "to get/obtain", example: "Logré conseguir el trabajo." },
    { spanish: "explicar", english: "to explain", example: "Puedes explicar esto?" },
    { spanish: "desarrollar", english: "to develop", example: "Vamos a desarrollar un plan." },
    { spanish: "comprender", english: "to comprehend", example: "No puedo comprender esto." },
    { spanish: "realizar", english: "to carry out/realize", example: "Voy a realizar mi sueño." },
    { spanish: "considerar", english: "to consider", example: "Debemos considerar todas las opciones." },
    { spanish: "demostrar", english: "to demonstrate", example: "Puedo demostrar que tengo razón." },
    { spanish: "establecer", english: "to establish", example: "Necesitamos establecer reglas." },
    { spanish: "mantener", english: "to maintain", example: "Debo mantener mi promesa." },
    { spanish: "obtener", english: "to obtain", example: "Es difícil obtener resultados." },
    { spanish: "presentar", english: "to present", example: "Voy a presentar mi proyecto." },
    { spanish: "proporcionar", english: "to provide", example: "Puedo proporcionar ayuda." },
    { spanish: "reconocer", english: "to recognize", example: "No puedo reconocer su voz." },
    { spanish: "requerir", english: "to require", example: "Esto requiere mucho esfuerzo." },
    { spanish: "resultar", english: "to result/turn out", example: "Esto puede resultar difícil." },
    { spanish: "significar", english: "to mean/signify", example: "¿Qué significa esta palabra?" },
    { spanish: "sugerir", english: "to suggest", example: "Te sugiero que estudies más." },
    { spanish: "transformar", english: "to transform", example: "Quiero transformar mi vida." },
    { spanish: "utilizar", english: "to utilize/use", example: "Puedes utilizar este método." },
    { spanish: "verificar", english: "to verify", example: "Debo verificar la información." },
    { spanish: "complicado", english: "complicated", example: "Es un problema complicado." },
    { spanish: "significativo", english: "significant", example: "Es un cambio significativo." },
    { spanish: "esencial", english: "essential", example: "Es esencial aprender esto." },
    { spanish: "necesario", english: "necessary", example: "Es necesario estudiar." },
    { spanish: "importante", english: "important", example: "Es muy importante." },
    { spanish: "posible", english: "possible", example: "Es posible que llueva." }
];

// Common phrases
const commonPhrases = [
    { spanish: "Buenos días", english: "Good morning" },
    { spanish: "Buenas tardes", english: "Good afternoon" },
    { spanish: "Buenas noches", english: "Good evening/night" },
    { spanish: "¿Cómo estás?", english: "How are you?" },
    { spanish: "Estoy bien", english: "I'm fine" },
    { spanish: "Mucho gusto", english: "Nice to meet you" },
    { spanish: "¿Cómo te llamas?", english: "What's your name?" },
    { spanish: "Me llamo...", english: "My name is..." },
    { spanish: "¿De dónde eres?", english: "Where are you from?" },
    { spanish: "Soy de...", english: "I'm from..." },
    { spanish: "¿Hablas inglés?", english: "Do you speak English?" },
    { spanish: "No entiendo", english: "I don't understand" },
    { spanish: "¿Puedes repetir?", english: "Can you repeat?" },
    { spanish: "¿Cuánto cuesta?", english: "How much does it cost?" },
    { spanish: "¿Dónde está...?", english: "Where is...?" },
    { spanish: "Necesito ayuda", english: "I need help" },
    { spanish: "Lo siento", english: "I'm sorry" },
    { spanish: "Perdón", english: "Excuse me" },
    { spanish: "Con permiso", english: "Excuse me (when passing)" },
    { spanish: "¡Salud!", english: "Bless you!/Cheers!" }
];

// Spanish-English Cognates (Words Similar to English)
const cognates = [
    { spanish: "hospital", english: "hospital", category: "Medical" },
    { spanish: "animal", english: "animal", category: "Nature" },
    { spanish: "perfecto", english: "perfect", category: "Adjectives" },
    { spanish: "importante", english: "important", category: "Adjectives" },
    { spanish: "interesante", english: "interesting", category: "Adjectives" },
    { spanish: "diferente", english: "different", category: "Adjectives" },
    { spanish: "similar", english: "similar", category: "Adjectives" },
    { spanish: "popular", english: "popular", category: "Adjectives" },
    { spanish: "normal", english: "normal", category: "Adjectives" },
    { spanish: "especial", english: "special", category: "Adjectives" },
    { spanish: "general", english: "general", category: "Adjectives" },
    { spanish: "personal", english: "personal", category: "Adjectives" },
    { spanish: "nacional", english: "national", category: "Adjectives" },
    { spanish: "internacional", english: "international", category: "Adjectives" },
    { spanish: "natural", english: "natural", category: "Adjectives" },
    { spanish: "cultural", english: "cultural", category: "Adjectives" },
    { spanish: "musical", english: "musical", category: "Adjectives" },
    { spanish: "social", english: "social", category: "Adjectives" },
    { spanish: "local", english: "local", category: "Adjectives" },
    { spanish: "central", english: "central", category: "Adjectives" },
    { spanish: "información", english: "information", category: "Nouns" },
    { spanish: "nación", english: "nation", category: "Nouns" },
    { spanish: "acción", english: "action", category: "Nouns" },
    { spanish: "educación", english: "education", category: "Nouns" },
    { spanish: "situación", english: "situation", category: "Nouns" },
    { spanish: "organización", english: "organization", category: "Nouns" },
    { spanish: "comunicación", english: "communication", category: "Nouns" },
    { spanish: "presentación", english: "presentation", category: "Nouns" },
    { spanish: "celebración", english: "celebration", category: "Nouns" },
    { spanish: "preparación", english: "preparation", category: "Nouns" },
    { spanish: "televisión", english: "television", category: "Nouns" },
    { spanish: "decisión", english: "decision", category: "Nouns" },
    { spanish: "visión", english: "vision", category: "Nouns" },
    { spanish: "profesión", english: "profession", category: "Nouns" },
    { spanish: "universidad", english: "university", category: "Nouns" },
    { spanish: "ciudad", english: "city", category: "Nouns" },
    { spanish: "libertad", english: "liberty/freedom", category: "Nouns" },
    { spanish: "oportunidad", english: "opportunity", category: "Nouns" },
    { spanish: "posibilidad", english: "possibility", category: "Nouns" },
    { spanish: "calidad", english: "quality", category: "Nouns" },
    { spanish: "cantidad", english: "quantity", category: "Nouns" },
    { spanish: "actividad", english: "activity", category: "Nouns" },
    { spanish: "electricidad", english: "electricity", category: "Nouns" },
    { spanish: "radio", english: "radio", category: "Nouns" },
    { spanish: "video", english: "video", category: "Nouns" },
    { spanish: "estudio", english: "study", category: "Nouns" },
    { spanish: "momento", english: "moment", category: "Nouns" },
    { spanish: "problema", english: "problem", category: "Nouns" },
    { spanish: "sistema", english: "system", category: "Nouns" },
    { spanish: "clima", english: "climate", category: "Nouns" },
    { spanish: "programa", english: "program", category: "Nouns" },
    { spanish: "planeta", english: "planet", category: "Nouns" },
    { spanish: "restaurante", english: "restaurant", category: "Nouns" },
    { spanish: "hotel", english: "hotel", category: "Nouns" },
    { spanish: "banco", english: "bank", category: "Nouns" },
    { spanish: "museo", english: "museum", category: "Nouns" },
    { spanish: "teatro", english: "theater", category: "Nouns" },
    { spanish: "centro", english: "center", category: "Nouns" },
    { spanish: "control", english: "control", category: "Nouns" },
    { spanish: "grupo", english: "group", category: "Nouns" },
    { spanish: "tipo", english: "type", category: "Nouns" },
    { spanish: "mapa", english: "map", category: "Nouns" },
    { spanish: "idea", english: "idea", category: "Nouns" },
    { spanish: "foto", english: "photo", category: "Nouns" },
    { spanish: "auto", english: "auto/car", category: "Nouns" },
    { spanish: "taxi", english: "taxi", category: "Nouns" },
    { spanish: "bus", english: "bus", category: "Nouns" },
    { spanish: "teléfono", english: "telephone", category: "Nouns" },
    { spanish: "computadora", english: "computer", category: "Nouns" },
    { spanish: "internet", english: "internet", category: "Nouns" },
    { spanish: "email", english: "email", category: "Nouns" },
    { spanish: "fútbol", english: "football/soccer", category: "Nouns" },
    { spanish: "básquetbol", english: "basketball", category: "Nouns" },
    { spanish: "tenis", english: "tennis", category: "Nouns" },
    { spanish: "golf", english: "golf", category: "Nouns" },
    { spanish: "jazz", english: "jazz", category: "Nouns" },
    { spanish: "rock", english: "rock", category: "Nouns" },
    { spanish: "blues", english: "blues", category: "Nouns" },
    { spanish: "café", english: "coffee", category: "Nouns" },
    { spanish: "chocolate", english: "chocolate", category: "Nouns" },
    { spanish: "pizza", english: "pizza", category: "Nouns" },
    { spanish: "sandwich", english: "sandwich", category: "Nouns" },
    { spanish: "hot dog", english: "hot dog", category: "Nouns" },
    { spanish: "hamburguesa", english: "hamburger", category: "Nouns" },
    { spanish: "doctor", english: "doctor", category: "Professions" },
    { spanish: "profesor", english: "professor", category: "Professions" },
    { spanish: "actor", english: "actor", category: "Professions" },
    { spanish: "director", english: "director", category: "Professions" },
    { spanish: "autor", english: "author", category: "Professions" },
    { spanish: "editor", english: "editor", category: "Professions" },
    { spanish: "dentista", english: "dentist", category: "Professions" },
    { spanish: "artista", english: "artist", category: "Professions" },
    { spanish: "periodista", english: "journalist", category: "Professions" },
    { spanish: "turista", english: "tourist", category: "Professions" },
    { spanish: "estudiante", english: "student", category: "Professions" },
    { spanish: "asistente", english: "assistant", category: "Professions" },
    { spanish: "presidente", english: "president", category: "Professions" },
    { spanish: "cliente", english: "client", category: "Professions" },
    { spanish: "presente", english: "present", category: "Adjectives" },
    { spanish: "ausente", english: "absent", category: "Adjectives" },
    { spanish: "inteligente", english: "intelligent", category: "Adjectives" },
    { spanish: "excelente", english: "excellent", category: "Adjectives" },
    { spanish: "independiente", english: "independent", category: "Adjectives" },
    { spanish: "dependiente", english: "dependent", category: "Adjectives" },
    { spanish: "permanente", english: "permanent", category: "Adjectives" },
    { spanish: "temporal", english: "temporal", category: "Adjectives" },
    { spanish: "original", english: "original", category: "Adjectives" },
    { spanish: "final", english: "final", category: "Adjectives" },
    { spanish: "formal", english: "formal", category: "Adjectives" },
    { spanish: "informal", english: "informal", category: "Adjectives" },
    { spanish: "legal", english: "legal", category: "Adjectives" },
    { spanish: "ilegal", english: "illegal", category: "Adjectives" },
    { spanish: "real", english: "real", category: "Adjectives" },
    { spanish: "ideal", english: "ideal", category: "Adjectives" },
    { spanish: "oficial", english: "official", category: "Adjectives" },
    { spanish: "comercial", english: "commercial", category: "Adjectives" },
    { spanish: "industrial", english: "industrial", category: "Adjectives" },
    { spanish: "profesional", english: "professional", category: "Adjectives" },
    { spanish: "tradicional", english: "traditional", category: "Adjectives" },
    { spanish: "nacional", english: "national", category: "Adjectives" },
    { spanish: "internacional", english: "international", category: "Adjectives" },
    { spanish: "regional", english: "regional", category: "Adjectives" },
    { spanish: "familiar", english: "familiar", category: "Adjectives" },
    { spanish: "regular", english: "regular", category: "Adjectives" },
    { spanish: "irregular", english: "irregular", category: "Adjectives" }
];

// Short Stories
const shortStories = [
    {
        title: "El Café de la Mañana",
        spanish: "María se despierta temprano cada mañana. Va a la cocina y prepara café. El café huele muy bien. María bebe su café mientras lee el periódico. Le gusta empezar el día así.",
        english: "Maria wakes up early every morning. She goes to the kitchen and makes coffee. The coffee smells very good. Maria drinks her coffee while reading the newspaper. She likes to start the day like this."
    },
    {
        title: "Un Paseo en el Parque",
        spanish: "Carlos camina en el parque todos los días. Ve muchos árboles y flores. A veces ve pájaros volando. El parque es muy tranquilo y hermoso. Carlos disfruta mucho estos paseos.",
        english: "Carlos walks in the park every day. He sees many trees and flowers. Sometimes he sees birds flying. The park is very peaceful and beautiful. Carlos really enjoys these walks."
    },
    {
        title: "La Biblioteca",
        spanish: "Ana va a la biblioteca los sábados. Busca libros interesantes para leer. La biblioteca es grande y tiene muchos libros. Ana encuentra un libro sobre historia. Está muy emocionada de leerlo.",
        english: "Ana goes to the library on Saturdays. She looks for interesting books to read. The library is large and has many books. Ana finds a book about history. She is very excited to read it."
    },
    {
        title: "La Cena Familiar",
        spanish: "La familia se reúne para cenar cada noche. Cocinan juntos y hablan sobre su día. La comida está deliciosa. Todos se sienten felices de estar juntos. Es un momento especial del día.",
        english: "The family gathers for dinner every night. They cook together and talk about their day. The food is delicious. Everyone feels happy to be together. It's a special time of day."
    },
    {
        title: "El Estudiante",
        spanish: "Pedro estudia español en la universidad. Tiene clases todos los días. Estudia mucho porque quiere aprender bien. Sus profesores son muy buenos. Pedro está aprendiendo rápido.",
        english: "Pedro studies Spanish at the university. He has classes every day. He studies a lot because he wants to learn well. His teachers are very good. Pedro is learning quickly."
    }
];

// Short Conversations
const conversations = [
    {
        title: "En el Restaurante",
        spanish: "Camarero: Buenas tardes, ¿qué desean comer?\nCliente: Buenos días. Quiero ver el menú, por favor.\nCamarero: Por supuesto, aquí está el menú.\nCliente: Gracias. Voy a pedir la paella.\nCamarero: Excelente elección. ¿Algo para beber?\nCliente: Sí, un vaso de agua, por favor.\nCamarero: Perfecto, en seguida.",
        english: "Waiter: Good afternoon, what would you like to eat?\nCustomer: Good afternoon. I'd like to see the menu, please.\nWaiter: Of course, here is the menu.\nCustomer: Thank you. I'm going to order the paella.\nWaiter: Excellent choice. Anything to drink?\nCustomer: Yes, a glass of water, please.\nWaiter: Perfect, right away."
    },
    {
        title: "Conociendo a Alguien Nuevo",
        spanish: "Juan: Hola, ¿cómo te llamas?\nMaría: Hola, me llamo María. ¿Y tú?\nJuan: Mucho gusto, María. Soy Juan.\nMaría: Mucho gusto también. ¿De dónde eres?\nJuan: Soy de Madrid, España. ¿Y tú?\nMaría: Yo soy de México. Es un placer conocerte.\nJuan: El placer es mío.",
        english: "Juan: Hello, what's your name?\nMaria: Hello, my name is Maria. And you?\nJuan: Nice to meet you, Maria. I'm Juan.\nMaria: Nice to meet you too. Where are you from?\nJuan: I'm from Madrid, Spain. And you?\nMaria: I'm from Mexico. It's a pleasure to meet you.\nJuan: The pleasure is mine."
    },
    {
        title: "En la Tienda",
        spanish: "Vendedor: ¿En qué puedo ayudarle?\nCliente: Busco una camisa azul, por favor.\nVendedor: Claro, ¿qué talla necesita?\nCliente: Talla mediana.\nVendedor: Perfecto, aquí tiene varias opciones.\nCliente: Me gusta esta. ¿Cuánto cuesta?\nVendedor: Cuesta treinta euros.\nCliente: Perfecto, la llevo.",
        english: "Salesperson: How can I help you?\nCustomer: I'm looking for a blue shirt, please.\nSalesperson: Of course, what size do you need?\nCustomer: Medium size.\nSalesperson: Perfect, here are several options.\nCustomer: I like this one. How much does it cost?\nSalesperson: It costs thirty euros.\nCustomer: Perfect, I'll take it."
    },
    {
        title: "Pidiendo Direcciones",
        spanish: "Turista: Disculpe, ¿dónde está la estación de tren?\nLocal: La estación está a dos calles de aquí.\nTurista: ¿Puede explicarme cómo llegar?\nLocal: Claro, camine recto y gire a la derecha.\nTurista: ¿Es muy lejos?\nLocal: No, está a cinco minutos caminando.\nTurista: Muchas gracias por su ayuda.\nLocal: De nada, que tenga un buen día.",
        english: "Tourist: Excuse me, where is the train station?\nLocal: The station is two blocks from here.\nTourist: Can you explain how to get there?\nLocal: Of course, walk straight and turn right.\nTourist: Is it very far?\nLocal: No, it's a five-minute walk.\nTourist: Thank you very much for your help.\nLocal: You're welcome, have a good day."
    },
    {
        title: "En el Aeropuerto",
        spanish: "Empleado: Buenos días, ¿tiene su pasaporte?\nPasajero: Sí, aquí está.\nEmpleado: ¿A dónde viaja hoy?\nPasajero: Viajo a Barcelona.\nEmpleado: ¿Tiene equipaje para facturar?\nPasajero: Sí, tengo una maleta.\nEmpleado: Perfecto, aquí está su tarjeta de embarque.\nPasajero: Gracias, ¿dónde está la puerta de embarque?\nEmpleado: La puerta número doce, al final del pasillo.",
        english: "Employee: Good morning, do you have your passport?\nPassenger: Yes, here it is.\nEmployee: Where are you traveling today?\nPassenger: I'm traveling to Barcelona.\nEmployee: Do you have luggage to check?\nPassenger: Yes, I have one suitcase.\nEmployee: Perfect, here is your boarding pass.\nPassenger: Thank you, where is the boarding gate?\nEmployee: Gate number twelve, at the end of the hallway."
    }
];

// Past Tense Verbs - Pretérito (Simple Past)
const preteriteVerbs = [
    {
        infinitive: "hablar",
        english: "to speak",
        conjugations: {
            yo: "hablé",
            tú: "hablaste",
            él: "habló",
            nosotros: "hablamos",
            vosotros: "hablasteis",
            ellos: "hablaron"
        },
        examples: [
            { spanish: "Ayer hablé con mi madre.", english: "Yesterday I spoke with my mother." },
            { spanish: "Ellos hablaron en la reunión.", english: "They spoke at the meeting." }
        ]
    },
    {
        infinitive: "comer",
        english: "to eat",
        conjugations: {
            yo: "comí",
            tú: "comiste",
            él: "comió",
            nosotros: "comimos",
            vosotros: "comisteis",
            ellos: "comieron"
        },
        examples: [
            { spanish: "Comí pizza ayer.", english: "I ate pizza yesterday." },
            { spanish: "Comimos en el restaurante.", english: "We ate at the restaurant." }
        ]
    },
    {
        infinitive: "vivir",
        english: "to live",
        conjugations: {
            yo: "viví",
            tú: "viviste",
            él: "vivió",
            nosotros: "vivimos",
            vosotros: "vivisteis",
            ellos: "vivieron"
        },
        examples: [
            { spanish: "Viví en Madrid por cinco años.", english: "I lived in Madrid for five years." },
            { spanish: "Ellos vivieron aquí antes.", english: "They lived here before." }
        ]
    },
    {
        infinitive: "ir",
        english: "to go",
        conjugations: {
            yo: "fui",
            tú: "fuiste",
            él: "fue",
            nosotros: "fuimos",
            vosotros: "fuisteis",
            ellos: "fueron"
        },
        examples: [
            { spanish: "Fui al cine ayer.", english: "I went to the movies yesterday." },
            { spanish: "Fuimos a la playa.", english: "We went to the beach." }
        ]
    },
    {
        infinitive: "ser",
        english: "to be",
        conjugations: {
            yo: "fui",
            tú: "fuiste",
            él: "fue",
            nosotros: "fuimos",
            vosotros: "fuisteis",
            ellos: "fueron"
        },
        examples: [
            { spanish: "Fui estudiante hace años.", english: "I was a student years ago." },
            { spanish: "Fueron muy felices.", english: "They were very happy." }
        ]
    },
    {
        infinitive: "hacer",
        english: "to do/make",
        conjugations: {
            yo: "hice",
            tú: "hiciste",
            él: "hizo",
            nosotros: "hicimos",
            vosotros: "hicisteis",
            ellos: "hicieron"
        },
        examples: [
            { spanish: "Hice mi tarea ayer.", english: "I did my homework yesterday." },
            { spanish: "Hicieron un pastel.", english: "They made a cake." }
        ]
    }
];

// Past Tense Verbs - Imperfecto (Past Continuous/Habitual)
const imperfectVerbs = [
    {
        infinitive: "hablar",
        english: "to speak",
        conjugations: {
            yo: "hablaba",
            tú: "hablabas",
            él: "hablaba",
            nosotros: "hablábamos",
            vosotros: "hablabais",
            ellos: "hablaban"
        },
        examples: [
            { spanish: "Cuando era niño, hablaba mucho.", english: "When I was a child, I used to talk a lot." },
            { spanish: "Ellos hablaban todos los días.", english: "They used to speak every day." }
        ]
    },
    {
        infinitive: "comer",
        english: "to eat",
        conjugations: {
            yo: "comía",
            tú: "comías",
            él: "comía",
            nosotros: "comíamos",
            vosotros: "comíais",
            ellos: "comían"
        },
        examples: [
            { spanish: "Comía helado todos los veranos.", english: "I used to eat ice cream every summer." },
            { spanish: "Comíamos juntos siempre.", english: "We always used to eat together." }
        ]
    },
    {
        infinitive: "vivir",
        english: "to live",
        conjugations: {
            yo: "vivía",
            tú: "vivías",
            él: "vivía",
            nosotros: "vivíamos",
            vosotros: "vivíais",
            ellos: "vivían"
        },
        examples: [
            { spanish: "Vivía en una casa pequeña.", english: "I used to live in a small house." },
            { spanish: "Vivían cerca del parque.", english: "They used to live near the park." }
        ]
    },
    {
        infinitive: "ser",
        english: "to be",
        conjugations: {
            yo: "era",
            tú: "eras",
            él: "era",
            nosotros: "éramos",
            vosotros: "erais",
            ellos: "eran"
        },
        examples: [
            { spanish: "Era muy tímido cuando era joven.", english: "I was very shy when I was young." },
            { spanish: "Eran buenos amigos.", english: "They were good friends." }
        ]
    },
    {
        infinitive: "ir",
        english: "to go",
        conjugations: {
            yo: "iba",
            tú: "ibas",
            él: "iba",
            nosotros: "íbamos",
            vosotros: "ibais",
            ellos: "iban"
        },
        examples: [
            { spanish: "Iba a la escuela todos los días.", english: "I used to go to school every day." },
            { spanish: "Íbamos al parque los domingos.", english: "We used to go to the park on Sundays." }
        ]
    },
    {
        infinitive: "ver",
        english: "to see",
        conjugations: {
            yo: "veía",
            tú: "veías",
            él: "veía",
            nosotros: "veíamos",
            vosotros: "veíais",
            ellos: "veían"
        },
        examples: [
            { spanish: "Veía películas los viernes.", english: "I used to watch movies on Fridays." },
            { spanish: "Veían el atardecer cada noche.", english: "They used to watch the sunset every night." }
        ]
    }
];

// Future Tense Verbs - Simple Future
const simpleFutureVerbs = [
    {
        infinitive: "hablar",
        english: "to speak",
        conjugations: {
            yo: "hablaré",
            tú: "hablarás",
            él: "hablará",
            nosotros: "hablaremos",
            vosotros: "hablaréis",
            ellos: "hablarán"
        },
        examples: [
            { spanish: "Mañana hablaré con mi jefe.", english: "Tomorrow I will speak with my boss." },
            { spanish: "Ellos hablarán en la conferencia.", english: "They will speak at the conference." }
        ]
    },
    {
        infinitive: "comer",
        english: "to eat",
        conjugations: {
            yo: "comeré",
            tú: "comerás",
            él: "comerá",
            nosotros: "comeremos",
            vosotros: "comeréis",
            ellos: "comerán"
        },
        examples: [
            { spanish: "Comeré pizza esta noche.", english: "I will eat pizza tonight." },
            { spanish: "Comeremos en el restaurante.", english: "We will eat at the restaurant." }
        ]
    },
    {
        infinitive: "vivir",
        english: "to live",
        conjugations: {
            yo: "viviré",
            tú: "vivirás",
            él: "vivirá",
            nosotros: "viviremos",
            vosotros: "viviréis",
            ellos: "vivirán"
        },
        examples: [
            { spanish: "Viviré en Madrid el próximo año.", english: "I will live in Madrid next year." },
            { spanish: "Vivirán en una casa nueva.", english: "They will live in a new house." }
        ]
    },
    {
        infinitive: "ir",
        english: "to go",
        conjugations: {
            yo: "iré",
            tú: "irás",
            él: "irá",
            nosotros: "iremos",
            vosotros: "iréis",
            ellos: "irán"
        },
        examples: [
            { spanish: "Iré al cine mañana.", english: "I will go to the movies tomorrow." },
            { spanish: "Iremos a la playa este verano.", english: "We will go to the beach this summer." }
        ]
    },
    {
        infinitive: "hacer",
        english: "to do/make",
        conjugations: {
            yo: "haré",
            tú: "harás",
            él: "hará",
            nosotros: "haremos",
            vosotros: "haréis",
            ellos: "harán"
        },
        examples: [
            { spanish: "Haré mi tarea más tarde.", english: "I will do my homework later." },
            { spanish: "Harán un pastel para la fiesta.", english: "They will make a cake for the party." }
        ]
    },
    {
        infinitive: "tener",
        english: "to have",
        conjugations: {
            yo: "tendré",
            tú: "tendrás",
            él: "tendrá",
            nosotros: "tendremos",
            vosotros: "tendréis",
            ellos: "tendrán"
        },
        examples: [
            { spanish: "Tendré tiempo mañana.", english: "I will have time tomorrow." },
            { spanish: "Tendrán una reunión importante.", english: "They will have an important meeting." }
        ]
    },
    {
        infinitive: "venir",
        english: "to come",
        conjugations: {
            yo: "vendré",
            tú: "vendrás",
            él: "vendrá",
            nosotros: "vendremos",
            vosotros: "vendréis",
            ellos: "vendrán"
        },
        examples: [
            { spanish: "Vendré a tu casa esta tarde.", english: "I will come to your house this afternoon." },
            { spanish: "Vendrán a la fiesta el sábado.", english: "They will come to the party on Saturday." }
        ]
    },
    {
        infinitive: "decir",
        english: "to say/tell",
        conjugations: {
            yo: "diré",
            tú: "dirás",
            él: "dirá",
            nosotros: "diremos",
            vosotros: "diréis",
            ellos: "dirán"
        },
        examples: [
            { spanish: "Te diré la verdad mañana.", english: "I will tell you the truth tomorrow." },
            { spanish: "Dirán lo que piensan.", english: "They will say what they think." }
        ]
    }
];

// Future Tense - Ir + a + Infinitive (Going to)
const irAFutureVerbs = [
    {
        infinitive: "hablar",
        english: "to speak",
        conjugations: {
            yo: "voy a hablar",
            tú: "vas a hablar",
            él: "va a hablar",
            nosotros: "vamos a hablar",
            vosotros: "vais a hablar",
            ellos: "van a hablar"
        },
        examples: [
            { spanish: "Voy a hablar con él mañana.", english: "I am going to speak with him tomorrow." },
            { spanish: "Van a hablar sobre el proyecto.", english: "They are going to talk about the project." }
        ]
    },
    {
        infinitive: "comer",
        english: "to eat",
        conjugations: {
            yo: "voy a comer",
            tú: "vas a comer",
            él: "va a comer",
            nosotros: "vamos a comer",
            vosotros: "vais a comer",
            ellos: "van a comer"
        },
        examples: [
            { spanish: "Voy a comer en casa hoy.", english: "I am going to eat at home today." },
            { spanish: "Vamos a comer pizza esta noche.", english: "We are going to eat pizza tonight." }
        ]
    },
    {
        infinitive: "estudiar",
        english: "to study",
        conjugations: {
            yo: "voy a estudiar",
            tú: "vas a estudiar",
            él: "va a estudiar",
            nosotros: "vamos a estudiar",
            vosotros: "vais a estudiar",
            ellos: "van a estudiar"
        },
        examples: [
            { spanish: "Voy a estudiar español este año.", english: "I am going to study Spanish this year." },
            { spanish: "Van a estudiar para el examen.", english: "They are going to study for the exam." }
        ]
    },
    {
        infinitive: "trabajar",
        english: "to work",
        conjugations: {
            yo: "voy a trabajar",
            tú: "vas a trabajar",
            él: "va a trabajar",
            nosotros: "vamos a trabajar",
            vosotros: "vais a trabajar",
            ellos: "van a trabajar"
        },
        examples: [
            { spanish: "Voy a trabajar el sábado.", english: "I am going to work on Saturday." },
            { spanish: "Van a trabajar en un proyecto nuevo.", english: "They are going to work on a new project." }
        ]
    },
    {
        infinitive: "viajar",
        english: "to travel",
        conjugations: {
            yo: "voy a viajar",
            tú: "vas a viajar",
            él: "va a viajar",
            nosotros: "vamos a viajar",
            vosotros: "vais a viajar",
            ellos: "van a viajar"
        },
        examples: [
            { spanish: "Voy a viajar a España el próximo mes.", english: "I am going to travel to Spain next month." },
            { spanish: "Van a viajar por Europa.", english: "They are going to travel through Europe." }
        ]
    },
    {
        infinitive: "comprar",
        english: "to buy",
        conjugations: {
            yo: "voy a comprar",
            tú: "vas a comprar",
            él: "va a comprar",
            nosotros: "vamos a comprar",
            vosotros: "vais a comprar",
            ellos: "van a comprar"
        },
        examples: [
            { spanish: "Voy a comprar un coche nuevo.", english: "I am going to buy a new car." },
            { spanish: "Van a comprar regalos para Navidad.", english: "They are going to buy gifts for Christmas." }
        ]
    }
];

// App State
let currentWordIndex = 0;
let knownWords = new Set();
let wordsToReview = new Set();
let practiceScore = 0;
let totalPracticeQuestions = 0;
let currentPracticeQuestion = null;
let practiceMode = false;
let currentTenseType = 'preterite';
let currentTensePracticeIndex = 0;
let currentFutureTenseType = 'simple';
let currentFutureTensePracticeIndex = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initializeTabs();
    initializeVocabulary();
    initializePractice();
    initializePhrases();
    initializeCognates();
    initializeStories();
    initializePastTense();
    initializeFutureTense();
    initializeSpeakingPractice();
    initializeStats();
    updateProgress();
});

// Tab Navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    const dropdownContent = document.querySelector('.dropdown-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetTab = button.getAttribute('data-tab');
            
            if (!targetTab) return; // Skip if no data-tab attribute
            
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Close dropdown if open
            if (dropdownContent) {
                dropdownContent.classList.remove('show');
            }
        });
    });
    
    // Handle dropdown button click
    const dropdownBtn = document.querySelector('.dropdown-btn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdownContent) {
                dropdownContent.classList.toggle('show');
            }
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (dropdownContent && !e.target.closest('.tab-dropdown')) {
            dropdownContent.classList.remove('show');
        }
    });
}

// Vocabulary/Flashcard Functions
function initializeVocabulary() {
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const knowBtn = document.getElementById('knowBtn');
    const dontKnowBtn = document.getElementById('dontKnowBtn');
    const pronounceBtn = document.getElementById('pronounceBtn');
    const pronounceExampleBtn = document.getElementById('pronounceExampleBtn');

    flashcard.addEventListener('click', (e) => {
        // Don't flip if clicking on pronunciation button
        if (!e.target.classList.contains('btn-pronounce')) {
            flipCard();
        }
    });
    prevBtn.addEventListener('click', showPreviousWord);
    nextBtn.addEventListener('click', showNextWord);
    knowBtn.addEventListener('click', markAsKnown);
    dontKnowBtn.addEventListener('click', markAsUnknown);
    pronounceBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        pronounceWord(vocabulary[currentWordIndex].spanish);
    });
    pronounceExampleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        pronounceWord(vocabulary[currentWordIndex].example);
    });

    showCurrentWord();
}

function showCurrentWord() {
    if (vocabulary.length === 0) return;
    
    const word = vocabulary[currentWordIndex];
    const flashcard = document.getElementById('flashcard');
    
    // Reset card to front
    flashcard.classList.remove('flipped');
    
    document.getElementById('spanishWord').textContent = word.spanish;
    document.getElementById('englishWord').textContent = word.english;
    document.getElementById('exampleSentence').textContent = word.example;
    document.getElementById('wordCounter').textContent = `${currentWordIndex + 1} / ${vocabulary.length}`;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentWordIndex === 0;
    document.getElementById('nextBtn').disabled = currentWordIndex === vocabulary.length - 1;
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function showPreviousWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        showCurrentWord();
    }
}

function showNextWord() {
    if (currentWordIndex < vocabulary.length - 1) {
        currentWordIndex++;
        showCurrentWord();
    }
}

function markAsKnown() {
    const word = vocabulary[currentWordIndex];
    knownWords.add(word.spanish);
    wordsToReview.delete(word.spanish);
    saveProgress();
    updateProgress();
    showNextWord();
}

function markAsUnknown() {
    const word = vocabulary[currentWordIndex];
    wordsToReview.add(word.spanish);
    knownWords.delete(word.spanish);
    saveProgress();
    updateProgress();
}

// Pronunciation function using Web Speech API (made global for onclick handlers)
window.pronounceWord = function(text) {
    if ('speechSynthesis' in window) {
        // Stop any ongoing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES'; // Spanish (Spain) accent
        utterance.rate = 0.8; // Slightly slower for clarity
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Try to use a Spanish voice if available
        const voices = window.speechSynthesis.getVoices();
        const spanishVoice = voices.find(voice => 
            voice.lang.startsWith('es') && voice.name.includes('Spanish')
        );
        
        if (spanishVoice) {
            utterance.voice = spanishVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
}

// Load voices when available
if ('speechSynthesis' in window) {
    // Some browsers load voices asynchronously
    window.speechSynthesis.onvoiceschanged = () => {
        // Voices are now loaded
    };
}

// Practice Functions
function initializePractice() {
    document.getElementById('startPracticeBtn').addEventListener('click', startPractice);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextPracticeQuestion);
}

function startPractice() {
    practiceMode = true;
    practiceScore = 0;
    totalPracticeQuestions = 0;
    document.getElementById('startPracticeBtn').style.display = 'none';
    document.getElementById('nextQuestionBtn').style.display = 'block';
    generatePracticeQuestion();
}

function generatePracticeQuestion() {
    const questionType = Math.random() > 0.5 ? 'translation' : 'multipleChoice';
    
    if (questionType === 'translation') {
        generateTranslationQuestion();
    } else {
        generateMultipleChoiceQuestion();
    }
}

function generateTranslationQuestion() {
    const randomWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    const questionText = document.getElementById('questionText');
    const questionContent = document.getElementById('questionContent');
    const answerOptions = document.getElementById('answerOptions');
    const feedback = document.getElementById('practiceFeedback');
    
    questionText.textContent = "What does this word mean?";
    questionContent.innerHTML = `
        <span class="practice-word">${randomWord.spanish}</span>
        <button class="btn-pronounce-practice" onclick="pronounceWord('${randomWord.spanish}')" title="Pronounce">🔊</button>
    `;
    answerOptions.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Generate wrong answers
    const wrongAnswers = vocabulary
        .filter(w => w.spanish !== randomWord.spanish)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.english);
    
    const allAnswers = [randomWord.english, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    allAnswers.forEach(answer => {
        const option = document.createElement('div');
        option.className = 'answer-option';
        option.innerHTML = `<span>${answer}</span>`;
        option.addEventListener('click', () => checkAnswer(answer === randomWord.english, randomWord.english));
        answerOptions.appendChild(option);
    });
    
    currentPracticeQuestion = { correct: randomWord.english, type: 'translation' };
}

function generateMultipleChoiceQuestion() {
    const randomWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    const questionText = document.getElementById('questionText');
    const questionContent = document.getElementById('questionContent');
    const answerOptions = document.getElementById('answerOptions');
    const feedback = document.getElementById('practiceFeedback');
    
    questionText.textContent = "Choose the correct Spanish word:";
    questionContent.innerHTML = `
        <span class="practice-word">${randomWord.english}</span>
    `;
    answerOptions.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Generate wrong answers
    const wrongAnswers = vocabulary
        .filter(w => w.spanish !== randomWord.spanish)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.spanish);
    
    const allAnswers = [randomWord.spanish, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    allAnswers.forEach(answer => {
        const option = document.createElement('div');
        option.className = 'answer-option';
        option.innerHTML = `
            <span>${answer}</span>
            <button class="btn-pronounce-option" onclick="event.stopPropagation(); pronounceWord('${answer}')" title="Pronounce">🔊</button>
        `;
        option.addEventListener('click', () => checkAnswer(answer === randomWord.spanish, randomWord.spanish));
        answerOptions.appendChild(option);
    });
    
    currentPracticeQuestion = { correct: randomWord.spanish, type: 'multipleChoice' };
}

function checkAnswer(isCorrect, correctAnswer) {
    const options = document.querySelectorAll('.answer-option');
    const feedback = document.getElementById('practiceFeedback');
    
    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (!isCorrect && option.textContent !== correctAnswer) {
            // Only mark as incorrect if this was the selected wrong answer
        }
    });
    
    totalPracticeQuestions++;
    
    if (isCorrect) {
        practiceScore++;
        feedback.textContent = '¡Correcto! Well done!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrecto. The correct answer is: ${correctAnswer}`;
        feedback.className = 'feedback incorrect';
    }
    
    document.getElementById('practiceScore').textContent = practiceScore;
    document.getElementById('totalQuestions').textContent = totalPracticeQuestions;
    saveProgress();
    updateStats();
}

function nextPracticeQuestion() {
    const feedback = document.getElementById('practiceFeedback');
    feedback.textContent = '';
    feedback.className = 'feedback';
    generatePracticeQuestion();
}

// Cognates Functions
function initializeCognates() {
    const cognatesGrid = document.getElementById('cognatesGrid');
    cognatesGrid.innerHTML = '';
    
    // Group cognates by category
    const groupedCognates = {};
    cognates.forEach(cognate => {
        if (!groupedCognates[cognate.category]) {
            groupedCognates[cognate.category] = [];
        }
        groupedCognates[cognate.category].push(cognate);
    });
    
    // Display by category
    Object.keys(groupedCognates).sort().forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'cognate-category';
        categorySection.innerHTML = `<h3 class="category-title">${category}</h3>`;
        
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'cognates-category-grid';
        
        groupedCognates[category].forEach(cognate => {
            const cognateCard = document.createElement('div');
            cognateCard.className = 'cognate-card';
            const pronounceBtn = document.createElement('button');
            pronounceBtn.className = 'btn-pronounce';
            pronounceBtn.textContent = '🔊';
            pronounceBtn.title = 'Pronounce';
            pronounceBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                pronounceWord(cognate.spanish);
            });
            
            cognateCard.innerHTML = `
                <div class="cognate-content">
                    <h4>${cognate.spanish}</h4>
                    <p>${cognate.english}</p>
                </div>
            `;
            cognateCard.appendChild(pronounceBtn);
            
            cognateCard.addEventListener('click', () => {
                cognateCard.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    cognateCard.style.transform = '';
                }, 200);
            });
            categoryGrid.appendChild(cognateCard);
        });
        
        categorySection.appendChild(categoryGrid);
        cognatesGrid.appendChild(categorySection);
    });
}

// Phrases Functions
function initializePhrases() {
    const phrasesGrid = document.getElementById('phrasesGrid');
    phrasesGrid.innerHTML = '';
    
    commonPhrases.forEach(phrase => {
        const phraseCard = document.createElement('div');
        phraseCard.className = 'phrase-card';
        const pronounceBtn = document.createElement('button');
        pronounceBtn.className = 'btn-pronounce';
        pronounceBtn.textContent = '🔊';
        pronounceBtn.title = 'Pronounce';
        pronounceBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            pronounceWord(phrase.spanish);
        });
        
        phraseCard.innerHTML = `
            <h4>${phrase.spanish}</h4>
            <p>${phrase.english}</p>
        `;
        phraseCard.appendChild(pronounceBtn);
        
        phraseCard.addEventListener('click', () => {
            phraseCard.style.transform = 'scale(0.95)';
            setTimeout(() => {
                phraseCard.style.transform = '';
            }, 200);
        });
        phrasesGrid.appendChild(phraseCard);
    });
}

// Statistics Functions
// Stories & Conversations Functions
let currentStoryType = 'stories';
let currentStoryIndex = -1;
let isPlaying = false;
let currentUtterance = null;

function initializeStories() {
    const storyTypeButtons = document.querySelectorAll('.story-type-btn');
    const backToListBtn = document.getElementById('backToListBtn');
    const playStoryBtn = document.getElementById('playStoryBtn');
    const pauseStoryBtn = document.getElementById('pauseStoryBtn');
    const stopStoryBtn = document.getElementById('stopStoryBtn');

    storyTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            storyTypeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStoryType = btn.getAttribute('data-type');
            showStoriesList();
        });
    });

    backToListBtn.addEventListener('click', showStoriesList);
    playStoryBtn.addEventListener('click', playStory);
    pauseStoryBtn.addEventListener('click', pauseStory);
    stopStoryBtn.addEventListener('click', stopStory);

    showStoriesList();
}

function showStoriesList() {
    document.getElementById('storiesList').style.display = 'block';
    document.getElementById('storyViewer').style.display = 'none';
    currentStoryIndex = -1;
    stopStory();

    const storiesList = document.getElementById('storiesList');
    storiesList.innerHTML = '';

    const items = currentStoryType === 'stories' ? shortStories : conversations;

    items.forEach((item, index) => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <h3>${item.title}</h3>
            <p class="story-preview">${item.spanish.substring(0, 100)}...</p>
            <button class="btn btn-primary read-story-btn" data-index="${index}">Read Story</button>
        `;
        storyCard.querySelector('.read-story-btn').addEventListener('click', () => {
            showStory(index);
        });
        storiesList.appendChild(storyCard);
    });
}

function showStory(index) {
    currentStoryIndex = index;
    const items = currentStoryType === 'stories' ? shortStories : conversations;
    const story = items[index];

    document.getElementById('storiesList').style.display = 'none';
    document.getElementById('storyViewer').style.display = 'block';

    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('storyText').textContent = story.spanish;
    document.getElementById('storyTranslation').innerHTML = `<strong>Translation:</strong><br>${story.english.replace(/\n/g, '<br>')}`;

    stopStory();
}

function playStory() {
    if (currentStoryIndex === -1) return;

    const items = currentStoryType === 'stories' ? shortStories : conversations;
    const story = items[currentStoryIndex];

    if (isPlaying) {
        window.speechSynthesis.resume();
    } else {
        stopStory();
        const text = story.spanish;
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = 'es-ES';
        currentUtterance.rate = 0.7; // Slower for stories
        currentUtterance.pitch = 1;
        currentUtterance.volume = 1;

        const voices = window.speechSynthesis.getVoices();
        const spanishVoice = voices.find(voice => 
            voice.lang.startsWith('es') && voice.name.includes('Spanish')
        );

        if (spanishVoice) {
            currentUtterance.voice = spanishVoice;
        }

        currentUtterance.onend = () => {
            isPlaying = false;
            document.getElementById('playStoryBtn').style.display = 'block';
            document.getElementById('pauseStoryBtn').style.display = 'none';
            document.getElementById('stopStoryBtn').style.display = 'none';
        };

        window.speechSynthesis.speak(currentUtterance);
    }

    isPlaying = true;
    document.getElementById('playStoryBtn').style.display = 'none';
    document.getElementById('pauseStoryBtn').style.display = 'inline-block';
    document.getElementById('stopStoryBtn').style.display = 'inline-block';
}

function pauseStory() {
    if (isPlaying) {
        window.speechSynthesis.pause();
        isPlaying = false;
        document.getElementById('playStoryBtn').style.display = 'block';
        document.getElementById('pauseStoryBtn').style.display = 'none';
    }
}

function stopStory() {
    window.speechSynthesis.cancel();
    isPlaying = false;
    currentUtterance = null;
    document.getElementById('playStoryBtn').style.display = 'block';
    document.getElementById('pauseStoryBtn').style.display = 'none';
    document.getElementById('stopStoryBtn').style.display = 'none';
}

// Past Tense Functions
function initializePastTense() {
    const tenseTypeButtons = document.querySelectorAll('.tense-type-btn');
    const nextTensePracticeBtn = document.getElementById('nextTensePracticeBtn');

    tenseTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tenseTypeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTenseType = btn.getAttribute('data-type');
            showTenseContent();
        });
    });

    nextTensePracticeBtn.addEventListener('click', generateTensePractice);

    showTenseContent();
}

function showTenseContent() {
    const verbs = currentTenseType === 'preterite' ? preteriteVerbs : imperfectVerbs;
    const tenseName = currentTenseType === 'preterite' ? 'Pretérito' : 'Imperfecto';
    const tenseDescription = currentTenseType === 'preterite' 
        ? 'The pretérito (simple past) is used for completed actions in the past with a specific time frame.'
        : 'The imperfecto (imperfect) is used for ongoing or habitual actions in the past, or to describe past conditions.';

    // Show explanation
    document.getElementById('tenseExplanation').innerHTML = `
        <div class="explanation-card">
            <h2>${tenseName}</h2>
            <p>${tenseDescription}</p>
        </div>
    `;

    // Show verb conjugations
    const conjugationsHtml = verbs.map(verb => `
        <div class="verb-card">
            <h3>${verb.infinitive} <span class="verb-english">(${verb.english})</span></h3>
            <div class="conjugation-grid">
                <div class="conjugation-item">
                    <span class="pronoun">yo</span>
                    <span class="conjugation">${verb.conjugations.yo}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.yo}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">tú</span>
                    <span class="conjugation">${verb.conjugations.tú}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.tú}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">él/ella/usted</span>
                    <span class="conjugation">${verb.conjugations.él}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.él}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">nosotros</span>
                    <span class="conjugation">${verb.conjugations.nosotros}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.nosotros}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">vosotros</span>
                    <span class="conjugation">${verb.conjugations.vosotros}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.vosotros}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">ellos/ellas/ustedes</span>
                    <span class="conjugation">${verb.conjugations.ellos}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.ellos}')">🔊</button>
                </div>
            </div>
            <div class="verb-examples">
                <h4>Examples:</h4>
                ${verb.examples.map(ex => `
                    <p><strong>${ex.spanish}</strong> - ${ex.english}</p>
                `).join('')}
            </div>
        </div>
    `).join('');

    document.getElementById('verbConjugations').innerHTML = conjugationsHtml;

    // Show examples
    const allExamples = verbs.flatMap(verb => verb.examples);
    const examplesHtml = `
        <div class="examples-section">
            <h3>More Examples</h3>
            <div class="examples-list">
                ${allExamples.map(ex => `
                    <div class="example-item">
                        <p class="example-spanish">${ex.spanish}</p>
                        <p class="example-english">${ex.english}</p>
                        <button class="btn-pronounce-small" onclick="pronounceWord('${ex.spanish}')">🔊</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('tenseExamples').innerHTML = examplesHtml;

    generateTensePractice();
}

function generateTensePractice() {
    const verbs = currentTenseType === 'preterite' ? preteriteVerbs : imperfectVerbs;
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const pronouns = ['yo', 'tú', 'él', 'nosotros', 'ellos'];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    
    const correctAnswer = randomVerb.conjugations[randomPronoun];
    const pronounDisplay = randomPronoun === 'él' ? 'él/ella/usted' : 
                          randomPronoun === 'ellos' ? 'ellos/ellas/ustedes' : randomPronoun;

    // Generate wrong answers
    const wrongAnswers = verbs
        .filter(v => v.infinitive !== randomVerb.infinitive)
        .map(v => v.conjugations[randomPronoun])
        .filter(v => v !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

    document.getElementById('tensePracticeQuestion').innerHTML = `
        <p class="practice-question-text">Conjugate <strong>${randomVerb.infinitive}</strong> (${randomVerb.english}) in ${currentTenseType === 'preterite' ? 'pretérito' : 'imperfecto'} for <strong>${pronounDisplay}</strong>:</p>
        <div class="answer-options">
            ${allAnswers.map(answer => `
                <div class="answer-option tense-option" data-correct="${answer === correctAnswer}">
                    ${answer}
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('tensePracticeAnswer').innerHTML = '';

    // Add click handlers
    document.querySelectorAll('.tense-option').forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            document.querySelectorAll('.tense-option').forEach(opt => {
                opt.classList.add('disabled');
                if (opt.getAttribute('data-correct') === 'true') {
                    opt.classList.add('correct');
                } else if (!isCorrect && opt === this) {
                    opt.classList.add('incorrect');
                }
            });

            const feedback = isCorrect 
                ? '<div class="feedback correct">¡Correcto! Well done!</div>'
                : `<div class="feedback incorrect">Incorrecto. The correct answer is: <strong>${correctAnswer}</strong></div>`;
            
            document.getElementById('tensePracticeAnswer').innerHTML = feedback;
        });
    });
}

// Future Tense Functions
function initializeFutureTense() {
    const tenseTypeButtons = document.querySelectorAll('.tense-type-btn-future');
    const nextFutureTensePracticeBtn = document.getElementById('nextFutureTensePracticeBtn');

    tenseTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tenseTypeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFutureTenseType = btn.getAttribute('data-type');
            showFutureTenseContent();
        });
    });

    nextFutureTensePracticeBtn.addEventListener('click', generateFutureTensePractice);

    showFutureTenseContent();
}

function showFutureTenseContent() {
    const verbs = currentFutureTenseType === 'simple' ? simpleFutureVerbs : irAFutureVerbs;
    const tenseName = currentFutureTenseType === 'simple' ? 'Simple Future (Futuro Simple)' : 'Ir + a + Infinitive (Going to)';
    const tenseDescription = currentFutureTenseType === 'simple' 
        ? 'The simple future tense is used to express actions that will happen in the future. It is formed by adding endings to the infinitive.'
        : 'The "ir + a + infinitive" construction is used to express near future plans or intentions. It is equivalent to "going to" in English.';

    // Show explanation
    document.getElementById('futureTenseExplanation').innerHTML = `
        <div class="explanation-card">
            <h2>${tenseName}</h2>
            <p>${tenseDescription}</p>
        </div>
    `;

    // Show verb conjugations
    const conjugationsHtml = verbs.map(verb => `
        <div class="verb-card">
            <h3>${verb.infinitive} <span class="verb-english">(${verb.english})</span></h3>
            <div class="conjugation-grid">
                <div class="conjugation-item">
                    <span class="pronoun">yo</span>
                    <span class="conjugation">${verb.conjugations.yo}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.yo}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">tú</span>
                    <span class="conjugation">${verb.conjugations.tú}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.tú}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">él/ella/usted</span>
                    <span class="conjugation">${verb.conjugations.él}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.él}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">nosotros</span>
                    <span class="conjugation">${verb.conjugations.nosotros}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.nosotros}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">vosotros</span>
                    <span class="conjugation">${verb.conjugations.vosotros}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.vosotros}')">🔊</button>
                </div>
                <div class="conjugation-item">
                    <span class="pronoun">ellos/ellas/ustedes</span>
                    <span class="conjugation">${verb.conjugations.ellos}</span>
                    <button class="btn-pronounce-small" onclick="pronounceWord('${verb.conjugations.ellos}')">🔊</button>
                </div>
            </div>
            <div class="verb-examples">
                <h4>Examples:</h4>
                ${verb.examples.map(ex => `
                    <p><strong>${ex.spanish}</strong> - ${ex.english}</p>
                `).join('')}
            </div>
        </div>
    `).join('');

    document.getElementById('futureVerbConjugations').innerHTML = conjugationsHtml;

    // Show examples
    const allExamples = verbs.flatMap(verb => verb.examples);
    const examplesHtml = `
        <div class="examples-section">
            <h3>More Examples</h3>
            <div class="examples-list">
                ${allExamples.map(ex => `
                    <div class="example-item">
                        <p class="example-spanish">${ex.spanish}</p>
                        <p class="example-english">${ex.english}</p>
                        <button class="btn-pronounce-small" onclick="pronounceWord('${ex.spanish}')">🔊</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('futureTenseExamples').innerHTML = examplesHtml;

    generateFutureTensePractice();
}

function generateFutureTensePractice() {
    const verbs = currentFutureTenseType === 'simple' ? simpleFutureVerbs : irAFutureVerbs;
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const pronouns = ['yo', 'tú', 'él', 'nosotros', 'ellos'];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    
    const correctAnswer = randomVerb.conjugations[randomPronoun];
    const pronounDisplay = randomPronoun === 'él' ? 'él/ella/usted' : 
                          randomPronoun === 'ellos' ? 'ellos/ellas/ustedes' : randomPronoun;

    // Generate wrong answers
    const wrongAnswers = verbs
        .filter(v => v.infinitive !== randomVerb.infinitive)
        .map(v => v.conjugations[randomPronoun])
        .filter(v => v !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

    const tenseTypeName = currentFutureTenseType === 'simple' ? 'simple future' : 'ir + a + infinitive';

    document.getElementById('futureTensePracticeQuestion').innerHTML = `
        <p class="practice-question-text">Conjugate <strong>${randomVerb.infinitive}</strong> (${randomVerb.english}) in ${tenseTypeName} for <strong>${pronounDisplay}</strong>:</p>
        <div class="answer-options">
            ${allAnswers.map(answer => `
                <div class="answer-option tense-option" data-correct="${answer === correctAnswer}">
                    ${answer}
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('futureTensePracticeAnswer').innerHTML = '';

    // Add click handlers
    document.querySelectorAll('#futureTensePracticeQuestion .tense-option').forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            document.querySelectorAll('#futureTensePracticeQuestion .tense-option').forEach(opt => {
                opt.classList.add('disabled');
                if (opt.getAttribute('data-correct') === 'true') {
                    opt.classList.add('correct');
                } else if (!isCorrect && opt === this) {
                    opt.classList.add('incorrect');
                }
            });

            const feedback = isCorrect 
                ? '<div class="feedback correct">¡Correcto! Well done!</div>'
                : `<div class="feedback incorrect">Incorrecto. The correct answer is: <strong>${correctAnswer}</strong></div>`;
            
            document.getElementById('futureTensePracticeAnswer').innerHTML = feedback;
        });
    });
}

// Speaking Practice Functions
let recognition = null;
let isRecording = false;
let currentScenario = null;
let currentPromptIndex = 0;

// Conversation scenarios
const conversationScenarios = [
    {
        title: "Introducing Yourself",
        description: "Practice introducing yourself in Spanish",
        prompts: [
            {
                question: "¿Cómo te llamas?",
                english: "What's your name?",
                example: "Me llamo [tu nombre]"
            },
            {
                question: "¿De dónde eres?",
                english: "Where are you from?",
                example: "Soy de [tu ciudad/país]"
            },
            {
                question: "¿Cuántos años tienes?",
                english: "How old are you?",
                example: "Tengo [número] años"
            },
            {
                question: "¿Qué te gusta hacer?",
                english: "What do you like to do?",
                example: "Me gusta [actividad]"
            }
        ]
    },
    {
        title: "At a Restaurant",
        description: "Practice ordering food in Spanish",
        prompts: [
            {
                question: "¿Qué desea comer?",
                english: "What would you like to eat?",
                example: "Quiero [comida], por favor"
            },
            {
                question: "¿Algo para beber?",
                english: "Anything to drink?",
                example: "Sí, quiero [bebida]"
            },
            {
                question: "¿Cómo está la comida?",
                english: "How is the food?",
                example: "Está deliciosa"
            },
            {
                question: "¿La cuenta, por favor?",
                english: "The check, please?",
                example: "Sí, aquí está"
            }
        ]
    },
    {
        title: "Asking for Directions",
        description: "Practice asking for and giving directions",
        prompts: [
            {
                question: "¿Dónde está la estación?",
                english: "Where is the station?",
                example: "Está a dos calles de aquí"
            },
            {
                question: "¿Cómo llego al centro?",
                english: "How do I get to the center?",
                example: "Camine recto y gire a la izquierda"
            },
            {
                question: "¿Está muy lejos?",
                english: "Is it very far?",
                example: "No, está cerca"
            },
            {
                question: "¿Puede repetir, por favor?",
                english: "Can you repeat, please?",
                example: "Claro, [repetir direcciones]"
            }
        ]
    },
    {
        title: "Shopping",
        description: "Practice shopping conversations",
        prompts: [
            {
                question: "¿En qué puedo ayudarle?",
                english: "How can I help you?",
                example: "Busco [artículo]"
            },
            {
                question: "¿Qué talla necesita?",
                english: "What size do you need?",
                example: "Talla [pequeña/mediana/grande]"
            },
            {
                question: "¿Cuánto cuesta?",
                english: "How much does it cost?",
                example: "Cuesta [precio] euros"
            },
            {
                question: "¿Tiene otro color?",
                english: "Do you have another color?",
                example: "Sí, tenemos [color]"
            }
        ]
    },
    {
        title: "Daily Conversations",
        description: "Practice everyday Spanish conversations",
        prompts: [
            {
                question: "¿Cómo estás?",
                english: "How are you?",
                example: "Estoy bien, gracias"
            },
            {
                question: "¿Qué haces?",
                english: "What are you doing?",
                example: "Estoy [actividad]"
            },
            {
                question: "¿Tienes planes para el fin de semana?",
                english: "Do you have plans for the weekend?",
                example: "Sí, voy a [actividad]"
            },
            {
                question: "¿Te gusta la música?",
                english: "Do you like music?",
                example: "Sí, me gusta mucho"
            }
        ]
    }
];

function initializeSpeakingPractice() {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        document.getElementById('browserWarning').style.display = 'block';
    } else {
        recognition = new SpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = () => {
            isRecording = true;
            document.getElementById('recordBtn').classList.add('recording');
            document.getElementById('recordBtn').querySelector('.btn-text').textContent = 'Listening...';
            document.getElementById('recordingStatus').textContent = '🎤 Listening...';
            document.getElementById('recordingStatus').className = 'recording-status active';
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('responseText').textContent = transcript;
            document.getElementById('recordingStatus').textContent = '✓ Recorded';
            document.getElementById('recordingStatus').className = 'recording-status success';
            document.getElementById('nextPromptBtn').style.display = 'inline-block';
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            document.getElementById('recordingStatus').textContent = 'Error: ' + event.error;
            document.getElementById('recordingStatus').className = 'recording-status error';
            resetRecordingButton();
        };
        
        recognition.onend = () => {
            isRecording = false;
            resetRecordingButton();
        };
    }
    
    // Initialize scenario buttons
    const scenarioButtons = document.getElementById('scenarioButtons');
    conversationScenarios.forEach((scenario, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary scenario-btn';
        btn.innerHTML = `
            <strong>${scenario.title}</strong><br>
            <small>${scenario.description}</small>
        `;
        btn.addEventListener('click', () => startScenario(index));
        scenarioButtons.appendChild(btn);
    });
    
    // Event listeners
    document.getElementById('recordBtn').addEventListener('click', startRecording);
    document.getElementById('nextPromptBtn').addEventListener('click', nextPrompt);
    document.getElementById('newScenarioBtn').addEventListener('click', () => {
        document.getElementById('conversationPractice').style.display = 'none';
        document.getElementById('conversationScenario').style.display = 'block';
        currentScenario = null;
        currentPromptIndex = 0;
    });
    document.getElementById('hearPromptBtn').addEventListener('click', () => {
        if (currentScenario && currentScenario.prompts[currentPromptIndex]) {
            pronounceWord(currentScenario.prompts[currentPromptIndex].question);
        }
    });
}

function startScenario(index) {
    currentScenario = conversationScenarios[index];
    currentPromptIndex = 0;
    document.getElementById('conversationScenario').style.display = 'none';
    document.getElementById('conversationPractice').style.display = 'block';
    showCurrentPrompt();
}

function showCurrentPrompt() {
    if (!currentScenario || !currentScenario.prompts[currentPromptIndex]) {
        // All prompts completed
        document.getElementById('currentPrompt').textContent = '¡Felicidades! You completed all prompts!';
        document.getElementById('promptHint').textContent = '';
        document.getElementById('recordBtn').style.display = 'none';
        return;
    }
    
    const prompt = currentScenario.prompts[currentPromptIndex];
    document.getElementById('currentPrompt').textContent = prompt.question;
    document.getElementById('promptHint').innerHTML = `
        <strong>English:</strong> ${prompt.english}<br>
        <strong>Example:</strong> ${prompt.example}
    `;
    document.getElementById('responseText').textContent = '-';
    document.getElementById('nextPromptBtn').style.display = 'none';
    document.getElementById('recordingStatus').textContent = '';
    document.getElementById('recordingStatus').className = 'recording-status';
}

function startRecording() {
    if (!recognition) {
        alert('Speech recognition is not supported in your browser. Please try Chrome, Edge, or Safari.');
        return;
    }
    
    if (isRecording) {
        recognition.stop();
        return;
    }
    
    try {
        recognition.start();
    } catch (error) {
        console.error('Error starting recognition:', error);
        document.getElementById('recordingStatus').textContent = 'Error starting recording';
        document.getElementById('recordingStatus').className = 'recording-status error';
    }
}

function resetRecordingButton() {
    const btn = document.getElementById('recordBtn');
    btn.classList.remove('recording');
    btn.querySelector('.btn-text').textContent = 'Click to Speak';
}

function nextPrompt() {
    currentPromptIndex++;
    showCurrentPrompt();
}

function initializeStats() {
    document.getElementById('resetStatsBtn').addEventListener('click', resetStats);
    updateStats();
}

function updateStats() {
    document.getElementById('wordsLearned').textContent = knownWords.size;
    document.getElementById('practiceScoreStat').textContent = 
        totalPracticeQuestions > 0 ? Math.round((practiceScore / totalPracticeQuestions) * 100) + '%' : '0%';
    document.getElementById('wordsToReview').textContent = wordsToReview.size;
    document.getElementById('totalPractice').textContent = totalPracticeQuestions;
}

// Progress Functions
function updateProgress() {
    const totalWords = vocabulary.length;
    const learnedWords = knownWords.size;
    const progress = totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '%';
}

// Local Storage Functions
function saveProgress() {
    const progress = {
        knownWords: Array.from(knownWords),
        wordsToReview: Array.from(wordsToReview),
        practiceScore,
        totalPracticeQuestions,
        currentWordIndex
    };
    localStorage.setItem('spanishLearningProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('spanishLearningProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        knownWords = new Set(progress.knownWords || []);
        wordsToReview = new Set(progress.wordsToReview || []);
        practiceScore = progress.practiceScore || 0;
        totalPracticeQuestions = progress.totalPracticeQuestions || 0;
        currentWordIndex = progress.currentWordIndex || 0;
    }
}

function resetStats() {
    if (confirm('Are you sure you want to reset all your progress?')) {
        knownWords.clear();
        wordsToReview.clear();
        practiceScore = 0;
        totalPracticeQuestions = 0;
        currentWordIndex = 0;
        localStorage.removeItem('spanishLearningProgress');
        updateProgress();
        updateStats();
        showCurrentWord();
    }
}
