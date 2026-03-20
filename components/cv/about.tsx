export function About({about}:{about:string}) {
    return (
        <section>
            <div className="pt-8">
                <h2 className="text-xl font-medium">About</h2>
                <p className="text-muted-foreground">
                    {about}
                </p>
            </div>
        </section>
    )
}