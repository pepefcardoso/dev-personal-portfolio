
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Book } from "lucide-react";
import { TimelineItem } from "@/types/timeline";

const Timeline = () => {
  const { t } = useTranslation();
  
  const timelineData: TimelineItem[] = [
    {
      id: "exp1",
      title: "Estagiário de Desenvolvimento",
      organization: "News Soft House",
      period: "Agosto/2024 - momento",
      description: "Desenvolvimento de aplicação web com Javascript/Vue, C#/EFCore e SQL para relacionamento com clientes e gestão de negócios. Migração de dados de clientes e otimização de performance de API.",
      type: "experience",
    },
    {
      id: "exp2",
      title: "Desenvolvedor Júnior",
      organization: "Doutor-Ie",
      period: "Janeiro/2023 - Fevereiro/2024",
      description: "Desenvolvimento frontend em Dart/Flutter de aplicativo multiplataforma para profissionais da reparação automotiva. Colaboração em aplicação Desktop com Dart/Flutter. Migração de API para PHP/Laravel e suporte na resolução de bugs e falhas de performance.",
      type: "experience",
    },
    {
      id: "exp3",
      title: "Auxiliar Contábil",
      organization: "Doutor-Ie",
      period: "Setembro/2019 - Dezembro/2022",
      description: "Controle financeiro, contábil e fiscal de empresa de Médio/Grande porte. Desenvolvimento de análise e relatórios financeiros. Consultoria de investimentos e implementação de práticas de gestão de negócios.",
      type: "experience",
    },
    {
      id: "exp4",
      title: "Consultor de Projetos",
      organization: "Ação Júnior",
      period: "Julho/2018 - Agosto/2019",
      description: "Construção de soluções para negócios. Comunicação com clientes. Otimização de resultados, gestão de negócios e práticas empresariais.",
      type: "experience",
    },
    {
      id: "edu1",
      title: "Análise e Desenvolvimento de Sistemas",
      organization: "IFSC",
      period: "2024 - 2026",
      description: "Principais matérias: Análise de Sistemas, Projeto de Sistemas, Práticas em DOO, Teste de Software, Banco de Dados, Interface Humano-Computador.",
      type: "education",
    },
    {
      id: "edu2",
      title: "Ensino Fundamental e Médio",
      organization: "Colégio Dehon",
      period: "2007 - 2017",
      description: "Formação básica e ensino médio completo.",
      type: "education",
    },
    {
      id: "edu3",
      title: "Cursos Relevantes",
      organization: "Plataformas Online",
      period: "2022 - 2024",
      description: "Programação em Python do básico ao avançado (Udemy/64hrs), Python Mega Course (Udemy/53hrs), SQL and PostgreSQL (Udemy/22hrs), Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS (Udemy/57hrs), PHP 8 (HCode/20hrs), Curso Completo do Desenvolvedor Web (HCode/14hrs), Introdução ao C# (Microsoft Learn).",
      type: "education",
    },
  ];

  // Separate education and experience items
  const education = timelineData.filter(item => item.type === 'education');
  const experience = timelineData.filter(item => item.type === 'experience');

  const TimelineCard = ({ item }: { item: TimelineItem }) => (
    <Card className="mb-4 border-l-4 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="mt-1 mr-4 p-2 rounded-full bg-muted">
            {item.type === 'education' ? (
              <Book size={18} className="text-primary" />
            ) : (
              <Calendar size={18} className="text-primary" />
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-sm font-medium text-muted-foreground">{item.organization} | {item.period}</p>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('timeline.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 inline-flex items-center gap-2">
              <Calendar size={20} />
              {t('timeline.experience')}
            </h3>
            {experience.map(item => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 inline-flex items-center gap-2">
              <Book size={20} />
              {t('timeline.education')}
            </h3>
            {education.map(item => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
