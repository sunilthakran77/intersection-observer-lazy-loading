import { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [dogImage, setDogImage] = useState(
    "https://images.dog.ceo/breeds/keeshond/n02112350_7141.jpg"
  );

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.intersectionRatio > 0)  {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target)
          }
        });
      },
      { threshold: 0.75 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    //return () => observer.disconnect();
  }, []);

  return (
    <main className="main">
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
      <div className="card">
        <img src={dogImage} alt="dog breed" />
      </div>
    </main>
  );
};

export default InfiniteScroll;
