
import { useMemo } from 'react';
import { dataService } from '@/services/dataService';
import { SkillCategory } from '@/types/common';
import { Skill } from '@/types/skills';

/**
 * Hook para gerenciar dados de habilidades
 */
export const useSkillsData = () => {
  const skillsData = useMemo(() => dataService.getSkillsData(), []);

  /**
   * Obtém habilidades por categoria
   */
  const getSkillsByCategory = (category: SkillCategory): Skill[] => {
    return dataService.getSkillsByCategory(category);
  };

  /**
   * Obtém todas as habilidades ordenadas
   */
  const getSortedSkills = (sortBy: 'level' | 'order' | 'name' = 'order'): Skill[] => {
    return dataService.getSkillsSorted(sortBy);
  };

  /**
   * Obtém habilidades agrupadas por categoria
   */
  const getSkillsGroupedByCategory = () => {
    return Object.values(SkillCategory).reduce((acc, category) => {
      acc[category] = getSkillsByCategory(category);
      return acc;
    }, {} as Record<SkillCategory, Skill[]>);
  };

  /**
   * Obtém estatísticas das habilidades
   */
  const getSkillsStats = () => {
    const skills = skillsData.skills;
    return {
      total: skills.length,
      byCategory: Object.values(SkillCategory).reduce((acc, category) => {
        acc[category] = skills.filter(skill => skill.category === category).length;
        return acc;
      }, {} as Record<SkillCategory, number>),
      averageLevel: skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length
    };
  };

  return {
    skillsData,
    getSkillsByCategory,
    getSortedSkills,
    getSkillsGroupedByCategory,
    getSkillsStats
  };
};
