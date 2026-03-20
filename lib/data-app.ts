import { CVProps } from "@/lib/types";
import { Apple, Github, Instagram, Facebook, Linkedin, Mail, School, University, GraduationCap } from "lucide-react";
import { TypescriptJSIcon, ExpressJSIcon, ReactIcon, NextJSIcon, NestJSIcon, LaravelIcon, DockerIcon, MySQLIcon, PostgresIcon, PythonIcon, DjangoIcon } from "../components/app-icons";
export const CVDATA: CVProps = {
    name: String(process.env.NEXT_PUBLIC_APP_NAME),
    icon: '😃',
    role: 'Lorem ipsum dolor sit amet...',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    cvdata: [
        {
            title: 'edu',
            data: [
                {
                    name: "MIT",
                    role: "BSc in Computer Science",
                    icon: School,
                    date: "2018"
                },
                {
                    name: "MIT",
                    role: "Msc in Computer Science",
                    icon: University,
                    date: "2022"
                },
                {
                    name: "MIT",
                    role: "Phd in Computer Science",
                    icon: GraduationCap,
                    date: "2022 - Today"
                },
            ]
        },
        {
            title: 'work',
            data: [
                {
                    name: "Apple",
                    icon: Apple,
                    role: "Software Engineer",
                    date: "Jenuary 2020 - April 2020"
                },
                {
                    name: "Github",
                    icon: Github,
                    role: "Software Engineer",
                    date: "Jenuary 2019 - April 2019"
                },
                {
                    name: "Instagram",
                    icon: Instagram,
                    role: "Software Engineer",
                    date: "January 2018 - April 2018"
                },
                {
                    name: "Facebook",
                    icon: Facebook,
                    role: "Software Engineer",
                    date: "May 2017 - August 2017"
                },
            ]
        },
        {
            title: 'skills',
            data: [
                {
                    name: "Typescript",
                    icon: TypescriptJSIcon,
                },
                {
                    name: "ExpressJS",
                    icon: ExpressJSIcon,
                },
                {
                    name: "React",
                    icon: ReactIcon,
                },

                {
                    name: "NextJS",
                    icon: NextJSIcon,
                },
                {
                    name: "NestJS",
                    icon: NestJSIcon,
                },
                {
                    name: "Laravel",
                    icon: LaravelIcon,
                },
                {
                    name: "Docker",
                    icon: DockerIcon,
                },
                {
                    name: "MySQL",
                    icon: MySQLIcon,
                },
                {
                    name: "Postgres",
                    icon: PostgresIcon,
                },
                {
                    name: "Python",
                    icon: PythonIcon,
                },
                {
                    name: "Django",
                    icon: DjangoIcon,
                },
            ]
        },
        {
            title: 'projects',
            data: [
                {
                    name: "title",
                    stack: [
                        {
                            name: 'nextjs'
                        },
                    ],
                    description: ["Lorem ipsum dolor sit amet...", "consectetur adipisicing elit..."],
                    source: [
                        {
                            name: 'GitHub',
                            url: "#",
                            icon: Github,
                        }
                    ],
                    icon: Github,
                    url: '#',
                    date: "2026"
                },
                {
                    name: "title",
                    stack: [
                        {
                            name: 'nextjs'
                        },
                    ],
                    description: ["Lorem ipsum dolor sit amet...", "consectetur adipisicing elit..."],
                    source: [
                        {
                            name: 'GitHub',
                            url: "#",
                            icon: Github,
                        }
                    ],
                    icon: Github,
                    url: '#',
                    date: "2026"
                },
            ]
        }
    ],
    socials: [
        {
            name: 'GitHub',
            icon: Github,
            url: '#'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: '#'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: '#'
        },
        {
            name: 'Send Email',
            icon: Mail,
            url: '#'
        },
    ]
}