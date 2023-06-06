import MyText from "../../content/myText";
import { Slider } from "@mui/material";

interface SliderComponentProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
  onMouseUp: () => void;
}

const MySlider = ({
  label,
  min,
  max,
  step,
  value,
  onChange,
  onMouseUp,
}: SliderComponentProps) => {
  return (
    <>
      <MyText text={label} color={"#fff"} size="16px" />
      <Slider
        onMouseUp={onMouseUp}
        aria-label="Small steps"
        step={step}
        marks
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        color="secondary"
      />
    </>
  );
};

export default MySlider;
