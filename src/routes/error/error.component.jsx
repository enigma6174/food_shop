import { Link, useRouteError } from "react-router-dom";
import { error3 as errorImage } from "../../assets/images";

import "./error.styles.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-wrapper">
      <div className="error-container">
        <img src={errorImage} className="error-image" alt={"error image"} />
        <div className="error-message">
          An Unexpected Error Has Happened: {error.statusText || error.message}
        </div>
        <Link to="/">Click Here To Go Back To Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
