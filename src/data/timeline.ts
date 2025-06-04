import { TimelineData } from "@/types/timeline";
import { TimelineType } from "@/types/common";

export const timelineData: TimelineData = {
  experience: [],
  education: [],
};

// EXPERINCE EXAMPLE
// {
//       id: "exp1",
//       title: {
//         en: "Development Intern",
//         pt: "Estagiário de Desenvolvimento",
//         es: "Pasante de Desarrollo"
//       },
//       organization: {
//         en: "News Soft House",
//         pt: "News Soft House",
//         es: "News Soft House"
//       },
//       period: {
//         en: "August/2024 - present",
//         pt: "Agosto/2024 - momento",
//         es: "Agosto/2024 - presente"
//       },
//       description: {
//         en: "Web application development with Javascript/Vue, C#/EFCore and SQL for customer relationship and business management. Customer data migration and API performance optimization.",
//         pt: "Desenvolvimento de aplicação web com Javascript/Vue, C#/EFCore e SQL para relacionamento com clientes e gestão de negócios. Migração de dados de clientes e otimização de performance de API.",
//         es: "Desarrollo de aplicación web con Javascript/Vue, C#/EFCore y SQL para relación con clientes y gestión de negocios. Migración de datos de clientes y optimización de rendimiento de API."
//       },
//       type: TimelineType.EXPERIENCE,
//       order: 1,
//       startDate: "2024-08",
//       technologies: ["JavaScript", "Vue", "C#", "EFCore", "SQL"]
//     }

// EDUCATION EXAMPLE
// {
//       id: "edu1",
//       title: {
//         en: "Systems Analysis and Development",
//         pt: "Análise e Desenvolvimento de Sistemas",
//         es: "Análisis y Desarrollo de Sistemas",
//       },
//       organization: {
//         en: "IFSC",
//         pt: "IFSC",
//         es: "IFSC",
//       },
//       period: {
//         en: "2024 - 2026",
//         pt: "2024 - 2026",
//         es: "2024 - 2026",
//       },
//       description: {
//         en: "Main subjects: Systems Analysis, Systems Design, OOP Practices, Software Testing, Database, Human-Computer Interface.",
//         pt: "Principais matérias: Análise de Sistemas, Projeto de Sistemas, Práticas em DOO, Teste de Software, Banco de Dados, Interface Humano-Computador.",
//         es: "Materias principales: Análisis de Sistemas, Diseño de Sistemas, Prácticas en POO, Testing de Software, Base de Datos, Interfaz Humano-Computadora.",
//       },
//       type: TimelineType.EDUCATION,
//       order: 1,
//       startDate: "2024",
//       endDate: "2026",
//     },
