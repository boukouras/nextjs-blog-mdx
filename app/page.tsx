import { Hero } from "@/components/cv/hero"
import { About } from "@/components/cv/about"
import { CVDATA } from "@/lib/data-app"
import { CVCard } from "@/components/cv-card"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "This is my personal site"
};


export default function Page() {
  return (
    <>
    <div className="flex min-h-svh max-w-xl p-6 pb-30">
      <div className="flex flex-col gap-4 text-sm leading-loose">
        <Hero name={CVDATA.name} role={CVDATA.role} icon={CVDATA.icon} />
        <About about={CVDATA.about} />
        {CVDATA.cvdata.map((item, index) => (
          <CVCard key={index} data={item} />
        ))}
      </div>
    </div>
    </>
  )
}


