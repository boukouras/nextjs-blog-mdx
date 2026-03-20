import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { DockNav } from "@/components/dock-nav";
import { BgParticles } from "@/components/bg-particles"
import { BlurFade } from "@/components/ui/blur-fade"

export async function generateMetadata() {
  return await sharedMetaData();
}
async function sharedMetaData() {

  return {
    title: {
      default:
        process.env.NEXT_PUBLIC_APP_NAME,
      template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`
    },
    description:
      "This is my personal site",
    keywords: ["Next.js", "basileus", "boukouras", "vasileios", "bill"],
    authors: [{ name: "Vasileios Boukouras" }],
    robots: {
      index: true,
      follow: true
    }
  };
}


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <BgParticles />

          <main className="flex justify-center">
            <BlurFade direction={'down'} inView={true} delay={0.5}>
              {children}
            </BlurFade>
          </main>
          <DockNav />
        </ThemeProvider>
      </body>
    </html >
  )
}
