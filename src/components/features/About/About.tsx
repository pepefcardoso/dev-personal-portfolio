
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/Card";
import { Skill } from "@/types/skills";

const About = () => {
  const { t } = useTranslation();
  
  const skills: Skill[] = [
    { name: "Flutter", level: 5, category: "frontend" },
    { name: "Laravel", level: 4, category: "backend" },
    { name: "C#", level: 4, category: "languages" },
    { name: "JavaScript", level: 5, category: "languages" },
    { name: "Vue", level: 4, category: "frontend" },
    { name: "React", level: 3, category: "frontend" },
    { name: "SQL", level: 4, category: "backend" },
    { name: "Python", level: 3, category: "languages" },
    { name: "Git", level: 4, category: "tools" },
    { name: "Dart", level: 5, category: "languages" },
    { name: "EFCore", level: 4, category: "backend" },
    { name: "CSS", level: 4, category: "frontend" },
    { name: "HTML", level: 5, category: "frontend" },
  ];

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-6 rounded-full ${
              i <= level ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t('about.bioTitle')}</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {t('about.bio1')}
              </p>
              <p className="text-muted-foreground">
                {t('about.bio2')}
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">{t('about.languagesTitle')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>{t('about.portuguese')}</span>
                  <span className="font-medium">{t('about.fluent')}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('about.english')}</span>
                  <span className="font-medium">{t('about.intermediate')}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('about.spanish')}</span>
                  <span className="font-medium">{t('about.basic')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div id="skills">
            <h3 className="text-xl font-semibold mb-6">{t('about.skillsTitle')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden border border-border/50">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
                        {t(`skills.categories.${skill.category}`)}
                      </span>
                    </div>
                    {renderSkillLevel(skill.level)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
