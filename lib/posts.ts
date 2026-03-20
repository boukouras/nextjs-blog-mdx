import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { type PostProps } from "./types"
const postsDirectory = path.join(process.cwd(), "markdown")

export function getPosts() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        const slug = fileName.replace(".mdx", "")

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        const { data, content } = matter(fileContents)

        return {
            slug,
            title: data.title,
            date: data.date,
            link: data.link,
            ...data,
            content
        }
    })
}

export async function getPost(slug: string): Promise<PostProps> {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const processed = await remark().use(html).process(content)
    console.log(data.title, processed.toString())
    generateMetadata(data.title)
    return {
        slug,
        title: data.title,
        author: data.author,
        author_link: data.author_link,
        link: data.link,
        date: data.date,
        content: processed.toString()
    }
}

export async function generateMetadata({title, content}:{title:string, content:string}) {
    return {
        title: title,
        description: content,
    }
}