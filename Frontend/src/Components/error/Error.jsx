import { Link, useRouteError } from "react-router-dom";
import "./Error.css"

const Error = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">{error.status}</h1>
        <p className="error-message">Page {error.statusText}</p>

        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
