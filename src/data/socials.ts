import { Github, Linkedin, Mail } from "lucide-react";
import { FC } from "react";

export interface SocialLink {
  name: string;
  url: string;
  icon: FC<any>;
  username?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/pepefcardoso",
    icon: Github,
    username: "pepefcardoso",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pepefcardoso",
    icon: Linkedin,
    username: "pepefcardoso",
  },
];

export const contactLinks: SocialLink[] = [
  ...socialLinks,
  {
    name: "Email",
    url: "mailto:pppfcardoso@gmail.com",
    icon: Mail,
    username: "pppfcardoso@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+5548991155026",
    icon: Mail,
    username: "(48) 99115-5026",
  },
];
