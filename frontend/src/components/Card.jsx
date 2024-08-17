function Card({ title, description }) {
  return (
    <div className="bg-gray-100 border border-gray-300 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
