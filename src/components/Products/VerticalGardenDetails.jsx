import React from "react";
import { useParams } from "react-router-dom";

const imageData = [
  {
    id: 1,
    image: "/Vertical garden/1.jpg",
    title: "Lush Green Wall",
    description: "A vibrant vertical garden using shade-loving ferns and begonias.",
  },
  {
    id: 2,
    image: "/Vertical garden/2.jpg",
    title: "Colorful Vertical Mix",
    description: "A mix of colorful foliage plants suited for partial sunlight.",
  },
  {
    id: 3,
    image: "/Vertical garden/3.jpg",
    title: "Entrance Green Frame",
    description: "A beautifully curated vertical garden framing the entrance.",
  },
  {
    id: 4,
    image: "/Vertical garden/4.jpg",
    title: "Office Wall Garden",
    description: "A professional vertical garden installed on an office exterior.",
  },
  {
    id: 5,
    image: "/Vertical garden/5.jpg",
    title: "Window Garden",
    description: "A charming green wall around a small window, great for patios.",
  },
  {
    id: 6,
    image: "/Vertical garden/6.jpg",
    title: "Dense Plant Wall",
    description: "A high-density wall of greenery ideal for pollution control.",
  },
];



const VerticalGardenDetails = () => {
  const { id } = useParams();
  const garden = imageData.find((item) => item.id === parseInt(id));

  if (!garden) return <h2>Image Not Found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{garden.title}</h2>
      <img
        src={garden.image}
        alt={garden.title}
        style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "20px" }}
      />
      <p style={{ marginTop: "15px", fontSize: "18px" }}>{garden.description}</p>
    </div>
  );
};

export default VerticalGardenDetails;
