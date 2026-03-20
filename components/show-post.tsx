import { PostProps } from "@/lib/types";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Separator } from "./ui/separator";
export function ShowPost({ post }: { post: PostProps }) {
    return (
        <div className="pt-15">
            <Link href="/blog" className="flex items-center gap-1 border w-16 rounded"><ChevronLeft className="size-4" /> Back</Link>
            <article style={{
                fontSize: "16px"
            }}>
                <div className="pb-5">
                    <h1 className="text-4xl">{post.title}</h1>
                    <p>created_by: <Link href={post.author_link} className="underline">{post.author}</Link></p>
                    <p>created_at: {post.date}</p>
                </div>
                <div className="pb-5">
                    <Separator />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </div>
    )
}