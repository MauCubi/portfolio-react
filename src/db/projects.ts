export const projects = [

    {
        id: 1,
        title: "Plataforma E-commerce de Hardware",
        status: "En Desarrollo",
        img: '/assets/projects/hardware.png',
        description: "Plataforma e-commerce para la venta de hardware informático, diseñada con escalabilidad en mente y preparada para futuras funcionalidades como un PC Builder personalizado.",
        highlights: [
            "Autenticación con AuthJs, con JWT y password hashing",
            "Manejo de estados con Redux Toolkit",
            "Backend implementado con postgresSQL y ORM Prisma",
            "Diseño responsivo con un enfoque mobile-first",
            "Carrito de compra con persistencia de estado usando LocalStorage",
            "Funcionalidad de busqueda con debounce para mejorar perfomance"
        ],
        technologies: ["React", "Next", "TypeScript","HTML5","CSS3","Tailwind CSS"],
        language: 'EN',
        roadmap:'Filters → Checkout → PC builder',
        github: "https://github.com/MauCubi/react-recipe-fullstack",
        demo: "https://smart-hardware-shop-git-backend-180c78-mauros-projects-ddc3e294.vercel.app/"
    },
    {
        id: 2,
        title: "Red Social de Recetas MERN",
        status: "Completo",
        img: '/assets/projects/rece.png',
        description: "Aplicación full stack desarrollada con MERN donde los usuarios pueden crear, compartir y descubrir recetas, interactuar mediante comentarios y valoraciones, y gestionar favoritos. Protegida con hash de contraseñas y autenticación basada en JWT.",
        highlights: [
            "Manejo de estados con Redux Toolkit",
            "Autenticación con JWT y rutas protegidas",
            "CRUD completo de recetas con validaciones",
            "Comentarios en recetas",
            "Formularios dinámicos con React Hook Form",
            "Subida de imágenes con Cloudinary",
            "Filtros por categoría, paginación y ordenamiento",
            "Búsqueda con debounce para optimizar el rendimiento",
            "Sistema de valoraciones con cálculo automático de promedio",
            "Perfil de usuario con estadísticas (recetas creadas y favoritos)",
        ],
        technologies: ["React", "TypeScript","HTML5","CSS3","Material UI","MongoDB"],
        language: 'ES',
        github: "https://github.com/MauCubi/react-recipe-fullstack",
        demo: "https://cubirecetitas.netlify.app/"
    },
    {
        id: 3,
        title: "App de Clima",
        status: "Completo",
        img: '/assets/projects/climapp.png',
        description: "Aplicación de clima que usa API Mapbox para autocompletado de ubicaciones en tiempo real y la API OpenWeaher para mostrar condiciones actuales y pronóstico a 5 días a partir de coordenadas precisas.",
        highlights: [
            "Autocompletado de ubicaciones con Mapbox API",
            "Consumo de API de clima utilizando Axios",
            "Pronóstico a 5 días",
            "Diseño responsivo",
            "Iconos según las condiciones climáticas",
            "Control de estado de carga (loading) para mejorar la experiencia de usuario",
            "Integración de APIs utilizando coordenadas (latitud y longitud)",
        ],
        technologies: ["React", "JavaScript","HTML5","CSS3","Material UI"],
        language: 'ES',
        github: "https://github.com/MauCubi/clima-react-app",
        demo: "https://climapp-macubi.netlify.app/"
    },
    {
        id: 4,
        title: "Deadline Tracker",
        status: "Completo",
        img: '/assets/projects/todoapp.png',
        description: "Aplicación de gestión de tareas con indicadores visuales basados en fechas límite. Las tareas pueden incluir una fecha opcional que cambia dinámicamente de color según el tiempo restante.",
        highlights: [
            "Creación de tareas mediante modal",
            "Persistencia de estado utilizando LocalStorage",
            "Fecha límite opcional con indicadores de color dinámicos",
            "Sistema visual de prioridad según días restantes",
            "Tareas completadas con tachado y edición deshabilitada",
            "Manejo de fechas con date-fns",
            "Diseño responsive",
        ],
        technologies: ["React", "TypeScript","HTML5","CSS3","Material UI","MongoDB"],
        language: 'ES',
        github: "https://github.com/MauCubi/todolist-react-app",
        demo: "https://todolist-macubi.netlify.app/"
    },
    // {
    //     id: 4,
    //     title: "AluGeek",
    //     img: '/assets/projects/Alugeek.png',
    //     description: "Descripcion de todo el proyecto, asi tipo re loco viste tiene que ser bastantelargo y bien descriptivo, asi parece todo re cheto y sin dejar espacios en blanco, aca ya no se que mas escribir",
    //     technologies: ["JavaScript","HTML5","CSS3"],
    //     github: "https://github.com/MauCubi/alura-geek-commerce",
    //     demo: "https://alura-geek.onrender.com/"
    // },
    // {
    //     id: 5,
    //     title: "Encriptador de Texto",
    //     img: '/assets/projects/encrypt.png',
    //     description: "Descripcion de todo el proyecto, asi tipo re loco viste tiene que ser bastantelargo y bien descriptivo, asi parece todo re cheto y sin dejar espacios en blanco, aca ya no se que mas escribir",
    //     technologies: ["React", "TypeScript","HTML5","CSS3","Tailwind CSS"],
    //     github: "https://github.com/MauCubi/react-text-encrypter",
    //     demo: "https://text-encrypter.netlify.app/"
    // },

];

