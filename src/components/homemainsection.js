import React, { useEffect, useState } from "react";
import reviews from "../data/reviews"; // assuming reviews.js is stored in a 'data' folder

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const randomIndices = [];
      while (randomIndices.length < 2) {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
      return randomIndices.map((index) => reviews[index]);
    };

    setRandomReviews(getRandomReviews());
  }, []);

  return (
    <div className="home-main-section">
      <section>
        <h2>About Us</h2>
        <p>Company's vision and mission description...</p>
        <button>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        <div>
          {randomReviews.map((review, index) => (
            <div key={index}>
              <p>{review.customerName}</p>
              <p>{review.reviewContent}</p>
              <p>{"⭐".repeat(review.stars)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeMainSection;
