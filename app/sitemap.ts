import { getPosts } from "@/lib/posts"


export default async function sitemap() {
    let blogs = getPosts().map((post) => ({
        url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/blog/${post.slug}`,
        lastModified: post.date,
    }))

    let routes = ['', '/blog'].map((route) => ({
        url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}
