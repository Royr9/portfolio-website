
import { ReactElement } from "react";
import Logo from "../components/Logo";

export type ProjectsObjectType = {
  name?: string;
  logo: ReactElement | React.ReactNode ;
  description: string;
  image: string;
  themeBackground: string;
  techUsed: string[]; // Assuming techUsed is an array of strings
  websiteLink?: string;
  githubLink?: string;
  key?:string;
};


export const projects: ProjectsObjectType[] = [
  {
    name: "Aguamar-store",
    logo: <h4 className="app-logo">Aguamar-store-demo</h4>, 
    description: "A demo codded version of aguamaril.com created with React router",
    image: "url('/media/images/aguamar-store.png')",
    themeBackground: "#5E7699", // Example background color
    techUsed: ["React", "react-router"], // Example tech useded
    websiteLink: "https://aguamaril.onrender.com/",
    githubLink: "https://github.com/Royr9/Aguamar-store"
  },
  {
    name: "GetYourSize",
    logo: <Logo customAppSize="normal"/>, 
    description: "Help customers find their sizing easily. Can be embedded into any website",
    image: "url('/media/images/GetYourSize-op-5.png')",
    themeBackground: "#5E7699",
    techUsed: ["React", "TypeScript"],
    websiteLink: "https://getyoursize.onrender.com/",
    githubLink: "https://github.com/Royr9/GetYourSize"
  },
  {
    name: "aguamaril.com",
    logo: <img  className="app-logo" style={{height: "200px", opacity: "0.8"}} src="/media/images/Aguamar-logo.jpg" alt="" />, 
    description: "Swimsuits E-commerce website. Created and managed by me using wix.  ",
    image: "url('/media/images/aguamaril.com.png')",
    themeBackground: "#5E7699", 
    techUsed: ["Wix","Web-Design"], 
    websiteLink: "https://www.aguamaril.com/",
    
  },
  {
    name: "My Tummy",
    logo: <h3 style={{color: "white"}} className="app-logo">My Tummy</h3>, 
    description: "Nutrition tracking with smart health analysis that fit to your belly",
    image: "url('/media/images/coming-soon.png')",
    themeBackground: "#5E7699", 
    techUsed: ["Next.js","Node.js", "Postgresql"], 
    
    
  }


];




