// imports:


//sass/css

//modules

//components

import Button from "@mui/material/Button"
// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { SxProps, Theme } from "@mui/system";


//types:

type BtnWithArrowType ={
children: React.ReactNode;
className?: string;
size?: "large" | "medium" | "small" ;
customSize?: string;
color?: string;
hoverColor?: string;
textColor?:string;
hoverTextColor?: string;
iconColor?: string;
hoverIconColor?: string; 
arrowColor?: string;
hoverArrowColor?: string;
sx?: SxProps<Theme>;
// arrowDirection?: "right" | "left"
 } 


       

// Define the functional component
const BtnWithArrow = ({...props}: BtnWithArrowType) => {

    
  return (
    <Button
     endIcon={<ArrowCircleRightRoundedIcon />}
      variant="contained"
      sx={{ 
        whiteSpace: "nowrap",
        background: props.color , 
        color: props.textColor,
        fontSize: props.customSize,
         ":hover":{
        background: props.hoverColor,
        color: props.hoverTextColor,
         "svg":{color:props.hoverIconColor},
         "&.BtnWithArrow :first-child:before":{
          backgroundColor: props.hoverArrowColor
         }
        },
        "&.BtnWithArrow :first-child:before" :{ 
            content:"''",
            backgroundColor: props.arrowColor , 
            height: "50%", 
            width:"50%",
            position:"absolute",
            left:"24%",
            right: 0,
            bottom: 0,
            top: "24%",
      
        },
        "svg": {
          color: props.iconColor,
        },
        ...props.sx
          }}
      size={props.size ? props.size : "large"}
      className={`BtnWithArrow ${props.className}`}>

    {props.children}
    </Button>
  );
  }
// Export the component for use in other files
export default BtnWithArrow;