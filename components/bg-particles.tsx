"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "./ui/particles"

export function BgParticles() {
    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState("#ffffff")

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
    }, [resolvedTheme])

    return (
            <Particles
                className="fixed inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
    )
}
