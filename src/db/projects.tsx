
import { ReactElement } from "react";
import Logo from "../components/Logo";

export type ProjectsObjectType = {
  name?: string;
  logo: ReactElement | React.ReactNode;
  description: string;
  image: string;
  themeBackground: string;
  techUsed: string[]; // Assuming techUsed is an array of strings
};


export const projects: ProjectsObjectType[] = [
  {
    name: "GetYourSize",
    logo: <Logo customAppSize="normal"/>, 
    description: "Help customers find their sizing easily. Can be embedded into any website",
    image: "url('/media/images/GetYourSize-op-5.png')",
    themeBackground: "#5E7699",
    techUsed: ["React", "TypeScript"] // Example tech used
  },
  {
    name: "Aguamar-store",
    logo: <img src="" alt="" />, 
    description: "Your project description",
    image: "path/to/image",
    themeBackground: "#ffffff", // Example background color
    techUsed: ["React", "TypeScript"], // Example tech used
  }

];




