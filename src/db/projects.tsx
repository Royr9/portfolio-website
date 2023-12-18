
import { ReactElement } from "react";
import Logo from "../components/Logo";

export type ProjectsObjectType = {
  name?: string;
  logo: ReactElement | React.ReactNode ;
  description: string;
  image: string;
  imageSrc?: string ;
  themeBackground: string;
  techUsed: string[]; // Assuming techUsed is an array of strings
  websiteLink?: string;
  githubLink?: string;
  key?:string;
  isComingSoon?: boolean;
};


export const projects: ProjectsObjectType[] = [
  {
    name: "Aguamar-store",
    logo: <h2 className="app-logo">Aguamaril-Store Demo</h2>, 
    description: "A demo codded version of aguamaril.com created with React router",
    imageSrc: "/media/images/Aguamar-Swimsuits.png",
    image: "",
    themeBackground: "#5E7699", // Example background color
    techUsed: ["React", "react-router"], // Example tech useded
    websiteLink: "https://aguamaril.onrender.com/",
    githubLink: "https://github.com/Royr9/Aguamar-store"
  },
  {
    name: "GetYourSize",
    logo: <Logo customAppSize="normal"/>, 
    description: "Help customers find their sizing easily. Can be embedded into any website",
    imageSrc: "/media/images/GetYourSize.png",
    image: "",
    themeBackground: "#5E7699",
    techUsed: ["React", "TypeScript"],
    websiteLink: "https://getyoursize.onrender.com/",
    githubLink: "https://github.com/Royr9/GetYourSize"
  },
  {
    name: "aguamaril.com",
    logo: <img  className="app-logo w-100 h-100 " style={{objectFit: "contain"}} src="/media/images/Aguamar-logo.jpg" alt="" />, 
    description: "Swimsuits E-commerce website. Created and managed by me using wix.  ",
    image: "",
    imageSrc: "/media/images/Aguamar.png",
    themeBackground: "#5E7699", 
    techUsed: ["Wix","Web-Design"], 
    websiteLink: "https://www.aguamaril.com/",
    
  },
  {
    name: "My Tummy",
    logo: <img   />, 
    imageSrc: "/media/images/MyTummy.png",
    description: "Nutrition tracking with smart health analysis that fit to your belly",
    image: "url('/media/images/MyTummy.png')",
    themeBackground: "#5E7699", 
    techUsed: ["Next.js","Node.js", "Postgresql"], 
    isComingSoon: true
  },
  {
    name: "My Recipe Book",
    logo: <p></p>, 
    imageSrc: "/media/images/MyRecipeBook.png",
    description: "Create your own custom recipe books with dynamic filters and modification and share it with your friends!",
    image: "url('/media/images/MyRecipeBook.png')",
    themeBackground: "#5E7699", 
    techUsed: ["Next.js","Node.js", "Postgresql"], 
    isComingSoon: true
  }
];




