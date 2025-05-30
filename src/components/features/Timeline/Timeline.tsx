
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
      title: t('timeline.exp1.title'),
      organization: t('timeline.exp1.organization'),
      period: t('timeline.exp1.period'),
      description: t('timeline.exp1.description'),
      type: "experience",
    },
    {
      id: "exp2",
      title: t('timeline.exp2.title'),
      organization: t('timeline.exp2.organization'),
      period: t('timeline.exp2.period'),
      description: t('timeline.exp2.description'),
      type: "experience",
    },
    {
      id: "exp3",
      title: t('timeline.exp3.title'),
      organization: t('timeline.exp3.organization'),
      period: t('timeline.exp3.period'),
      description: t('timeline.exp3.description'),
      type: "experience",
    },
    {
      id: "exp4",
      title: t('timeline.exp4.title'),
      organization: t('timeline.exp4.organization'),
      period: t('timeline.exp4.period'),
      description: t('timeline.exp4.description'),
      type: "experience",
    },
    {
      id: "edu1",
      title: t('timeline.edu1.title'),
      organization: t('timeline.edu1.organization'),
      period: t('timeline.edu1.period'),
      description: t('timeline.edu1.description'),
      type: "education",
    },
    {
      id: "edu2",
      title: t('timeline.edu2.title'),
      organization: t('timeline.edu2.organization'),
      period: t('timeline.edu2.period'),
      description: t('timeline.edu2.description'),
      type: "education",
    },
    {
      id: "edu3",
      title: t('timeline.edu3.title'),
      organization: t('timeline.edu3.organization'),
      period: t('timeline.edu3.period'),
      description: t('timeline.edu3.description'),
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
