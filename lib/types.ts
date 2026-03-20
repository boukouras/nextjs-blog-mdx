import { LucideIcon } from "lucide-react";
export interface BlogProps {
    slug: string;
    title: string;
    created_at: Date
}

export type PostProps = {
  slug: string
  title: string
  author: string
  author_link: string
  link?: string
  date?: string
  content: string
}

export type CVProps = {
  name: string;
  icon: string;
  role: string;
  about: string;
  cvdata: CVDataProps[];
  socials: SourceProps[];
}

export type CVDataProps = {
  title: 'skills' | 'work' | 'edu' | 'projects';
  text?: string;
  data: CVEtcProps[];
}

export type CVEtcProps = {
  name: string;
  role?: string;
  date?: string;
  icon: LucideIcon;
  url?: string;
  stack?: SourceProps[];
  description?: string[];
  source?: SourceProps[];
}

export type SourceProps = {
  name: string;
  url?: string;
  icon?: LucideIcon;
}