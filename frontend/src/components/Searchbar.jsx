function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-purple-100 py-12 text-center">
      <h1 className="text-3xl font-bold mb-6">How can we help?</h1>
      <div className="flex justify-center">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Search Card by Title"
          className="border rounded-l-md py-2 px-4 w-1/3"
        />
      </div>
    </div>
  );
}

export default SearchBar;
