import { useMemo } from "react";
import { dataService } from "@/services/dataService";
import { SkillCategory } from "@/types/common";
import { Skill } from "@/types/skills";

export const useSkillsData = () => {
  const skillsData = useMemo(() => dataService.getSkillsData(), []);

  const getSkillsByCategory = (category: SkillCategory): Skill[] => {
    return dataService.getSkillsByCategory(category);
  };

  const getSortedSkills = (
    sortBy: "level" | "order" | "name" = "order"
  ): Skill[] => {
    return dataService.getSkillsSorted(sortBy);
  };

  const getSkillsGroupedByCategory = () => {
    return Object.values(SkillCategory).reduce((acc, category) => {
      acc[category] = getSkillsByCategory(category);
      return acc;
    }, {} as Record<SkillCategory, Skill[]>);
  };

  const getSkillsStats = () => {
    const skills = skillsData.skills;
    return {
      total: skills.length,
      byCategory: Object.values(SkillCategory).reduce((acc, category) => {
        acc[category] = skills.filter(
          (skill) => skill.category === category
        ).length;
        return acc;
      }, {} as Record<SkillCategory, number>),
      averageLevel:
        skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length,
    };
  };

  return {
    skillsData,
    getSkillsByCategory,
    getSortedSkills,
    getSkillsGroupedByCategory,
    getSkillsStats,
  };
};
