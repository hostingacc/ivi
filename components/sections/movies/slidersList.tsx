import { styled } from "@mui/material/styles";
import MySlider from "./mySlider";
import { Box } from "@mui/material";
import { useSlider } from "@/hooks/useSlider";
import { rootStore } from "@/store/RootStore";

const StyledBox = styled(Box)({
  width: "16rem",
  "@media (max-width:876px)": {
    width: "100%",
  },
});

const SlidersList = () => {
  const {
    value: value1,
    handleSliderChange: handleSliderChange1,
    sendRequest: sendRequest1,
  } = useSlider("minRating", rootStore);
  const {
    value: value2,
    handleSliderChange: handleSliderChange2,
    sendRequest: sendRequest2,
  } = useSlider("numRatings", rootStore);

  return (
    <>
      <StyledBox>
        <MySlider
          label={"рейтинг"}
          min={0}
          max={10}
          step={0.1}
          value={value1}
          onChange={handleSliderChange1}
          onMouseUp={sendRequest1}
        />
      </StyledBox>
      <StyledBox>
        <MySlider
          label={"количество голосов"}
          min={0}
          max={4000000}
          step={10000}
          value={value2}
          onChange={handleSliderChange2}
          onMouseUp={sendRequest2}
        />
      </StyledBox>
    </>
  );
};

export default SlidersList;
