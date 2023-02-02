import content from "content";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="text-white">
        <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
                <h1 className="text-6xl font-bold">{content.hero.title}</h1>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
            <Image src="/MacBook.png" width="800" height="800" alt="macbook" />
            </div>
        </div>
    </section>
    )
}

export default Hero;