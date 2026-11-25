// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
// export { resumeConfig } from './resume-config.example'

import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Sofiya Debois',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Software engineer',
      fr: 'Ingénieure logiciel',
    },
    // subtitle: {
    //   en: '8 months of experience',
    //   fr: '8 mois d\'expérience',
    // },
    location: 'Brest, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Sofiya Debois — Software Engineer',
    description: 'Interactive resume of Sofiya Debois, Junior software engineer interester in Virtual Reality.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'Sofiya-D', href: 'https://github.com/Sofiya-D' },
    { type: 'linkedin', label: 'Sofiya Debois', href: 'https://www.linkedin.com/in/sofiya-debois/' },
    // { type: 'email', label: 'sofiya.savarovska@gmail.com' },
    // { type: 'phone', label: '+33 6 12 34 56 78' },
    { type: 'location', label: 'Brest, France' },
  ],

  // ===== SKILLS =====
  // langages : C, C#, Rust, Python, SQL, TypeScript, JavaScript, HTML, CSS, Bash, Assembleur, O'Caml
  // BDD : MySQL, SQLite, MariaDB
  // Backend Frameworks : Node.js, .NET, Vite
  // DevOps & Cloud : Linux, Docker, GitHub Actions
  // 3D & CAO : Blender, SketchUp, CATIA, Godot, WebGL
  // Data & AI : Matplotlib, NumPy, Pandas, Scikit-learn, Jupyter
  // Methodo : Git (GitHub/GitLab) (code review, MR), Agile, Scrum, TDD
  // Conception : POO, Design Patterns, UML
  // Hardware & protocols : STM32, ARM, UART, CAN, TCP/UDP, Sockets
  // GDB ?
  // Game Admin : eBot, Toornament

  skills: [
    {
      title: { en: 'Languages', fr: 'Langages' },
      type: 'badges',
      items: [
        { name: 'C' },
        { name: 'C#' },
        { name: 'C++' },
        { name: 'Rust' },
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'TypeScript' },
      ],
    },
    {
      title: { en: '3D & CAD', fr: '3D & CAO' },
      type: 'badges',
      items: [
        { name: 'Blender' },
        { name: 'SketchUp' },
        { name: 'Godot' },
        { name: 'CATIA' },
      ],
    },
    {
      title: { en: 'Data & AI', fr: 'Data & IA'},
      type: 'badges',
      items: [
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Scikit-learn' },
        { name: 'Jupyter' },
        { name: 'Matplotlib' },
      ]
    },
    {
      title: { en: 'Hardware & Protocols', fr: 'Hardware & Protocoles' },
      type: 'text',
      items: [
        { name: { en: 'STM32, ARM, UART, CAN, TCP/UDP, Sockets', fr: 'STM32, ARM, UART, CAN, TCP/UDP, Sockets' } },
      ],
    },
    {
      title: { en: 'Conception', fr: 'Conception' },
      type: 'text',
      items: [
        { name: { en: 'Design Patterns, POO, UML', fr: 'Design Patterns, POO, UML' } },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'TDD, Agile, Scrum, Git (GitHub/GitLab), GitHub Actions, Merge Requests, Code Review', fr: 'TDD, Agile, Scrum, Git (GitHub/GitLab), GitHub Actions, Merge Requests, Code Review' } },
      ],
    },
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 990/990' },
        { name: { en: 'Russian', fr: 'Russe' }, level: { en: 'Conversational', fr: 'Conversationnel' } }, // TODO : { en: 'Mothertongue', fr: 'Langue Maternelle'}
        { name: { en: 'Japanese', fr: 'Japonais' }, level: { en: 'Beginner', fr: 'Débutant' } }, // details: 'Goal: JLPTn4 by the end of 2026'
        { name: { en: 'German', fr: 'Allemand' }, level: { en: 'Beginner', fr: 'Débutant' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    { // STAGE FIN D'ETUDES
      id: 'stage-5a-cervval',
      company: { en: 'Cervval', fr: 'Cervval' },
      role: { en: 'Design engineer intern', fr: 'Stagiaire ingénieure d\'études' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '12/01/2026 - 05/06/2026', fr: '12/01/2026 - 05/06/2026' },
      description: {
        en: 'Addition of an experimental feature, allowing the execution of user-written scripts within the virtual reality application.',
        fr: 'Ajout d’une fonctionnalité expérimentale permettant l’exécution de scripts codés par l’utilisateur, dans une application de réalité virtuelle.',
      },
      techs: ['C#', 'Godot', 'Blender'],
      isHighlighted: true,
      details: {
        context: {
          en: 'I joined a team of 4 developers working on 2-3 projects simultaneously, within a 50-person company.', // code reviews on every PR.
          fr: 'J\'ai rejoint une équipe de 4 développeurs travaillant sur 2-3 projets simultanément, au sein d\'une société de 50 personnes.', // code review sur chaque PR.
        },
        tasks: {
          en: [
            'Integrating a JavaScript execution engine (JINT) into the embedded application',
            'Implementing an API exposing application functionality to user scripts',
            'Storing scripts in a database shared by the embedded application and the web application',
            'Handling multithreading issues',
            'Document my work for it to be taken over by the development team',
          ],
          fr: [
            'Intégrer un moteur d’exécution JavaScript (JINT) dans l’application embarquée',
            'Implémenter une API exposant des fonctionnalités de l’application aux scripts de l’utilisateur',
            'Sauvegarder les scripts en BDD, partagée par l’application embarquée et l’application web',
            'Gérer les problématiques de multithreading',
            'Documenter le travail que j\'ai réalisé pour qu\'il puisse être repris par l\'équipe de développement',
          ],
        },
        env: {
          en: 'HTML / CSS / C# / .NET / Node.js / JavaScript / JINT / Blender / Godot / DigiTwin / Git / GitLab / MariaDB',
          fr: 'HTML / CSS / C# / .NET / Node.js / JavaScript / JINT / Blender / Godot / DigiTwin / Git / GitLab / MariaDB',
        },
      },
    },
    { // OSAKA METROPOLITAN UNIVERSITY
      id: 'stage-4a-omu',
      company: { en: 'Osaka Metropolitan University', fr: 'Université Métropolitaine d\'Osaka' },
      role: { en: 'Research student', fr: 'Etudiante en recherche' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '01/04/2025 - 31/08/2025', fr: '01/04/2025 - 31/08/2025' },
      description: {
        en: 'Data analysis on sleep data collected by the lab.',
        fr: 'Analyse de données de sommeil collectées par le laboratoire.',
      },
      techs: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      isHighlighted: false,
      details: {
        context: {
          en: 'I joined a team of 8 researchers from the research lab associated to the graduate school of informatics in Osaka Metropolitan University. Weekly meetings with the team and collaboration on some research topics.',
          fr: 'J\'ai rejoint une équipe de 8 chercheurs du laboratoire de recherche associé à l\'École supérieure d\'informatique de l\'Université Métropolitaine d\'Osaka. Réunions hebdomadaires avec l\'équipe et collaboration sur certains sujets de recherche.',
        },
        tasks: {
          en: [
            'Deepening my skills in data analysis and machine learning through self-study',
            'Exploring possibilities for labeling sleep data using change-point detection algorithms',
          ],
          fr: [
            'Approfondir mes compétences en analyse de données et de machine-Learning, en autodidacte',
            'Explorer les possibilités de labellisation de données de sommeil à l\'aide d\'algorithmes de détection de points de changement',
          ],
        },
        env: {
          en: 'Python / Pandas / NumPy / Scikit-learn / Jupyter',
          fr: 'Python / Pandas / NumPy / Scikit-learn / Jupyter',
        },
      },
    },
    { // STAGE TECHNICIEN
      id: 'stage-3a-cervval',
      company: { en: 'Cervval', fr: 'Cervval' },
      role: { en: 'R&D Intern', fr: 'Stagiaire R&D' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '24/06/2024 - 23/08/2024', fr: '24/06/2024 - 23/08/2024' },
      description: {
        en: 'Exploring controllerless interaction possibilities in augmented reality',
        fr: 'Exploration de possibilités d’interactions sans manettes en réalité augmentée.',
      },
      techs: ['TypeScript', 'WebGL', 'Blender'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of 3 developers working on 2-3 projects simultaneously, within a 50-person company',
          fr: 'Équipe de 3 développeurs travaillant sur 2-3 projets simultanément, au sein d\'une société de 50 personnes',
        },
        tasks: {
          en: [
            'Implementing the detection of specific hand gestures in augmented reality',
            'Creating a demo showcasing the implemented gestures',
          ],
          fr: [
            'Implémenter la détection de certains gestes de la main en réalité augmentée',
            'Réaliser une démo présentant les gestes implémentés',
          ],
        },
        env: {
          en: 'TypeScript / WebGL / Blender / DigiTwin',
          fr: 'TypeScript / WebGL / Blender / DigiTwin',
        },
      },
    },
    { // LA POSTE
      id: 'student-job-laposte',
      company: { en: 'La Poste (french postal service)', fr: 'La Poste' },
      role: { en: 'Customer service', fr: 'Chargée de clientèle' },
      type: { en: 'student job', fr: 'job étudiant' },
      period: { en: '06/2023 - 06/2024', fr: '06/2023 - 06/2024' },
      description: {},
      techs: [],
      details: {
        context: {
          en: 'Working at various post offices, I reinforced a team of 2 to 5 people to provide service on Saturday mornings and occasionally during the week.',
          fr: 'Sur divers bureaux de poste, j\'ai complété une équipe de 2 à 5 personnes pour assurer le service du samedi matin et occasionellement en semaine.',
        },
        tasks: {
          en: [
            'Welcoming and assisting customers',
            'Managing mails and parcels: receipt and handover to the postal worker, sorting, franking, distributing to customers',
          ],
          fr: [
            'Accueilir et accompagner les clients',
            'Gérer le courrier et les colis : réception et remise au postier, tri, affranchissement, distribution aux clients',
          ],
        },
      },
    },
    { // GG-LAN
      id: 'volunteering-gglan',
      company: { en: 'GG-Lan', fr: 'GG-Lan' },
      role: { en: 'Volunteer member', fr: 'Membre bénévole polyvalente' },
      type: { en: 'Community', fr: 'Associatif' },
      period: { en: '2023 - Present', fr: '2023 - Présent' },
      description: {
        en: 'Contributiong to the organization and execution of video game-related events.',
        fr: 'Contribution à l\'organisation et la réalisation d\'événements liés aux jeux-vidéos.',
      },
      techs: [],
      details: {
        context: {
          en: 'Working in a team of around 20 people, towards 2 to 3 events per year. The structure is highly initiative-driven. Weekly online meetings help organize collaborative work.',
          fr: 'Au sein d\'une équipe d\'une vingtaine de personnes, à raison de 2 à 3 événements par an. L\'organisation repose beaucoup sur la prise d\'initiative des volontaires. Des réunions hebdomadaires permettent de structurer l\'effort collectif ',
        },
        tasks: {
          en: [
            'Setting up and packing away equipment, cleaning the premises',
            'Welcoming and assisting participants and visitors',
            'Assisting with the administration of video game tournaments using specialized software',
            'Staffing the food stall, making crêpes on crêpe makers',
          ],
          fr: [
            'Installation et rangement du matériel, nettoyage des locaux',
            'Accueil et accompagnement des participants et visiteurs',
            'Aide à l’administration de tournois de jeux-vidéos via des logiciels spécialisés',
            'Tenue du stand de restauration, confection de crêpes sur des crêpières',
          ],
        },
        env: {
          en: 'ebot / Toornament',
          fr: 'ebot / Toornament',
        },
      },
    },
    { // STAGE OUVRIER
      id: 'stage-enedis',
      company: { en: 'ENEDIS', fr: 'ENEDIS' },
      role: { en: 'Data collection intern', fr: 'Stagiaire collecte de données' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'January 2023', fr: 'janvier 2023' },
      description: {
        en: 'Collection and input of data from geolocated imagery.',
        fr: 'Collecte et saisie de données à partir d\'imagerie géolocalisée.',
      },
      techs: ['Excel'],
      isHighlighted: false,
      details: {
        context: {
          en: 'As part of a team of 3 interns assigned to the same task, for a duration of 1 month.',
          fr: 'Au sein d\'une équipe de 3 stagiaires affectés à la même tâche, pour une durée de 1 mois.',
        },
        tasks: {
          en: [
            'Verification and updating of geolocated data in an Excel spreadsheet, using Google Street View and an in-house mapping software',
          ],
          fr: [
            'Vérification et mise à jour de données géolocalisées dans un tableur Excel, à l\'aide de Google Street View et d\'un logiciel de cartographie interne',
          ],
        },
        env: {
          en: 'Excel / Google Street View / In-house mapping software',
          fr: 'Excel / Google Street View / Logiciel interne de cartographie',
        },
      },
    },
    { // OCEANOPOLIS
      id: 'seasonal-oceanopolis',
      company: { en: 'Brest\'Aim - Océanopolis', fr: 'Brest\'Aim - Océanopolis' },
      role: { en: 'Waitstaff', fr: 'Employée de restauration' },
      type: { en: 'Summer job', fr: 'Emploi saisonnier' },
      period: { en: '07/2021 - 08/2021', fr: '07/2021 - 08/2021' },
      description: { // TODO Sofiya : fill description
        en: '',
        fr: '',
      },
      techs: [],
      details: {
        context: { // TODO Sofiya : fill context
          en: '',
          fr: '',
        },
        tasks: {
          en: [
            'Welcome and assist customers, process their payments',
            'Restock display shelves during service',
            'Clean tables and the dining area',
            'Take stock inventory',
            'Process orders: espressos, lattes, paninis, pastries',
            'Adhere to hygiene and food safety standards',
          ],
          fr: [
            'Accueillir, renseigner et encaisser les clients',
            'Réapprovisionner les gondoles',
            'Nettoyer les tables et la salle',
            'Inventaire des stocks',
            'Préparer des commandes : Expressos, Cafés Lattés, Paninis, Viennoiseries',
            'Respecter les normes d’hygiène et de sécurité alimentaire',
          ],
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  // TODO Sofiya : fill projects section - add the home server ; the todo app from seoultech ; a Rust project ?
  projects: [
    {
      id: 'home-server',
      title: { en: 'Self-hosted gaming server', fr: 'Serveur de jeu' },
      description: {
        en: 'Personal project of hosting a gaming server on a desktop computer at my home.',
        fr: 'Projet personnel d\'hébergement d\'un serveur de jeu sur une machine à mon domicile.',
        // TODO Sofiya : préciser :
        // - Installation et configuration d\'ubuntu server
        // - configuration du pare-feu, de ssh, d\'outils de tunneling (ngrok, pinggy)
        // - configuration du serveur de jeu (conteneurisé avec docker)
        // - scripting et scheduling de tâches automatisées
        // - veille et troubleshooting en cas de besoin
      },
      techs: ['Docker', 'Bash', 'Linux'], // how to mention ssh ; services ; scripting ; Ubuntu ; ngrok/pinggy ; firewall configuration ?
      // url: 'https://weather-app.example.com',
      // github: 'https://github.com/janedoe/weather-app',
    },
  //   {
  //     id: 'project-b',
  //     title: { en: 'TaskManager', fr: 'TaskManager' },
  //     description: {
  //       en: 'A Kanban-style task management tool with drag-and-drop.',
  //       fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
  //     },
  //     techs: ['React', 'Node.js', 'PostgreSQL'],
  //     github: 'https://github.com/janedoe/task-manager',
  //   },
  ],

  // ===== EDUCATION =====
  education: [
    {
      id: 'ENIB',
      school: { en: 'National Engineering School of Brest', fr: 'Ecole Nationale d\'Ingénieurs de Brest' },
      degree: { en: 'Engineering degree', fr: 'Diplôme d\'Ingénieur' },
      specialty: { en: 'Computer Science, Electronics & Mechatronics', fr: 'Informatique, Electronique & Mecatronique' },
      period: '2022 - 2026',
    },
    {
      id: 'SeoulTech',
      school: { en: 'Seoul National University of Science and Technology', fr: 'Seoul National University of Science and Technology' },
      degree: { en: 'Academic mobility', fr: 'Mobilité académique' },
      specialty: { en: 'Computer Science, Machine Learning, Fluid Mechanics, Korean', fr: 'Computer Science, Machine Learning, Fluid Mechanics, Korean' },
      period: 'september 2024 - january 2025',
    },
    {
      id: 'CPGE',
      school: { en: 'La Pérouse-Kerichen High School', fr: 'Lycée La Perouse-Kérichen' },
      degree: { en: 'Preparatory Classes', fr: 'Classes Préparatoires aux Grandes Ecoles' },
      specialty: { en: 'Maths & Physics', fr: 'MPSI - MP' },
      period: '2020 - 2022',
    },
    // TODO Sofiya : make these interactive to be able to show more details about stuff learned there ??
    // eg: "my favourite courses" --> Network (with details) / Rust (with details..& projects ?)
    // protocoles de communication WEB (TCP/UDP/WebSockets...) ; Rust ; ...
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Running; Cycling; Inline skating', fr: 'Course à pied; Roller; Vélo' },
      // details: [
      //   { en: 'Commute', fr: 'Déplacements / Transport' },
      // ],
    },
    {
      title: { en: 'Arts & Crafts', fr: 'Loisirs créatifs' },
      details: [
        { en: 'Photography, DIYs, Cooking', fr: 'Photographie, Travaux manuels, Cuisine' }, // TODO : Add photo portfolio
      ],
    },
    {
      title: { en: 'IT', fr: 'Informatique' },
      details: [
        { en: 'Video-games, Tinkering', fr: 'Jeux-vidéos, Tinkering' },
      ],
    },
    {
      title: { en: 'Cultural diversity', fr: 'Cultures du monde' },
      details: [
        { en: 'travel, languages, customs & traditions', fr: 'voyages, langues, traditions et coutumes' },
      ],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
