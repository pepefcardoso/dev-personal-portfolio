
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "languages";
}

const About = () => {
  const { t } = useTranslation();
  
  const skills: Skill[] = [
    { name: "React", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "languages" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "CSS/Tailwind", level: 5, category: "frontend" },
    { name: "GraphQL", level: 3, category: "backend" },
    { name: "Git", level: 4, category: "tools" },
    { name: "Docker", level: 3, category: "tools" },
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
