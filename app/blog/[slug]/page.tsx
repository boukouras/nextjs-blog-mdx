import { notFound } from "next/navigation"
import { getPost } from "@/lib/posts"
import { ShowPost } from "@/components/show-post"
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const post = await getPost(slug)
    return { title: post.title };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    // notFound()
    const { slug } = await params
    console.log(slug)
    const post = await getPost(slug)
    if (!post) {
        notFound()
    }
    return (
        <>
            <ShowPost post={post} />
        </>
    )
}
