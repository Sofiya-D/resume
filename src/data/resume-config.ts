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
      en: 'Software Engineer',
      fr: 'Ingénieure logiciel',
    },
    subtitle: {
      en: '8 months of experience',
      fr: '8 mois d\'expérience',
    },
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
  // langages : C, C#, Rust, Python, TypeScript, JavaScript, HTML, CSS, Bash, Assembleur
  // BDD : MySQL, SQLite, MariaDB
  // Backend Frameworks : Node.js, .NET
  // DevOps & Cloud : Linux
  // Tools & Others : Git, GitHub, GitLab, CATIA, OpenGL (API/Interface de prog), Godot // pas Figma..
  // Data & AI : Pandas, NumPy, Scikit-learn
  // Messaging & Realtime : WebSocket

  skills: [
    { // TODO Sofiya : choose a curation of skills
      title: { en: 'Languages', fr: 'Langages' },
      type: 'badges',
      items: [
        { name: 'C' },
        { name: 'C#' },
        { name: 'Rust' },
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Bash' },
        { name: { en: 'Assembly', fr: 'Assembleur' } },
        // { name: 'OCaml' },
      ],
    },
    {
      title: { en: 'Other', fr: 'Autres' }, // TODO Sofiya : find an appropriate category title ???
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'SQLite' },
        { name: 'MariaDB' },
        { name: 'Node.js' },
        { name: '.NET' },
        { name: 'Linux' },
        { name: 'Git' },
        // { name: 'GitHub' },
        // { name: 'GitLab' },
        // { name: 'CATIA' },
        { name: 'OpenGL' },
        { name: 'Blender' },
        { name: 'Godot' },
        // { name: 'Pandas' },
        // { name: 'NumPy' },
        // { name: 'Scikit-Learn' },
        // { name: 'Jupyter' },
        { name: 'WebSocket' },
        // { name: 'ebot' },
        // { name: 'Toornament' },
      ],
    },
    {
      title: { en: 'Conception', fr: 'Conception' },
      type: 'text',
      items: [
        { name: { en: 'Design Pattern, POO, UML', fr: 'Design Pattern, POO, UML' } },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review', fr: 'Agile/Scrum, TDD, Code Review' } },
      ],
    },
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 990' },
        { name: { en: 'Russian', fr: 'Russe' }, level: { en: 'Conversational', fr: 'Conversationnel' }, details: 'Mothertongue' }, // TODO : { en: 'Mothertongue', fr: 'Langue Maternelle'}
        { name: { en: 'Japanese', fr: 'Japonais' }, level: { en: 'Beginner', fr: 'Débutant' } },
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
      techs: ['Node.js', 'JINT', 'MariaDB', 'Godot', 'GitLab'],
      isHighlighted: false,
      details: {
        context: {
          en: 'Team of 4 developers working on 2-3 projects simultaneously, within a 50-person company.', // code reviews on every PR.
          fr: 'Équipe de 4 développeurs travaillant sur 2-3 projets simultanément, au sein d\'une société de 50 personnes.', // code review sur chaque PR.
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
          en: 'HTML / CSS / C# / .NET / Node.js / JavaScript / JINT / MariaDB / Godot / GitLab',
          fr: 'HTML / CSS / C# / .NET / Node.js / JavaScript / JINT / MariaDB / Godot / GitLab',
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
      techs: ['Pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
      details: {
        context: {
          en: 'Team of 8 researchers within the research lab associated to the graduate school of informatics in Osaka Metropolitan University. Weekly meetings with the team and collaboration on some research topics.',
          fr: 'Equipe de 8 chercheurs au sein du laboratoire de recherche associé à l\'École supérieure d\'informatique de l\'Université Métropolitaine d\'Osaka. Réunions hebdomadaires avec l\'équipe et collaboration sur certains sujets de recherche.',
        },
        tasks: {
          en: [
            'Deepening my skills in data analysis and machine learning through self-study',
            'Exploring possibilities for labeling sleep data using change-point detection algorithms',
          ],
          fr: [
            'Approfondir mes compétences en analyse de données et de machine-Learning, en autodidacte',
            'Explorer les possibilités de labellisation de données de sommeil à l\'aide d\'algorithmes de détection de poijtns de changement',
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
        en: 'Exploring controllerless interaction possibilities in virtual reality',
        fr: 'Exploration de possibilités d’interactions sans manettes en réalité virtuelle.',
      },
      techs: ['TypeScript', 'OpenGL', 'Blender'],
      details: {
        context: {
          en: 'Team of 3 developers working on 2-3 projects simultaneously, within a 50-person company',
          fr: 'Équipe de 3 développeurs travaillant sur 2-3 projets simultanément, au sein d\'une société de 50 personnes',
        },
        tasks: {
          en: [
            'Implementing the detection of specific hand gestures in virtual reality',
            'Creating a demo showcasing the implemented gestures',
          ],
          fr: [
            'Implémenter la détection de certains gestes de la main en réalité virtuelle',
            'Réaliser une démo présentant les gestes implémentés',
          ],
        },
        env: {
          en: 'TypeScript / OpenGL / Blender',
          fr: 'TypeScript / OpenGL / Blender',
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
          en: 'Working at various post offices, reinforcing a team of 2 to 5 people to provide service on Saturday mornings and occasionally during the week.',
          fr: 'Sur divers bureaux de poste, renfort d\'une équipe de 2 à 5 personnes pour assurer le service du samedi matin et occasionellement en semaine.',
        },
        tasks: {
          en: [
            'Welcoming and assisting customers',
            'Mail and parcel management: receipt and handover to the postal worker, sorting, franking, distribution to customers',
          ],
          fr: [
            'Accueilir et accompagner les clients',
            'Gérer le courrier et les colis : réception et remise au postier, tri, affranchissement, distribution aux clients',
          ],
        },
        env: {},
      },
    },
    { // GG-LAN
      id: 'volunteering-gglan',
      company: { en: 'GG-Lan', fr: 'GG-Lan' },
      role: { en: 'Volunteer member', fr: 'Membre bénévole polyvalente' },
      type: { en: 'Community', fr: 'Associatif' },
      period: { en: '2023 - Present', fr: '2023 - Présent' },
      description: {
        en: 'Working within a team of around twenty people, providing support for the organization and execution of video game-related events.',
        fr: 'Au sein d\'une équipe d\'une vingtaine de personnes, soutien à l\'organisation et la réalisation d\'événements liés aux jeux-vidéos.',
      },
      techs: [],
      details: {
        context: { // TODO Sofiya : fill context
          en: '',
          fr: '',
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
            'Clean tables during service and the entire dining area at the end of the shift',
            'Take stock inventory at the end of the shift',
            'Process orders: espressos, lattes, paninis, pastries',
            'Adhere to hygiene and food safety standards',
            'Direct visitors',
          ],
          fr: [
            'Accueillir, renseigner et encaisser les clients',
            'Réapprovisionner des gondoles pendant le service',
            'Nettoyer les tables en service, et de toute la salle en fin de service',
            'Inventaire des stocks en fin de service',
            'Préparer des commandes : Expressos, Cafés Lattés, Paninis, Viennoiseries',
            'Respecter les normes d’hygiène et de sécurité alimentaire',
            'Orienter les visiteurs',
          ],
        },
        env: {},
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  // TODO Sofiya : fill projects section
  // projects: [
  //   {
  //     id: 'project-a',
  //     title: { en: 'WeatherApp', fr: 'WeatherApp' },
  //     description: {
  //       en: 'A real-time weather dashboard built with React and OpenWeather API.',
  //       fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
  //     },
  //     techs: ['React', 'TypeScript'],
  //     url: 'https://weather-app.example.com',
  //     github: 'https://github.com/janedoe/weather-app',
  //   },
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
  // ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'National Engineering School of Brest', fr: 'Ecole Nationale d\'Ingénieurs de Brest' },
      degree: { en: 'Engineering degree', fr: 'Diplôme d\'Ingénieur' },
      specialty: { en: 'Computer Science, Electronics & Mechatronics', fr: 'Informatique, Electronique & Mecatronique' },
      period: '2022 - 2026',
    },
    // TODO Sofiya : add the exchange @ SeoulTech
    {
      school: { en: 'La Pérouse-Kerichen High School', fr: 'Lycée La Perouse-Kérichen' },
      degree: { en: 'Preparatory Classes', fr: 'Classes Préparatoires aux Grandes Ecoles' },
      specialty: { en: 'Maths & Physics', fr: 'MPSI - MP' },
      period: '2020 - 2022',
    },
    // TODO Sofiya : make these interactive to be able to show more details about stuff learned there ??
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Cycling', fr: 'Vélo' },
      details: [
        { en: 'Commute', fr: 'Déplacements / Transport' },
      ],
    },
    {
      title: { en: 'Running', fr: 'Course à pied' },
    },
    {
      title: { en: 'Inline Skating', fr: 'Roller' },
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
