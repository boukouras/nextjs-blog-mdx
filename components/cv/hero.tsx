export function Hero({name, icon, role}:{name:string, icon:string, role:string}) {
    return (
        <section>
            <div className="flex flex-col md:flex-row md:items-center">
                <div className="order-2 md:order-1">
                    <h1 className="text-2xl font-medium">
                        Hello World from {name}
                    </h1>
                    <span className="text-muted-foreground">{role}</span>
                </div>
                <div className="order-1 md:order-2 p-5">
                    <span className="text-6xl rounded-full p-1">{icon}</span>
                </div>
            </div>
        </section>
    )
}