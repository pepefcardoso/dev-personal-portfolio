import { PersonalInfo, ContactInfo } from "@/types/contact";

export const personalInfo: PersonalInfo = {
  name: "Pedro Paulo Fernandes Cardoso",
  title: {
    en: "Full Stack Developer",
    pt: "Desenvolvedor Fullstack",
    es: "Desarrollador Full Stack",
    fr: "Développeur Full Stack",
    it: "Sviluppatore Full Stack",
    zh: "全栈开发者",
  },
  description: {
    en: "Developer proficient in Flutter, Laravel, C#, JavaScript, Vue, SQL and React. Experience in project management and development of cross-platform applications.",
    pt: "Desenvolvedor com proficiência em Flutter, Laravel, C#, JavaScript, Vue, SQL e React. Experiência em gerenciamento de projetos e desenvolvimento de aplicações multiplataforma.",
    es: "Desarrollador con competencia en Flutter, Laravel, C#, JavaScript, Vue, SQL y React. Experiencia en gestión de proyectos y desarrollo de aplicaciones multiplataforma.",
    fr: "Développeur compétent en Flutter, Laravel, C#, JavaScript, Vue, SQL et React. Expérience en gestion de projets et développement d'applications multiplateformes.",
    it: "Sviluppatore competente in Flutter, Laravel, C#, JavaScript, Vue, SQL e React. Esperienza nella gestione di progetti e nello sviluppo di applicazioni multipiattaforma.",
    zh: "熟练使用Flutter、Laravel、C#、JavaScript、Vue、SQL和React的开发者。具有项目管理和跨平台应用程序开发经验。",
  },
  bio: {
    en: "I am a fullstack developer proficient in Flutter and Laravel, experienced in creating and maintaining cross-platform applications and APIs. Currently working with C# and JavaScript, using EFCore, Vue and SQL, developing customer service and relationship management applications with chat. I also have experience with SQL in databases, Figma for design creation, NextJs for frontend projects and Python for data analysis. I have knowledge in agile methodologies, teamwork and efficient communication.",
    pt: "Sou desenvolvedor fullstack com proficiência em Flutter e Laravel, prática na criação e manutenção de aplicativos multiplataforma e API's. Atualmente trabalho com C# e JavaScript, utilizando EFCore, Vue e SQL, desenvolvendo aplicações de gerenciamento de atendimentos e relacionamentos com chat. Também possuo experiência com SQL em bancos de dados, Figma na criação de design, NextJs para projetos frontend e Python para análise de dados. Tenho conhecimento em metodologias ágeis, trabalho em equipe e comunicação eficiente.",
    es: "Soy un desarrollador fullstack competente en Flutter y Laravel, con experiencia en la creación y mantenimiento de aplicaciones multiplataforma y APIs. Actualmente trabajo con C# y JavaScript, utilizando EFCore, Vue y SQL, desarrollando aplicaciones de gestión de atención al cliente y relaciones con chat. También tengo experiencia con SQL en bases de datos, Figma para creación de diseños, NextJs para proyectos frontend y Python para análisis de datos. Tengo conocimiento en metodologías ágiles, trabajo en equipe y comunicación eficiente.",
    fr: "Je suis un développeur fullstack compétent en Flutter et Laravel, expérimenté dans la création et la maintenance d'applications multiplateformes et d'API. Actuellement, je travaille avec C# et JavaScript, utilisant EFCore, Vue et SQL, développant des applications de gestion de service client et de relations avec chat. J'ai également de l'expérience avec SQL dans les bases de données, Figma pour la création de designs, NextJs pour les projets frontend et Python pour l'analyse de données. Je possède des connaissances en méthodologies agiles, travail en équipe et communication efficace.",
    it: "Sono uno sviluppatore fullstack competente in Flutter e Laravel, con esperienza nella creazione e manutenzione di applicazioni multipiattaforma e API. Attualmente lavoro con C# e JavaScript, utilizzando EFCore, Vue e SQL, sviluppando applicazioni di gestione del servizio clienti e delle relazioni con chat. Ho anche esperienza con SQL nei database, Figma per la creazione di design, NextJs per progetti frontend e Python per l'analisi dei dati. Ho conoscenze in metodologie agili, lavoro di squadra e comunicazione efficace.",
    zh: "我是一名全栈开发者，精通Flutter和Laravel，具有创建和维护跨平台应用程序和API的经验。目前使用C#和JavaScript，结合EFCore、Vue和SQL，开发客户服务和关系管理应用程序，并提供聊天功能。我还在数据库中使用SQL、Figma进行设计创作、NextJs进行前端项目以及Python进行数据分析方面有经验。我熟悉敏捷方法论、团队合作和高效沟通。",
  },
  languages: [
    {
      language: {
        en: "Brazilian Portuguese",
        pt: "Português Brasileiro",
        es: "Portugués Brasileño",
        fr: "Portugais Brésilien",
        it: "Portoghese Brasiliano",
        zh: "巴西葡萄牙语",
      },
      level: {
        en: "Fluent/Native",
        pt: "Fluente/Nativo",
        es: "Fluido/Nativo",
        fr: "Courant/Natif",
        it: "Fluente/Nativo",
        zh: "流利/母语",
      },
      proficiency: "native",
    },
    {
      language: {
        en: "English",
        pt: "Inglês",
        es: "Inglés",
        fr: "Anglais",
        it: "Inglese",
        zh: "英语",
      },
      level: {
        en: "Intermediate",
        pt: "Intermediário",
        es: "Intermedio",
        fr: "Intermédiaire",
        it: "Intermedio",
        zh: "中级",
      },
      proficiency: "intermediate",
    },
    {
      language: {
        en: "Spanish",
        pt: "Espanhol",
        es: "Español",
        fr: "Espagnol",
        it: "Spagnolo",
        zh: "西班牙语",
      },
      level: {
        en: "Basic",
        pt: "Básico",
        es: "Básico",
        fr: "Basique",
        it: "Base",
        zh: "基础",
      },
      proficiency: "basic",
    },
  ],
};

export const contactInfo: ContactInfo = {
  email: "pppfcardoso@gmail.com",
  phone: "+5548991155026",
  socialMedia: [
    {
      platform: "GitHub",
      url: "https://github.com/pepefcardoso",
      username: "pepefcardoso",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/pepefcardoso",
      username: "pepefcardoso",
      icon: "Linkedin",
    },
  ],
  resume: {
    downloadUrl: "/resumes",
    filename: {
      en: "Pedro_Paulo_Resume_EN.pdf",
      pt: "Pedro_Paulo_Curriculo_PT.pdf",
      es: "Pedro_Paulo_Resume_EN.pdf",
      fr: "Pedro_Paulo_Resume_EN.pdf",
      it: "Pedro_Paulo_Resume_EN.pdf",
      zh: "Pedro_Paulo_Resume_EN.pdf",
    },
  },
};
