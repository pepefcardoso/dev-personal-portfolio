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
    en: "Developer proficient in TypeScript, React, Next.js, C#, JavaScript, Vue, and SQL. Experience in project management and development of modern web applications.",
    pt: "Desenvolvedor com proficiência em TypeScript, React, Next.js, C#, JavaScript, Vue e SQL. Experiência em gerenciamento de projetos e desenvolvimento de aplicações web modernas.",
    es: "Desarrollador con competencia en TypeScript, React, Next.js, C#, JavaScript, Vue y SQL. Experiencia en gestión de proyectos y desarrollo de aplicaciones web modernas.",
    fr: "Développeur compétent en TypeScript, React, Next.js, C#, JavaScript, Vue et SQL. Expérience en gestion de projets et développement d'applications web modernes.",
    it: "Sviluppatore competente in TypeScript, React, Next.js, C#, JavaScript, Vue e SQL. Esperienza nella gestione di progetti e nello sviluppo di applicazioni web moderne.",
    zh: "熟练使用 TypeScript、React、Next.js、C#、JavaScript、Vue 和 SQL 的开发者。具有项目管理和现代 Web 应用程序开发经验。",
  },
  bio: {
    en: "I am a fullstack web developer proficient in TypeScript, React, and Next.js, experienced in creating and maintaining modern web applications and APIs. Currently working with C# and JavaScript, using EFCore, Vue and SQL, developing customer service and relationship management applications with chat. I also have experience with Flutter and Laravel for cross-platform projects, SQL in databases, Figma for design creation, and Python for data analysis. I have knowledge in agile methodologies, teamwork and efficient communication.",
    pt: "Sou desenvolvedor web fullstack com proficiência em TypeScript, React e Next.js, com prática na criação e manutenção de aplicações web modernas e API's. Atualmente trabalho com C# e JavaScript, utilizando EFCore, Vue e SQL, desenvolvendo aplicações de gerenciamento de atendimentos e relacionamentos com chat. Também possuo experiência com Flutter e Laravel para projetos multiplataforma, bancos de dados relacionais, Figma na criação de design e Python para análise de dados. Tenho conhecimento em metodologias ágeis, trabalho em equipe e comunicação eficiente.",
    es: "Soy un desarrollador web fullstack competente en TypeScript, React y Next.js, con experiencia en la creación y mantenimiento de aplicaciones web modernas y APIs. Actualmente trabajo con C# y JavaScript, utilizando EFCore, Vue y SQL, desarrollando aplicaciones de gestión de atención al cliente y relaciones con chat. También tengo experiencia con Flutter y Laravel para proyectos multiplataforma, bases de datos relacionales, Figma para creación de diseños y Python para análisis de datos. Tengo conocimiento en metodologías ágiles, trabajo en equipo y comunicación eficiente.",
    fr: "Je suis un développeur web fullstack compétent en TypeScript, React et Next.js, expérimenté dans la création et la maintenance d'applications web modernes et d'API. Actuellement, je travaille avec C# et JavaScript, utilisant EFCore, Vue et SQL, développant des applications de gestion de service client et de relations avec chat. J'ai également de l'expérience avec Flutter et Laravel pour les projets multiplateformes, les bases de données relationnelles, Figma pour la création de designs et Python pour l'analyse de données. Je possède des connaissances en méthodologies agiles, travail en équipe et communication efficace.",
    it: "Sono uno sviluppatore web fullstack competente in TypeScript, React e Next.js, con esperienza nella creazione e manutenzione di applicazioni web moderne e API. Attualmente lavoro con C# e JavaScript, utilizzando EFCore, Vue e SQL, sviluppando applicazioni di gestione del servizio clienti e delle relazioni con chat. Ho anche esperienza con Flutter e Laravel per progetti multipiattaforma, database relazionali, Figma per la creazione di design e Python per l'analisi dei dati. Ho conoscenze in metodologie agili, lavoro di squadra e comunicazione efficace.",
    zh: "我是一名全栈 Web 开发者，精通 TypeScript、React 和 Next.js，具有创建和维护现代 Web 应用程序和 API 的经验。目前使用 C# 和 JavaScript，结合 EFCore、Vue 和 SQL，开发客户服务和关系管理应用程序，并提供聊天功能。我还在 Flutter 和 Laravel 的跨平台项目、关系型数据库、使用 Figma 进行设计创作以及 Python 进行数据分析方面有经验。我熟悉敏捷方法论、团队合作和高效沟通。",
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
