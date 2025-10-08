import React, { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { useSkillsData } from "@/hooks/useSkillsData";
import { usePersonalData } from "@/hooks/usePersonalData";
import { SkillLevel } from "@/types/common";
import { Skill } from '@/types/skills';

const SkillLevelBar: React.FC<{ level: SkillLevel }> = ({ level }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`h-2 w-6 rounded-full ${i <= level ? "bg-primary" : "bg-muted"}`}
      />
    ))}
  </div>
);

const SkillCard: React.FC<{ skill: Skill; categoryName: string }> = ({ skill, categoryName }) => (
  <Card key={skill.id} className="overflow-hidden border border-border/50">
    <CardContent className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
          {categoryName}
        </span>
      </div>
      <SkillLevelBar level={skill.level} />
    </CardContent>
  </Card>
);

const About = () => {
  const { t } = useTranslation();
  const { getSorted } = useSkillsData();
  const { personal } = usePersonalData();
  const skills = useMemo(() => getSorted('level'), [getSorted]);
  const personalInfo = useMemo(() => personal, [personal]);

  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('about.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t('about.bioTitle')}</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">{t('about.bio1')}</p>
              <p className="text-muted-foreground">{t('about.bio2')}</p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">{t('about.languagesTitle')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {personalInfo.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{lang.language}</span>
                    <span className="font-medium">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="skills">
            <h3 className="text-xl font-semibold mb-6">{t('about.skillsTitle')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  categoryName={t(`skills.categories.${skill.category}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;