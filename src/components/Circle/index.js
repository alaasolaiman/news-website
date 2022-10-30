import "./index.css";

const Circle = ({ size, color, top, left }) => {
  return (
    <div
      className="circle"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top: top,
        left: left,
      }}
    ></div>
  );
};

export default Circle;
