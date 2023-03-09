import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

  const services = [
    {
      i: 1,
      title: 'Architecto aliquam', 
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
    },
    {
      i: 2,
      title: 'Ceritatis placeat', 
      description: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
    },
    {
      i: 3,
      title: 'Vitae voluptates', 
      description: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
    }
  ];

  const container = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      gsap.utils.toArray(".panel").forEach((panel, i) => {

        const tl = gsap.timeline()
        tl.from(panel, {opacity: 0, duration: 1000});
        tl.to(panel, {opacity: 1, duration: 1000});
        tl.to(panel, {opacity: 0, duration: 1000});

        ScrollTrigger.create({
          animation: tl,
          trigger: panel,
          start: "top top", 
          pin: true, 
          pinSpacing: false,
          scrub: true
        });
      });
      


    })

    return () => ctx.revert();

  });

  return (
    <section ref={container} className="text-white items-center overflow-hidden">
        {
          services.map(({title, description, i}) => (
            <div className={"panel flex flex-col h-screen items-center justify-center"} id={"card"+i} key={title}>
              <div className="flex justify-center">
              <div className="flex flex-col justify-center p-6 text-center lg:text-left w-1/2">
                <h1 className="text-6xl font-bold pb-5">{title}</h1>
                <p>{description}</p>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
            <Image src="/MacBook.png" width="800" height="800" alt="macbook" />
            </div>
              </div>
            </div>
          ))
        }
    </section>
  )
}

export default Services;