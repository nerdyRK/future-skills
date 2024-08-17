import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header"; // Import your header component
import Footer from "./Footer"; // Import your footer component

function Page() {
  const location = useLocation();
  const { title } = useParams(); // Get the title from the URL params
  const [cardData, setCardData] = useState(location.state || null);
  useEffect(() => {
    if (!cardData) {
      axios
        .get(`http://localhost:3000/api/get-card/${title}`) // Replace with your actual API endpoint
        .then((response) => {
          setCardData(response.data);
        })
        .catch((error) => {
          setCardData({
            title: "404 not found",
          });
          console.error("Error fetching card data:", error);
        });
    }
  }, [cardData, title]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <div className="bg-gray-100 border border-gray-300 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{cardData?.title}</h2>
          <p>{cardData?.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
