
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Book } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const Timeline = () => {
  const { t } = useTranslation();
  
  const timelineData: TimelineItem[] = [
    {
      id: "exp1",
      title: "Senior Frontend Developer",
      organization: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading the frontend development team, implementing new features and improving performance. Working with React, TypeScript, and GraphQL.",
      type: "experience",
    },
    {
      id: "exp2",
      title: "Full Stack Developer",
      organization: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description: "Developed and maintained various web applications using React, Node.js, and MongoDB. Implemented responsive designs and improved user experience.",
      type: "experience",
    },
    {
      id: "edu1",
      title: "Master's in Computer Science",
      organization: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
      type: "education",
    },
    {
      id: "exp3",
      title: "Junior Web Developer",
      organization: "WebTech Startup",
      period: "2015 - 2018",
      description: "Developed responsive websites and applications. Worked with HTML, CSS, JavaScript, and PHP.",
      type: "experience",
    },
    {
      id: "edu2",
      title: "Bachelor's in Computer Science",
      organization: "State University",
      period: "2011 - 2015",
      description: "Focused on programming fundamentals, data structures, and web development.",
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
