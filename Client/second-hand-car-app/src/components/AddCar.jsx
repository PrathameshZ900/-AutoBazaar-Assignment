import React, { useState } from "react";
import "./AddCar.css";

const AddCar = () => {
  const [car, setCar] = useState({
    name: "",
    model: "",
    year: "",
    askingPrice: "",
    image: "",
    mileage: "",
    kilometersRun: "",
    buyOption: "",
    dealerName: "",
    dealerLocation: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      !car.name ||
      !car.model ||
      !car.year ||
      !car.askingPrice ||
      !car.image ||
      !car.mileage ||
      !car.kilometersRun ||
      !car.buyOption ||
      !car.dealerName ||
      !car.dealerLocation
    ) {
      setErrorMessage("Please fill out all fields!");
      return;
    }

    // Storing car and dealer details in localStorage
    const carData = {
      carDetails: {
        name: car.name,
        model: car.model,
        year: car.year,
        askingPrice: car.askingPrice,
        image: car.image,
        mileage: car.mileage,
        kilometersRun: car.kilometersRun,
        buyOption: car.buyOption,
      },
      dealerDetails: {
        dealerName: car.dealerName,
        dealerLocation: car.dealerLocation,
      },
    };

    // Fetch existing car data from localStorage and add new car
    const existingCars = JSON.parse(localStorage.getItem("carData")) || [];
    existingCars.push(carData);
    localStorage.setItem("carData", JSON.stringify(existingCars));

    // Success message and reset the form
    alert("Car added successfully!");
    setCar({
      name: "",
      model: "",
      year: "",
      askingPrice: "",
      image: "",
      mileage: "",
      kilometersRun: "",
      buyOption: "",
      dealerName: "",
      dealerLocation: "",
    });
    setErrorMessage(""); // Reset error message
  };

  return (
    <div className="add-car-page">
      <form className="add-car-form" onSubmit={handleSubmit}>
        <h2>Add Car</h2>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={car.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model Name"
          value={car.model}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year of Model"
          value={car.year}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="askingPrice"
          placeholder="Asking Price"
          value={car.askingPrice}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Car Image URL"
          value={car.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="mileage"
          placeholder="Mileage (in km)"
          value={car.mileage}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="kilometersRun"
          placeholder="Kilometers Run"
          value={car.kilometersRun}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="buyOption"
          placeholder="Buy Option (cash/finance)"
          value={car.buyOption}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dealerName"
          placeholder="Dealer Name"
          value={car.dealerName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dealerLocation"
          placeholder="Dealer Location"
          value={car.dealerLocation}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
