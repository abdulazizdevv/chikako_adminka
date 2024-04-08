import { Link } from "react-router-dom";
export const Error404 = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-bold text-[45px]">404 Not Found</h1>

        <p>Your visited page not found. You may go home page.</p>
        <Link className="bg-blue-500 text-[35px]" to="/">
          Back to home page
        </Link>
      </div>
    </>
  );
};
