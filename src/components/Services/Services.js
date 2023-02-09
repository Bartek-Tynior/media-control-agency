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

    const element = container.current;

    if(element){
      const targetsEndTrigger = gsap.utils.toArray(element.querySelectorAll(".panel"));
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetsEndTrigger,
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=' + (targetsEndTrigger.length * (element.clientHeight/3))        
        }
      });
      targetsEndTrigger.forEach((image, index) => {
        tl.fromTo(image, { y: 0, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5, delay: index === 0 ? 0 : -.4 });
        if(index ==! targetsEndTrigger.length - 1){
          tl.to(image, { duration: .3, autoAlpha: 0 });
        }
      })
    
      console.log(tl.scrollTrigger) 
    }

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