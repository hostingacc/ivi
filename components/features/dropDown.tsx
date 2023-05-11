import { Box, Fade } from "@mui/material";
import MyButton from "../buttons/myButton";
import { moviesStore } from "@/store/moviesStore";
import { useEffect, useRef } from "react";

interface DropDownProps{
  content:any;
  type?:any;
  setIsOpen:any;
  height?:string;
  padding?:string | number;
  margin?:string | number;
  borderRadius?:string | number;
  backgroundColor?: string;
  onMouseLeave?:boolean;
  isOpen?:boolean;
}

const DropDown = ({ 
  content,
  setIsOpen,
  height = 'auto',
  padding = '1rem',
  margin = '0.3rem',
  borderRadius = 0,
  backgroundColor = '#312b45',
  onMouseLeave = false,
  isOpen

}:DropDownProps) => {
    
    const dropDownRef = useRef<HTMLDivElement>(null);

   

    const close:any = () => {
        setIsOpen(false)
    }

      useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target) &&
                event.target.id !== 'genresButton' &&
                event.target.id !== 'countriesButton'
              ) {
                close();
              }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropDownRef]);
    
    



    return (
      <Fade in={isOpen}>

        <Box
        onMouseLeave={onMouseLeave ? close : null}
        ref={dropDownRef}
          sx={{
            borderRadius,
            margin,
            padding,
            backgroundColor,
            width:'103%',
            position:'relative',
            left:'50%',
            transform: 'translateX(-50%)',
            height,


          }}
        >
          {content}
        </Box>

      </Fade>

      );
};



export default DropDown;