import { Navbar } from "./Navbar";

export function NavbarLayout({children}: {children: React.ReactNode}) {
    return <div className={"flex flex-col h-screen"}>
        <div className={"flex-none"}>
            <Navbar/>
        </div>
        <div className={"flex-1 overflow-auto"}>
            {children}
        </div>
    </div>
}