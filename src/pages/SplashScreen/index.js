import "./index.css";
import { Spinner } from "react-bootstrap";

const SplashScreen = () => {
  return (
    <>
      <div className="headings">
        <h2>News Website</h2>
        <h3>
          Please wait while loading your favourite news and articles &#9786;
        </h3>
      </div>

      <div className="spinners">
        <Spinner className="spinners" animation="grow" variant="secondary" />
        <Spinner className="spinners" animation="grow" variant="secondary" />
        <Spinner className="spinners" animation="grow" variant="secondary" />
        <Spinner className="spinners" animation="grow" variant="secondary" />
        <Spinner className="spinners" animation="grow" variant="secondary" />
      </div>
    </>
  );
};

export default SplashScreen;
