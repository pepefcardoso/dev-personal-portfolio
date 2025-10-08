import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { getAsyncDataLoader } from "@/services/asyncDataLoader";
import { Skill } from "@/types/skills";
import { SkillCategory } from "@/types/common";

export const useAsyncSkills = () => {
  const queryClient = useQueryClient();
  const dataLoader = getAsyncDataLoader(queryClient);

  const {
    data: skillsData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: () => dataLoader.loadSkillsData(),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  const getSkillsByCategory = (category: SkillCategory): Skill[] => {
    if (!skillsData) return [];
    return skillsData.skills.filter((skill) => skill.category === category);
  };

  const getSortedSkills = (
    sortBy: "level" | "order" | "name" = "order"
  ): Skill[] => {
    if (!skillsData) return [];

    const skills = [...skillsData.skills];

    switch (sortBy) {
      case "level":
        return skills.sort((a, b) => b.level - a.level);
      case "name":
        return skills.sort((a, b) => a.name.localeCompare(b.name));
      case "order":
      default:
        return skills.sort((a, b) => a.order - b.order);
    }
  };

  const getSkillsGroupedByCategory = () => {
    if (!skillsData) return {};

    return Object.values(SkillCategory).reduce((acc, category) => {
      acc[category] = getSkillsByCategory(category);
      return acc;
    }, {} as Record<SkillCategory, Skill[]>);
  };

  const getSkillsStats = () => {
    if (!skillsData) return null;

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
    isLoading,
    error,
    refetch,
    getSkillsByCategory,
    getSortedSkills,
    getSkillsGroupedByCategory,
    getSkillsStats,
  };
};
