import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

  const services = [
    {
      title: 'Architecto aliquam', 
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
    },
    {
      title: 'Ceritatis placeat', 
      description: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
    },
    {
      title: 'Vitae voluptates', 
      description: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
    }
  ];

  const container = useRef(null);

  useEffect(() => {

    const element = container.current;

    gsap.utils.toArray(element.querySelector(".panel")).forEach((panel, i) => {

      let tween = gsap.to(panel, {

        trigger: element
      });
  

      var tl = gsap.timeline({
      scrollTrigger: {
        animation: tween,
        trigger: element,
        start: () => "top -" + (window.innerHeight*(i+0.2)),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,     
        markers: true,
      }
      
    })

    tl.to(panel, {height: 0})
    
  });  

  }, []);

  return (
    <section ref={container} className="text-white items-center overflow-hidden">
        {
          services.map(({title, description}) => (
            <div className={"panel flex flex-col h-screen items-center justify-center"} key={title}>
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