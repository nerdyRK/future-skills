import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-44">
      <h1 className="text-3xl mb-10">
        Nothing Exist in space You are wandering pal!
      </h1>
      <Link to={"/"} className="bg-blue-400 p-4 text-white font-bold">
        Go Home Now{" "}
      </Link>
    </div>
  );
};
export default Error;
