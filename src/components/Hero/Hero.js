import content from "content";
import Image from "next/image";

const Hero = () => {
    return (
    <section className="text-white h-screen items-center w-full">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between h-full relative">
            <div className="flex flex-col justify-center p-6 text-center lg:text-left w-1/2">
                <h1 className="text-6xl font-bold pb-5">{content.hero.title}</h1>
                <p>{content.hero.description}</p>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
            <Image src="/MacBook.png" width="800" height="800" alt="macbook" />
            </div>
        </div>
    </section>
    )
}

export default Hero;