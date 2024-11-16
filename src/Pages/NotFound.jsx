import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center pt-4">
      <h1 className=" text-6xl pb-4">404 Not Found</h1>
      <div>
        <p className="underline text-lg">
          <Link to={"/"}>Go Back To Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
