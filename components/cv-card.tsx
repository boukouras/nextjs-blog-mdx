import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { CVDataProps } from "@/lib/types"
import Link from "next/link"
export function CVCard({ data }: { data: CVDataProps }) {
    return (
        <section>
            <div className="flex flex-col gap-6 pt-8">
                <div className="">
                    <h2 className="text-xl font-medium capitalize">{data.title}</h2>
                </div>
                {data.title === "skills" ? (
                    <div className="flex flex-wrap gap-5">
                        {data.data.map((item, index) => (
                            <Badge key={index} className="p-3" variant="secondary">
                                <item.icon /> {item.name}
                            </Badge>
                        ))}
                    </div>
                ) : data.title === "projects" ? (
                    <div className="flex flex-col gap-10">
                        {data.data.map((item, index) => (
                            <div key={index}>
                                <Link href={item.url ? item.url : '#'} target="_blank" className="hover:opacity-[0.8] transition">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-5">
                                            <Avatar className="size-10">
                                                <AvatarImage src="https://github.com/evilrabbitfsdfsd.png" />
                                                <AvatarFallback>
                                                    <item.icon />
                                                </AvatarFallback>
                                            </Avatar>

                                            <div className="flex flex-col">
                                                <div>{item.name}</div>

                                                <div className="flex flex-col text-muted-foreground">
                                                    <div className="flex flex-col items-center">
                                                        {item.description?.map((text, index) => (
                                                            <span key={index} className="flex items-center">
                                                                {text}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-3 items-center">
                                                        {item.stack?.map((stack, index) => (
                                                            <Badge key={index} className="p-3" variant="secondary">
                                                                {stack.icon && <stack.icon />} {stack.name}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-muted-foreground">{item.date}</div>
                                    </div>
                                </Link>
                                <div className="flex gap-3">
                                    {item.source?.map((item, index) => (
                                        <Link key={index} href={item.url ? item.url : '#'} target="_blank">
                                            <Badge className="p-3 mt-2 hover:bg-muted-foreground" variant="secondary">
                                                {item.icon && <item.icon />} View Source
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-10">
                        {data.text ? data.text : (

                            data.data.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <Avatar className="size-10">
                                            <AvatarImage src="https://github.com/evilrabbitfsdfsd.png" />
                                            <AvatarFallback>
                                                <item.icon />
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="flex flex-col">
                                            <div>{item.name}</div>
                                            <div className="text-muted-foreground">{item.role}</div>
                                        </div>
                                    </div>

                                    <div className="text-muted-foreground">{item.date}</div>
                                </div>
                            ))

                        )}


                    </div>
                )}
            </div>
        </section>
    )
}