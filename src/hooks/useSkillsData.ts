import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/types/common";
import { useMemo } from "react";

export function useSkillsData() {
  const skills = skillsData.skills;

  const getByCategory = (category: SkillCategory) =>
    skills.filter((s) => s.category === category);

  const getSorted = (by: "level" | "order" | "name" = "order") => {
    const sorted = [...skills];
    if (by === "level") return sorted.sort((a, b) => b.level - a.level);
    if (by === "name")
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted.sort((a, b) => a.order - b.order);
  };

  const grouped = useMemo(
    () =>
      Object.values(SkillCategory).reduce((acc, cat) => {
        acc[cat] = getByCategory(cat);
        return acc;
      }, {} as Record<SkillCategory, typeof skills>),
    []
  );

  return {
    skills: getSorted(),
    getByCategory,
    getSorted,
    grouped,
    stats: {
      total: skills.length,
      avgLevel: skills.reduce((sum, s) => sum + s.level, 0) / skills.length,
    },
  };
}
