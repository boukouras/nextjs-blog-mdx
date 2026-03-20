import Link from "next/link";
import { Home } from "lucide-react";
import Head from "next/head";

export async function generateMetadata() {
    return { title: '404' };
}

export default function GlobalNotFound() {
    return (
        <>
            <Head><title>404</title></Head>
            <div className="min-h-[90vh] content-center">
                <div className="flex items-center gap-1 pb-5">
                    <h1 className="text-xl">Error 404</h1><span className="text-muted-foreground"> | Page not found</span>
                </div>
                <Link href="/" className="flex items-center gap-3 border rounded p-2 hover:bg-muted"><Home />Go to homepage</Link>
            </div>
        </>
    );
}
