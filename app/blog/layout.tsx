import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: `Blog | ${process.env.NEXT_PUBLIC_APP_NAME}`,
        template: `%s | Blog | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    },
    description: '...',
}
export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section>{children}</section>
    )
}
