
import { PersonalInfo, ContactInfo } from '@/types/contact';

/**
 * Informações pessoais e de contato
 */
export const personalInfo: PersonalInfo = {
  name: 'Pedro Paulo Fernandes Cardoso',
  title: {
    en: 'Full Stack Developer',
    pt: 'Desenvolvedor Fullstack',
    es: 'Desarrollador Full Stack'
  },
  description: {
    en: 'Developer proficient in Flutter, Laravel, C#, JavaScript, Vue, SQL and React. Experience in project management and development of cross-platform applications.',
    pt: 'Desenvolvedor com proficiência em Flutter, Laravel, C#, JavaScript, Vue, SQL e React. Experiência em gerenciamento de projetos e desenvolvimento de aplicações multiplataforma.',
    es: 'Desarrollador con competencia en Flutter, Laravel, C#, JavaScript, Vue, SQL y React. Experiencia en gestión de proyectos y desarrollo de aplicaciones multiplataforma.'
  },
  bio: {
    en: 'I am a fullstack developer proficient in Flutter and Laravel, experienced in creating and maintaining cross-platform applications and APIs. Currently working with C# and JavaScript, using EFCore, Vue and SQL, developing customer service and relationship management applications with chat. I also have experience with SQL in databases, Figma for design creation, NextJs for frontend projects and Python for data analysis. I have knowledge in agile methodologies, teamwork and efficient communication.',
    pt: 'Sou desenvolvedor fullstack com proficiência em Flutter e Laravel, prática na criação e manutenção de aplicativos multiplataforma e API\'s. Atualmente trabalho com C# e JavaScript, utilizando EFCore, Vue e SQL, desenvolvendo aplicações de gerenciamento de atendimentos e relacionamentos com chat. Também possuo experiência com SQL em bancos de dados, Figma na criação de design, NextJs para projetos frontend e Python para análise de dados. Tenho conhecimento em metodologias ágeis, trabalho em equipe e comunicação eficiente.',
    es: 'Soy un desarrollador fullstack competente en Flutter y Laravel, con experiencia en la creación y mantenimiento de aplicaciones multiplataforma y APIs. Actualmente trabajo con C# y JavaScript, utilizando EFCore, Vue y SQL, desarrollando aplicaciones de gestión de atención al cliente y relaciones con chat. También tengo experiencia con SQL en bases de datos, Figma para creación de diseños, NextJs para proyectos frontend y Python para análisis de datos. Tengo conocimiento en metodologías ágiles, trabajo en equipe y comunicación eficiente.'
  },
  languages: [
    {
      language: {
        en: 'Brazilian Portuguese',
        pt: 'Português Brasileiro',
        es: 'Portugués Brasileño'
      },
      level: {
        en: 'Fluent/Native',
        pt: 'Fluente/Nativo',
        es: 'Fluido/Nativo'
      },
      proficiency: 'native'
    },
    {
      language: {
        en: 'English',
        pt: 'Inglês',
        es: 'Inglés'
      },
      level: {
        en: 'Intermediate',
        pt: 'Intermediário',
        es: 'Intermedio'
      },
      proficiency: 'intermediate'
    },
    {
      language: {
        en: 'Spanish',
        pt: 'Espanhol',
        es: 'Español'
      },
      level: {
        en: 'Basic',
        pt: 'Básico',
        es: 'Básico'
      },
      proficiency: 'basic'
    }
  ]
};

export const contactInfo: ContactInfo = {
  email: 'pppfcardoso@gmail.com',
  phone: '+5548991155026',
  socialMedia: [
    {
      platform: 'GitHub',
      url: 'https://github.com/pepefcardoso',
      username: 'pepefcardoso',
      icon: 'Github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/pepefcardoso',
      username: 'pepefcardoso',
      icon: 'Linkedin'
    }
  ],
  resume: {
    downloadUrl: '#',
    filename: {
      en: 'Pedro_Paulo_Resume_EN.pdf',
      pt: 'Pedro_Paulo_Curriculo_PT.pdf',
      es: 'Pedro_Paulo_CV_ES.pdf'
    }
  }
};
