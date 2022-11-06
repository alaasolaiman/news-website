import "./index.css";
// import { Spinner } from "react-bootstrap";

const SplashScreen = () => {
  return (
    <div className="splash-screen-container">
      <div className="headings">
        <h2>News Website</h2>
        <h3>
          Please wait while loading your favourite news and articles &#9786;
        </h3>
      </div>

      <div className="circle-group">
        <div className="circle_color3"></div>
        <div className="circle_color1"></div>
        <div className="circle_color2"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
