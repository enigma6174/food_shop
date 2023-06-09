import { Link, useRouteError } from "react-router-dom";
import "./error.styles.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-wrapper">
      <div className="error-container">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Back To Home</Link>
      </div>
      {/* <div className="error-container">H</div> */}
    </div>
  );
};

export default ErrorPage;
