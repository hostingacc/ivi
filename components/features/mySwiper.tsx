import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import { useState } from "react";

interface SliderProps {
  spaceBetween: number;
  slidesPerView: number;
  nextEl: string;
  prevEl: string;
  children: React.ReactNode;
  isCustomButtons?: true;
  autoplay?: boolean;
}

const MySwiper = ({
  spaceBetween,
  slidesPerView,
  nextEl,
  prevEl,
  children,
  isCustomButtons,
  autoplay = false,
}: SliderProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      {isCustomButtons ? (
        <>
          <Box
            className={`swiper-next ${nextEl}`}
            style={{ visibility: isEnd ? "hidden" : "visible" }}
          >
            <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: "3rem" }} />
          </Box>

          <Box
            className={`swiper-prev ${prevEl}`}
            style={{ visibility: isBeginning ? "hidden" : "visible" }}
          >
            <ArrowBackIosIcon sx={{ color: "#fff", fontSize: "3rem" }} />
          </Box>
        </>
      ) : null}

      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        autoplay
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView !== 1 ? slidesPerView - 1 : 1}
        speed={1000}
        navigation={{
          nextEl: `.${nextEl}`,
          prevEl: `.${prevEl}`,
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={() => {
          setIsBeginning(false);
          setIsEnd(false);
        }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default MySwiper;
