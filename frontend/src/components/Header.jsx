import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";

function Header({ setCards }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(typeof setCards);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = event.target.elements;

    axios
      .post("http://localhost:3000/api/add-card", {
        title: title.value,
        description: description.value,
      })
      .then((response) => {
        setCards((prevCards) => [...prevCards, response.data]);
        closeModal();
      })
      .catch((error) => console.error("Error adding card:", error));
  };

  return (
    <header className="bg-black sticky top-0 text-white py-4 flex justify-between items-center px-8">
      <div className="text-lg font-bold">Abstract | Help Center</div>
      <button onClick={openModal} className="bg-gray-800 px-4 py-2 rounded">
        Add a Card
      </button>
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </header>
  );
}

export default Header;
