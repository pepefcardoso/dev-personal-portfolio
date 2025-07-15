import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Book } from "lucide-react";
import { useTimelineData } from "@/hooks/useTimelineData";
import { TimelineItem as TimelineItemType } from "@/types/timeline";

type TranslatedTimelineItem = Omit<TimelineItemType, 'title' | 'organization' | 'description' | 'period' | 'location' | 'achievements'> & {
  title: string;
  organization: string;
  description: string;
  period: string;
  location?: string;
  achievements?: string[];
};

const TimelineCard: React.FC<{ item: TranslatedTimelineItem }> = ({ item }) => (
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
          <p className="text-sm font-medium text-muted-foreground">
            {item.organization} | {item.period}
          </p>
          <p className="mt-2 text-muted-foreground">{item.description}</p>
          {item.technologies && (
            <div className="mt-3 flex flex-wrap gap-1">
              {item.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Timeline = () => {
  const { t } = useTranslation();
  const { getExperienceData, getEducationData } = useTimelineData();

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
            {getExperienceData.map(item => (
              <TimelineCard key={item.id} item={item as unknown as TranslatedTimelineItem} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 inline-flex items-center gap-2">
              <Book size={20} />
              {t('timeline.education')}
            </h3>
            {getEducationData.map(item => (
              <TimelineCard key={item.id} item={item as unknown as TranslatedTimelineItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;