
import { SkillsData, Skill } from '@/types/skills';
import { SkillLevel, SkillCategory } from '@/types/common';

export const skillsData: SkillsData = {
  categories: {
    [SkillCategory.FRONTEND]: {
      name: 'Frontend',
      description: 'User interface and client-side technologies',
      color: '#3B82F6'
    },
    [SkillCategory.BACKEND]: {
      name: 'Backend',
      description: 'Server-side and database technologies',
      color: '#10B981'
    },
    [SkillCategory.TOOLS]: {
      name: 'Tools',
      description: 'Development tools and utilities',
      color: '#F59E0B'
    },
    [SkillCategory.LANGUAGES]: {
      name: 'Languages',
      description: 'Programming languages',
      color: '#8B5CF6'
    }
  },
  skills: [
    {
      id: 'flutter',
      name: 'Flutter',
      level: SkillLevel.EXPERT,
      category: SkillCategory.FRONTEND,
      order: 1,
      yearsOfExperience: 3
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      level: SkillLevel.EXPERT,
      category: SkillCategory.LANGUAGES,
      order: 2,
      yearsOfExperience: 4
    },
    {
      id: 'vue',
      name: 'Vue',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.FRONTEND,
      order: 3,
      yearsOfExperience: 2
    },
    {
      id: 'laravel',
      name: 'Laravel',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.BACKEND,
      order: 4,
      yearsOfExperience: 3
    },
    {
      id: 'csharp',
      name: 'C#',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.LANGUAGES,
      order: 5,
      yearsOfExperience: 2
    },
    {
      id: 'sql',
      name: 'SQL',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.BACKEND,
      order: 6,
      yearsOfExperience: 4
    },
    {
      id: 'dart',
      name: 'Dart',
      level: SkillLevel.EXPERT,
      category: SkillCategory.LANGUAGES,
      order: 7,
      yearsOfExperience: 3
    },
    {
      id: 'efcore',
      name: 'EFCore',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.BACKEND,
      order: 8,
      yearsOfExperience: 2
    },
    {
      id: 'html',
      name: 'HTML',
      level: SkillLevel.EXPERT,
      category: SkillCategory.FRONTEND,
      order: 9,
      yearsOfExperience: 5
    },
    {
      id: 'css',
      name: 'CSS',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.FRONTEND,
      order: 10,
      yearsOfExperience: 5
    },
    {
      id: 'react',
      name: 'React',
      level: SkillLevel.INTERMEDIATE,
      category: SkillCategory.FRONTEND,
      order: 11,
      yearsOfExperience: 1
    },
    {
      id: 'python',
      name: 'Python',
      level: SkillLevel.INTERMEDIATE,
      category: SkillCategory.LANGUAGES,
      order: 12,
      yearsOfExperience: 2
    },
    {
      id: 'git',
      name: 'Git',
      level: SkillLevel.ADVANCED,
      category: SkillCategory.TOOLS,
      order: 13,
      yearsOfExperience: 4
    }
  ]
};
