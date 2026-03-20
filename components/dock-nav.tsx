"use client"

import React from "react"
import Link from "next/link"
import { HomeIcon, MailIcon, PencilIcon, Linkedin, Instagram, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CVDATA } from "../lib/data-app"
import { Dock, DockIcon } from "./ui/dock"
import { useTheme } from "next-themes"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

export type IconProps = React.HTMLAttributes<SVGElement>

const Icons = {
    email: (props: IconProps) => <MailIcon {...props} />,
    linkedin: (props: IconProps) => <Linkedin {...props} />,
    instagram: (props: IconProps) => <Instagram {...props} />,
    github: (props: IconProps) => <Github {...props} />,
}

export function DockNav() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])


    const DATA = {
        navbar: [
            { href: "/", icon: HomeIcon, label: "Home" },
            { href: "/blog", icon: PencilIcon, label: "Blog" },
        ],
        tools: [
            {
                tool: <AnimatedThemeToggler className="size-12 rounded-full cursor-pointer" />,
                label: theme === 'dark' ? "Light" : "Dark"
            }
        ]
    }

    if (!mounted) return null

    return (
        <div className="fixed bottom-5 flex flex-col items-center justify-center w-full z-50">
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {CVDATA.socials.map((social, index) => (
                        <DockIcon key={index}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        href={social.url ? social.url : '#'}
                                        target={'_blank'}
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        {social.icon && <social.icon className="size-4" />}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{social.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />

                    {DATA.tools.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger render={<div />}>
                                    {item.tool}
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                </Dock>
            </TooltipProvider>
        </div>
    )
}
