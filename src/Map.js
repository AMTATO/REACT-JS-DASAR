import React from "react";

const foods = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
];

// Reduce 
const total_bayar = foods.reduce((total_harga, food) => total_harga+food.harga, 0);

const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {foods.map((food, index) => (
          <li>
            {index + 1}. {food.nama} : Rp {food.harga}
          </li>
        ))}
      </ul>
      <h2>Map Filter : Harga yang lebih dari Rp 11.000</h2>
      <ul>
        {foods
          .filter((food) => food.harga > 11000)
          .map((food, index) => (
            <li>
              {index + 1}. {food.nama} : Rp {food.harga}
            </li>
          ))}
      </ul>
      <h3>Total Harga : Rp{total_bayar}</h3>
    </div>
  );
};

export default Map;
