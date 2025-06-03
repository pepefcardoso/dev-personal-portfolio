
import { TimelineData } from '@/types/timeline';
import { TimelineType } from '@/types/common';

/**
 * Dados do timeline profissional e educacional
 */
export const timelineData: TimelineData = {
  experience: [
    {
      id: "exp1",
      title: {
        en: "Development Intern",
        pt: "Estagiário de Desenvolvimento",
        es: "Pasante de Desarrollo"
      },
      organization: {
        en: "News Soft House",
        pt: "News Soft House",
        es: "News Soft House"
      },
      period: {
        en: "August/2024 - present",
        pt: "Agosto/2024 - momento",
        es: "Agosto/2024 - presente"
      },
      description: {
        en: "Web application development with Javascript/Vue, C#/EFCore and SQL for customer relationship and business management. Customer data migration and API performance optimization.",
        pt: "Desenvolvimento de aplicação web com Javascript/Vue, C#/EFCore e SQL para relacionamento com clientes e gestão de negócios. Migração de dados de clientes e otimização de performance de API.",
        es: "Desarrollo de aplicación web con Javascript/Vue, C#/EFCore y SQL para relación con clientes y gestión de negocios. Migración de datos de clientes y optimización de rendimiento de API."
      },
      type: TimelineType.EXPERIENCE,
      order: 1,
      startDate: "2024-08",
      technologies: ["JavaScript", "Vue", "C#", "EFCore", "SQL"]
    },
    {
      id: "exp2",
      title: {
        en: "Junior Developer",
        pt: "Desenvolvedor Júnior",
        es: "Desarrollador Junior"
      },
      organization: {
        en: "Doutor-Ie",
        pt: "Doutor-Ie",
        es: "Doutor-Ie"
      },
      period: {
        en: "January/2023 - February/2024",
        pt: "Janeiro/2023 - Fevereiro/2024",
        es: "Enero/2023 - Febrero/2024"
      },
      description: {
        en: "Frontend development in Dart/Flutter for cross-platform application for automotive repair professionals. Collaboration on Desktop application with Dart/Flutter. API migration to PHP/Laravel and support in bug resolution and performance issues.",
        pt: "Desenvolvimento frontend em Dart/Flutter de aplicativo multiplataforma para profissionais da reparação automotiva. Colaboração em aplicação Desktop com Dart/Flutter. Migração de API para PHP/Laravel e suporte na resolução de bugs e falhas de performance.",
        es: "Desarrollo frontend en Dart/Flutter de aplicación multiplataforma para profesionales de reparación automotriz. Colaboración en aplicación Desktop con Dart/Flutter. Migración de API a PHP/Laravel y soporte en resolución de bugs y problemas de rendimiento."
      },
      type: TimelineType.EXPERIENCE,
      order: 2,
      startDate: "2023-01",
      endDate: "2024-02",
      technologies: ["Dart", "Flutter", "PHP", "Laravel"]
    },
    {
      id: "exp3",
      title: {
        en: "Accounting Assistant",
        pt: "Auxiliar Contábil",
        es: "Asistente Contable"
      },
      organization: {
        en: "Doutor-Ie",
        pt: "Doutor-Ie",
        es: "Doutor-Ie"
      },
      period: {
        en: "September/2019 - December/2022",
        pt: "Setembro/2019 - Dezembro/2022",
        es: "Septiembre/2019 - Diciembre/2022"
      },
      description: {
        en: "Financial, accounting and fiscal control of medium/large company. Development of financial analysis and reports. Investment consulting and implementation of business management practices.",
        pt: "Controle financeiro, contábil e fiscal de empresa de Médio/Grande porte. Desenvolvimento de análise e relatórios financeiros. Consultoria de investimentos e implementação de práticas de gestão de negócios.",
        es: "Control financiero, contable y fiscal de empresa de mediano/gran porte. Desarrollo de análisis e informes financieros. Consultoría de inversiones e implementación de prácticas de gestión empresarial."
      },
      type: TimelineType.EXPERIENCE,
      order: 3,
      startDate: "2019-09",
      endDate: "2022-12"
    },
    {
      id: "exp4",
      title: {
        en: "Project Consultant",
        pt: "Consultor de Projetos",
        es: "Consultor de Proyectos"
      },
      organization: {
        en: "Ação Júnior",
        pt: "Ação Júnior",
        es: "Ação Júnior"
      },
      period: {
        en: "July/2018 - August/2019",
        pt: "Julho/2018 - Agosto/2019",
        es: "Julio/2018 - Agosto/2019"
      },
      description: {
        en: "Building business solutions. Customer communication. Results optimization, business management and corporate practices.",
        pt: "Construção de soluções para negócios. Comunicação com clientes. Otimização de resultados, gestão de negócios e práticas empresariais.",
        es: "Construcción de soluciones empresariales. Comunicación con clientes. Optimización de resultados, gestión empresarial y prácticas corporativas."
      },
      type: TimelineType.EXPERIENCE,
      order: 4,
      startDate: "2018-07",
      endDate: "2019-08"
    }
  ],
  education: [
    {
      id: "edu1",
      title: {
        en: "Systems Analysis and Development",
        pt: "Análise e Desenvolvimento de Sistemas",
        es: "Análisis y Desarrollo de Sistemas"
      },
      organization: {
        en: "IFSC",
        pt: "IFSC",
        es: "IFSC"
      },
      period: {
        en: "2024 - 2026",
        pt: "2024 - 2026",
        es: "2024 - 2026"
      },
      description: {
        en: "Main subjects: Systems Analysis, Systems Design, OOP Practices, Software Testing, Database, Human-Computer Interface.",
        pt: "Principais matérias: Análise de Sistemas, Projeto de Sistemas, Práticas em DOO, Teste de Software, Banco de Dados, Interface Humano-Computador.",
        es: "Materias principales: Análisis de Sistemas, Diseño de Sistemas, Prácticas en POO, Testing de Software, Base de Datos, Interfaz Humano-Computadora."
      },
      type: TimelineType.EDUCATION,
      order: 1,
      startDate: "2024",
      endDate: "2026"
    },
    {
      id: "edu2",
      title: {
        en: "Elementary and High School",
        pt: "Ensino Fundamental e Médio",
        es: "Educación Primaria y Secundaria"
      },
      organization: {
        en: "Colégio Dehon",
        pt: "Colégio Dehon",
        es: "Colégio Dehon"
      },
      period: {
        en: "2007 - 2017",
        pt: "2007 - 2017",
        es: "2007 - 2017"
      },
      description: {
        en: "Basic education and complete high school.",
        pt: "Formação básica e ensino médio completo.",
        es: "Educación básica y secundaria completa."
      },
      type: TimelineType.EDUCATION,
      order: 2,
      startDate: "2007",
      endDate: "2017"
    },
    {
      id: "edu3",
      title: {
        en: "Relevant Courses",
        pt: "Cursos Relevantes",
        es: "Cursos Relevantes"
      },
      organization: {
        en: "Online Platforms",
        pt: "Plataformas Online",
        es: "Plataformas Online"
      },
      period: {
        en: "2022 - 2024",
        pt: "2022 - 2024",
        es: "2022 - 2024"
      },
      description: {
        en: "Python Programming from Basic to Advanced (Udemy/64hrs), Python Mega Course (Udemy/53hrs), SQL and PostgreSQL (Udemy/22hrs), Advanced Web Development with PHP, Laravel and Vue.JS (Udemy/57hrs), PHP 8 (HCode/20hrs), Complete Web Developer Course (HCode/14hrs), Introduction to C# (Microsoft Learn).",
        pt: "Programação em Python do básico ao avançado (Udemy/64hrs), Python Mega Course (Udemy/53hrs), SQL and PostgreSQL (Udemy/22hrs), Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS (Udemy/57hrs), PHP 8 (HCode/20hrs), Curso Completo do Desenvolvedor Web (HCode/14hrs), Introdução ao C# (Microsoft Learn).",
        es: "Programación en Python de básico a avanzado (Udemy/64hrs), Python Mega Course (Udemy/53hrs), SQL and PostgreSQL (Udemy/22hrs), Desarrollo Web Avanzado con PHP, Laravel y Vue.JS (Udemy/57hrs), PHP 8 (HCode/20hrs), Curso Completo del Desarrollador Web (HCode/14hrs), Introducción a C# (Microsoft Learn)."
      },
      type: TimelineType.EDUCATION,
      order: 3,
      startDate: "2022",
      endDate: "2024"
    }
  ]
};
