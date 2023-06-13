import { Box, Fade } from "@mui/material";

import { useEffect, useRef } from "react";
import { dropdownStore } from "@/store/DropdownStore";
import { observer } from "mobx-react-lite";

interface DropDownProps {
  content: React.ReactElement;
  type?: string;
  left?:string;
  setIsOpen: any;
  height?: string;
  padding?: string | number;
  margin?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  onMouseLeave?: boolean;
  isOpen?: boolean;
  name: string;
  shouldDisplayAtMobile?: boolean;
  width?: string;
}

const DropDown = observer(
  ({
    name,
    content,
    left="50%",
    height = "auto",
    padding = "5rem 1rem",
    margin = 0,
    borderRadius = "1rem",
    backgroundColor = "#1f1b2e",
    onMouseLeave = false,
    shouldDisplayAtMobile = true,
    width = "auto",
  }: DropDownProps) => {
    const dropDownRef = useRef<HTMLDivElement>(null);

    const close: any = () => {
      dropdownStore.setShowDropdown(name, false);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropDownRef.current &&
          !dropDownRef.current.contains(event.target) &&
          !event.target.closest("#Жанры") &&
          !event.target.closest("#Страны") &&
          !event.target.closest("#sortButton")
        ) {
          close();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropDownRef]);

    return (
      <Fade in={dropdownStore.dropdowns[name]}>
        <Box
          onMouseLeave={onMouseLeave ? close : null}
          ref={dropDownRef}
          sx={{
            borderRadius,
            margin,
            padding,
            backgroundColor,
            width,
            position: "absolute",
            left,
            transform: "translateX(-50%)",
            height,
            zIndex: "100",
            boxShadow: "0 20px 96px #121011",
            "@media (max-width:1200px)": {
              display: shouldDisplayAtMobile ? "block" : "none",
              left:'0',
              transform: "unset",
            },
            "@media (max-width:599px)": {
              width: "100%",
              margin: "unset",
            },
          }}
        >
          {content}
        </Box>
      </Fade>
    );
  }
);

export default DropDown;
