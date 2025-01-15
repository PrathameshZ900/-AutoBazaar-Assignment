import React, { useState, useEffect } from "react";
import "./CarsList.css";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    // Get logged-in user from localStorage
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);

    // Get car data from localStorage
    const storedCars = JSON.parse(localStorage.getItem("carData")) || [];
    setCars(storedCars);
  }, []);

  const deleteCar = (id) => {
    // Filter out the car to delete
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    
    // Update localStorage with the new list of cars
    localStorage.setItem("carData", JSON.stringify(updatedCars));
  };

  const handleBuy = (car) => {
    if (loggedInUser === car.dealerName) {
      alert("You can't buy your own car!");
      return;
    }

    // Handle the buy action (you can implement it based on your needs)
    alert(`You have bought the ${car.title}!`);

    // Optionally, remove the car from the list after purchase (if applicable)
    deleteCar(car.id);
  };

  return (
    <div className="cars-list">
      {cars.length > 0 ? (
        cars.map((car) => (
          <div className="car-card" key={car.id}>
            <h3>{car.title}</h3>
            <img src={car.image} alt={car.title} />
            <p>{car.details}</p>
            {car.buyOption === "cash" || car.buyOption === "finance" ? (
              <button onClick={() => handleBuy(car)}>Buy</button>
            ) : (
              <p>Buy option not available</p>
            )}
            <button onClick={() => deleteCar(car.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No cars available</p>
      )}
    </div>
  );
};

export default CarsList;
