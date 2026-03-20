export default function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="max-w-xl px-5 pb-30">{children}</section>
    )
}
