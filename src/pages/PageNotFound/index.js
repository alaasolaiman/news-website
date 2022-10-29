import { Link } from "react-router-dom";
import './index.css';

const PageNotFound = () => {
    return (
        <div className = "container-404">
            <h1 className="main-title">404: Page Not Found</h1>
            <h4 className="sub-title">The page you are looking for might have been removed, changed, or is temporarily unavailable</h4>
            <Link style={{marginTop: "16px"}} to="/"><button className="home-btn">GO TO HOME PAGE</button></Link>
        </div>
    );
};

export default PageNotFound;