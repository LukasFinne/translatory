import Link from "next/link";

export function Welcome(){
   return(
       <div className="hero bg-base-200 h-full">
           <div className="hero-content text-center ">
               <div className="max-w-md">
                   <h1 className="text-5xl font-bold">Hello there</h1>
                   <p className="py-6">
                      This is my translator project to get Text translate from Photos then export to vocabulary train app like Anki
                   </p>
                   <Link className="btn btn-primary" href={"/translate"}>Get Started</Link>
               </div>
           </div>
       </div>
   )
}