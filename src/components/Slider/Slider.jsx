import ReactSlider from "react-slider";
import './Slider.css'

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    />
  );
};
export default Slider;