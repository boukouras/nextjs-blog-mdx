
import { NumberTicker } from "@/components/ui/number-ticker"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getPosts } from "@/lib/posts"
export async function generateMetadata() {
    return { title: 'Blog' };
}


export default function BlogPage() {
    const posts = getPosts();
    return (
        <div className="flex min-h-svh p-6 px-10 max-w-xl pb-30">
            <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
                <div className="py-5">
                    <div className="flex items-center gap-5">
                        <h2 className="text-xl font-medium">Blog</h2>
                        <Badge variant={'secondary'} className="p-3 rounded">
                            <NumberTicker
                                value={posts.length}
                                className="tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                            />
                            Posts
                        </Badge>
                    </div>
                    <span className="text-muted-foreground">This is my thoughts about Computer Science, etc...</span>
                </div>
                <div className="py-10 flex flex-col">
                    <ol className="list-decimal text-sm">
                        {posts.map((item) => (
                            <Link key={item.slug} href={item.link ? item.link : `/blog/${item.slug}`} className="flex flex-col">
                                <li className="py-3">
                                    <div className="flex flex-col">
                                        <span className="text-lg flex">{item.title}{item.link && <ExternalLink className="ml-2 size-3"/>}</span>
                                        <span className="text-muted-foreground">
                                            {item.date}
                                        </span>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}