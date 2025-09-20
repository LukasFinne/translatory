import Link from "next/link";

export default function NotFound(){
    return(
        <div className="hero bg-base-200 h-full ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <Link className="btn btn-primary" href={"/"}>Go back home</Link>
                </div>
            </div>
        </div>
    )
}