import Link from "next/link";
import CallToActionBtn from "../Buttons/CallToActionBtn";

const Navbar = () => {
  //   const [isOpen, setOpen] = useState(false);
 
  // const toggleNavbar = () => {
  //   setOpen(!isOpen);
  // };

  const navLinks = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Testimonials",
      link: "/#",
    },
    {
      name: "Contact",
      link: "/#",
    },
  ];

  return (
    <nav className="navbar_container w-full fixed flex justify-between px-6 py-4">
        <div className="navbar_logo flex">
          <h1 className="text-2xl font-bold tracking-tight leading-5 text-white">
            <span>
            Media
          </span>
            <br/>
          <span>
            Control
          </span>
            <br/>
          <span>
            Agency.
          </span>
          </h1>
        </div>

        <div className="navbar_middle backdrop-blur-md bg-white/30 rounded-xl flex text-white">
          <ul className="px-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.link} passHref>
                {link.name}
              </Link>
            </li>
          );
        })}
        </ul>
        </div>

        <div className="navbar_action_button flex">
          <CallToActionBtn title={"Let's get started"}/>
        </div>
        
    </nav>
  )

}

export default Navbar;