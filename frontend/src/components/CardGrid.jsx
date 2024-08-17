import Card from "./Card";

function CardGrid({ cards, searchQuery }) {
  return (
    <div className="min-h-[50vh] place-content-center grid max-w-[1220px] mx-auto grid-cols-1 md:grid-cols-2 gap-6 px-8 py-8">
      {cards
        .filter((card) =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((card) => (
          <Card
            key={card._id}
            title={card.title}
            description={card.description}
          />
        ))}
    </div>
  );
}

export default CardGrid;
