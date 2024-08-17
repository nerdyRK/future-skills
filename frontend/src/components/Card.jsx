import { Link } from "react-router-dom";

function Card({ title, description }) {
  return (
    <Link
      to={`/${title}`}
      state={{ title, description }}
      className="no-underline"
    >
      <div className="bg-gray-100 border border-gray-300 p-6 rounded-md shadow-md cursor-pointer">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default Card;
