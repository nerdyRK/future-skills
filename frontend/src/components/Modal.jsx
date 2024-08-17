function Modal({ isVisible, onClose, onSubmit }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white text-black w-full max-w-[500px] p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add a New Card</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              className="border border-black rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="border border-black rounded w-full py-2 px-3"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
