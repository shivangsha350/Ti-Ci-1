import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as FramerMotion } from "framer-motion";
import TerrestrialPlantsDetails from './TerrestrialPlantsDetails';


const TerrestrialPlants = () => {
  

  const [selectedImage, setSelectedImage] = useState(null);

  const imageData = [
    {
      id: 1,
      image: "/Terrestrial plants/Alocasia/_DSC5806.JPG",
      title: "Alocasia amazonica",
      description: "Alocasia amazonica is a striking tropical plant with large, arrow-shaped leaves, needing bright light, humidity, and well-draining soil. This plant purify air, add tropical beauty, and boost humidity. Avoid cold drafts, and wipe leaves to prevent pests and promote healthy growth.",
    },
    {
      id: 2,
      image: "/Terrestrial plants/Anthurium/IMG_0413.JPG",
      title: "Anthurium",
      description: "Anthurium plants are tropical beauties known for their glossy, heart-shaped leaves and vibrant, waxy flowers, usually red or pink. They thrive in warm, humid environments with indirect light, making them perfect indoor plants that add color and elegance to any space.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC5808.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 4,
      image: "/Terrestrial plants/Bigonia/_DSC5809.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bigonia/_DSC5814.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6039.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6044.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6045.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6047.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6052.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6054.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6056.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6057.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6058.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6059.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6064.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6066.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6071.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6072.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6073.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6095.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6097.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 3,
      image: "/Terrestrial plants/Bigonia/_DSC6098.JPG",
      title: "Bigonia",
      description: "Begonia is a vibrant, tropical flowering plant known for its ornamental foliage and colorful blooms. With over 2,000 species, it thrives in humid, shaded environments and is popular as a houseplant or garden feature due to its beauty,adaptability, and ease of care.",
    },
    {
      id: 4,
      image: "/Terrestrial plants/Bromelliad/_DSC5898.JPG",
      title: "Bromeliads",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bromelliad/_DSC5901.JPG",
      title: "Bromeliad",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0005.jpg",
      title: "Bromeliad",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0006.jpg",
      title: "Bromeliad",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0008.jpg",
      title: "Bromeliad",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bromelliad/IMG-20250611-WA0010.jpg",
      title: "Bromeliad",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 5,
      image: "/Terrestrial plants/Bromelliad/WhatsApp Image 2025-07-01 at 16.17.00_7456e296.jpg",
      title: "Bromeliad",
      description: "with their striking rosettes and exotic bloBromeliads oms, are captivating tropical plants. Bromeliads add vibrant colour and bring a touch of the tropics to your space and boost home decor.",
    },
    {
      id: 6,
      image: "/Terrestrial plants/Coin plant/_DSC6010.JPG",
      title: "Coin plant",
      description: "The coin plant Or (Pilea peperomioides) is an easy-care houseplant with round leaves. It purifies air, adds beauty, and symbolizes wealth and good luck in many cultures.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/_DSC5840.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/_DSC5849.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/_DSC5854.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/_DSC5857.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/_DSC5859.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/IMG_0311.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 7,
      image: "/Terrestrial plants/Coleus/IMG_0314.JPG",
      title: "Coleus",
      description: "Coleus is a tropical perennial plant known for its vibrant, multicolored foliage. Belonging to the mint family (Lamiaceae), it is often grown as an ornamental plant in gardens or container,and is popular for its easy care and striking leaf patterns in shades of green, red, pink, yellow etc.",
    },
    {
      id: 8,
      image: "/Terrestrial plants/Dieffenbachia sterling/_DSC5915.JPG",
      title: "Dieffenbachia sterling",
      description: "Dieffenbachia 'Sterling' is a popular houseplant admired for its large, deep green leaves with striking white midribs. It’s easy to care for, thrives in indirect light, and purifies air, making it a great choice for homes and offices.",
    },
    {
      id: 9,
      image: "/Terrestrial plants/Dracaena reflexa/_DSC6006.JPG",
      title: "Dracaena reflexa",
      description: "Dracaena reflexa is a tropical evergreen shrub with glossy, lance-shaped leaves, often variegated. Native to Madagascar it thrives in bright, indirect light and low maintenance. Ideal as an indoor plant, it purifies air, tolerates drought, and adds lush greenery to homes and offices.",
    },
    {
      id: 10,
      image: "/Terrestrial plants/Drimiopsis kirkii/_DSC6018.JPG",
      title: "Fern (4 type)",
      description: "Drimiopsis kirkii is a small, bulbous perennial with spotted, hosta-like leaves, native to Africa. It thrives in bright shade, requires minimal water, and is perfect for indoor or shaded gardens. The plant is drought-tolerant, easy to care for, and produces tiny white-green flowers seasonally.",
    },
    {
      id: 11,
      image: "/Terrestrial plants/Fern (4 type)/bird nest fern.JPG",
      title: "Fern (4 type)",
      description: `It’s known for its attractive, rosette-shaped fronds resembling a bird's nest, is a resilient, low-maintenance houseplant. It thrives in warm, humid conditions and enjoys indirect sunlight.
Tree ferns
These Are ancient plants with tall, trunk-like stems and large fronds. They thrive in humid, shaded forests and reproduce via spores, not seeds. They're important for ecosystem stability and forest regeneration.


Dryopteris, or wood fern (dryopteris spp.)
it is a shade-loving fern genus with finely divided, arching fronds. It thrives in moist, well-drained soil and is commonly found in woodlands, valued for its ornamental foliage and adaptability. It enhances humidity, purifies air.
Staghorn ferns 
These are native to tropical and subtropical regions. Staghorn fern is an epiphytic plant with antler-shaped fronds, these ferns purify air, enhance decor with unique foliage, and thrive mounted on boards.
`
    },
    {
      id: 11,
      image: "/Terrestrial plants/Fern (4 type)/stag horn fern.JPG",
      title: "Fern (4 type)",
      description: `It’s known for its attractive, rosette-shaped fronds resembling a bird's nest, is a resilient, low-maintenance houseplant. It thrives in warm, humid conditions and enjoys indirect sunlight.
Tree ferns
These Are ancient plants with tall, trunk-like stems and large fronds. They thrive in humid, shaded forests and reproduce via spores, not seeds. They're important for ecosystem stability and forest regeneration.


Dryopteris, or wood fern (dryopteris spp.)
it is a shade-loving fern genus with finely divided, arching fronds. It thrives in moist, well-drained soil and is commonly found in woodlands, valued for its ornamental foliage and adaptability. It enhances humidity, purifies air.
Staghorn ferns 
These are native to tropical and subtropical regions. Staghorn fern is an epiphytic plant with antler-shaped fronds, these ferns purify air, enhance decor with unique foliage, and thrive mounted on boards.
`
    },
    {
      id: 11,
      image: "/Terrestrial plants/Fern (4 type)/tree fern.JPG",
      title: "Fern (4 type)",
      description: `It’s known for its attractive, rosette-shaped fronds resembling a bird's nest, is a resilient, low-maintenance houseplant. It thrives in warm, humid conditions and enjoys indirect sunlight.
Tree ferns
These Are ancient plants with tall, trunk-like stems and large fronds. They thrive in humid, shaded forests and reproduce via spores, not seeds. They're important for ecosystem stability and forest regeneration.


Dryopteris, or wood fern (dryopteris spp.)
it is a shade-loving fern genus with finely divided, arching fronds. It thrives in moist, well-drained soil and is commonly found in woodlands, valued for its ornamental foliage and adaptability. It enhances humidity, purifies air.
Staghorn ferns 
These are native to tropical and subtropical regions. Staghorn fern is an epiphytic plant with antler-shaped fronds, these ferns purify air, enhance decor with unique foliage, and thrive mounted on boards.
`
    },
    {
      id: 11,
      image: "/Terrestrial plants/Fern (4 type)/wood fern2.JPG",
      title: "Fern (4 type)",
      description: `It’s known for its attractive, rosette-shaped fronds resembling a bird's nest, is a resilient, low-maintenance houseplant. It thrives in warm, humid conditions and enjoys indirect sunlight.
Tree ferns
These Are ancient plants with tall, trunk-like stems and large fronds. They thrive in humid, shaded forests and reproduce via spores, not seeds. They're important for ecosystem stability and forest regeneration.


Dryopteris, or wood fern (dryopteris spp.)
it is a shade-loving fern genus with finely divided, arching fronds. It thrives in moist, well-drained soil and is commonly found in woodlands, valued for its ornamental foliage and adaptability. It enhances humidity, purifies air.
Staghorn ferns 
These are native to tropical and subtropical regions. Staghorn fern is an epiphytic plant with antler-shaped fronds, these ferns purify air, enhance decor with unique foliage, and thrive mounted on boards.
`
    },
     {
      id: 12,
      image: "/Terrestrial plants/Haworthia sp/_DSC5997.JPG",
      title: "Haworthia sp",
      description: "Haworthia (Haworthia spp.) is a genus of small,slow-growing succulents native to Southern Africa,known for their rosette-shaped clusters of fleshy,often translucent or patterned leaves.They thrive in bright, indirect light and well-draining soil,making them ideal low-maintenance indoor plants.",
    },
     {
      id: 13,
      image: "/Terrestrial plants/Lonantha rubra/_DSC5971.JPG",
      title: "Lonantha Rubra",
      description: "Lonantha Rubra with its eye-catching, a vibrant air plant that enhances home decor they blooms in air and improves air quality, and requires minimal watering.",
    },
     {
      id: 14,
      image: "/Terrestrial plants/Monstera deliciosa/_DSC5888.JPG",
      title: "Monstera deliciosa",
      description: "Monstera deliciosa commonly known as the Swiss Cheese Plant, is a tropical climber famous for its large, glossy, perforated leaves. Native to Central America, it thrives in bright, indirect light and well-drained soil, making it a popular and low-maintenance houseplant.",
    },
     {
      id: 15,
      image: "/Terrestrial plants/Orchid (2 type)/jewel orchid 1.JPG",
      title: "Jewel Orchid",
      description: "Jewel Orchid is a stunning highland plant with its vibrant colour and ornamental leaf foliage. It thrives in high humidity, easy to care and the propagation is also very easy of this plant. It is also purify the air and making it a beautiful and practical house plant.",
    },
     {
      id: 15,
      image: "/Terrestrial plants/Orchid (2 type)/jewel orchid 2.JPG",
      title: "Jewel Orchid",
      description: "Jewel Orchid is a stunning highland plant with its vibrant colour and ornamental leaf foliage. It thrives in high humidity, easy to care and the propagation is also very easy of this plant. It is also purify the air and making it a beautiful and practical house plant.",
    },
     {
      id: 15,
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 1.jpg",
      title: "Moth Orchid",
      description: "The Phalaenopsis or (Moth Orchid) is a popular, low maintenance epiphytic plant known for its elegant, moth-like flowers. It thrives in bright indirect light, moderate temperatures and high humidity. It is non-toxic and enhances indoor quality making it an ideal houseplant for beauty and wellbeing.",
    },
     {
      id: 15,
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 2.jpg",
      title: "Moth Orchid",
      description: "The Phalaenopsis or (Moth Orchid) is a popular, low maintenance epiphytic plant known for its elegant, moth-like flowers. It thrives in bright indirect light, moderate temperatures and high humidity. It is non-toxic and enhances indoor quality making it an ideal houseplant for beauty and wellbeing.",
    },
     {
      id: 15,
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 3.jpg",
      title: "Moth Orchid",
      description: "The Phalaenopsis or (Moth Orchid) is a popular, low maintenance epiphytic plant known for its elegant, moth-like flowers. It thrives in bright indirect light, moderate temperatures and high humidity. It is non-toxic and enhances indoor quality making it an ideal houseplant for beauty and wellbeing.",
    },
     {
      id: 15,
      image: "/Terrestrial plants/Orchid (2 type)/moth orchid 4.jpg",
      title: "Moth Orchid",
      description: "The Phalaenopsis or (Moth Orchid) is a popular, low maintenance epiphytic plant known for its elegant, moth-like flowers. It thrives in bright indirect light, moderate temperatures and high humidity. It is non-toxic and enhances indoor quality making it an ideal houseplant for beauty and wellbeing.",
    },
     {
      id: 16,
      image: "/Terrestrial plants/Peace lily/peace lily.jpg",
      title: "PEACE LILY (Spathiphyllum wallisii)",
      description: "Peace lilies are elegant indoor plants known for their glossy green leaves and white flowers. They thrive in low light and help purify the air. Easy to care for, making them perfect for homes and offices.",
    },
     {
      id: 17,
      image: "/Terrestrial plants/Philodendron( 6 type)/rojo congo.JPG",
      title: "Philodendron Congo’ ‘Rojo",
      description: "Philodendron Congo’ ‘Rojo is a captivating hybrid known for its bold, burgundy-red stems and glossy green leaves. This self-heading plant adds a touch of tropical elegance to any indoor space. Beyond its striking appearance, it purifies the air, enhances humidity, and thrives with minimal care, making it ideal for both novice and seasoned plant enthusiasts",
    },
     {
      id: 17,
      image: "/Terrestrial plants/Philodendron( 6 type)/paraiso verde.JPG",
      title: "Philodendron Verde Paraiso",
      description: "Philodendron Verde Paraiso with its elongated, marbled green leaves, is a rare and eye-catching tropical houseplant. Philodendron Paraiso Verde adds a lush, artistic flair to your space and enhances home decor with its unique variegation.",
    },
     {
      id: 17,
      image: "/Terrestrial plants/Philodendron( 6 type)/broken heart.JPG",
      title: "Philodendron Broken Heart (Philodendron adansoni)",
      description: "Philodendron Broken Heart (Philodendron adansoni) is an easy-care tropical vine with unique heart-shaped leaves that purifies air, adds stylish greenery, and effortlessly transforms any indoor space into a vibrant, trendy oasis—perfect for modern plant.",
    },
     {
      id: 17,
      image: "/Terrestrial plants/Philodendron( 6 type)/rugosum.JPG",
      title: "Philodendron rugosum",
      description: "Philodendron rugosum commonly known as Pigskin Philodendron, is a rare, climbing aroid prized for its thick, leathery, textured leaves that resemble pigskin. Native to Ecuador, it thrives in warm, humid environments with indirect light and well-draining soil, making it a collector’s favorite.",
    },
     {
      id: 17,
      image: "/Terrestrial plants/Philodendron( 6 type)/lemon lime.JPG",
      title: "Philodendron ‘LemonLime’",
      description: "Philodendron ‘LemonLime’ also known as Golden Philodendron, is a vibrant trailing plant with bright chartreuse to yellow-green leaves. It thrives in bright, indirect light and well-draining soil, making it a popular choice for adding bold color to indoor spaces.",
    },
     {
      id: 17,
      image: "/Terrestrial plants/Philodendron( 6 type)/florida green.JPG",
      title: "Philodendron ‘Florida Green’",
      description: "Philodendron ‘Florida Green’ is a striking hybrid philodendron known for its deeply lobed, glossy green leaves and vining growth habit. It thrives in bright, indirect light with well-draining soil and is popular for its unique foliage and easy care in indoor environments.",
    },
     {
      id: 18,
      image: "/Terrestrial plants/Remusatia sp/remusatia.JPG",
      title: "Remusatia sp.",
      description: "Remusatia sp. is a tropical tuberous plant known for its heart-shaped leaves and unique bulbils. It grows well in shady, humid environments with well-drained soil. Easily propagated through bulbils, it requires minimal care and is often used for ornamental and medicinal purposes.",
    },
     {
      id: 19,
      image: "/Terrestrial plants/Rhoeo discolor/_DSC5928.JPG",
      title: "Rhoeo discolor Or (Moses in the Cradle)",
      description: "Rhoeo discolor Or (Moses in the Cradle) is a vibrant tropical perennial valued for its green leaves with striking purple undersides. Ideal for borders or indoor pots, it thrives in bright, indirect light, warm temperatures and moderate humidity.",
    },
     {
      id: 20,
      image: "/Terrestrial plants/Ruellia simplex/_DSC5880.JPG",
      title: "Ruellia simplex or Mexican Petunia",
      description: "Ruellia simplex or Mexican Petunia, Is a vibrant, low-maintenance perennial with colorful blooms that enhance garden beauty, attract pollinators, prevent soil erosion, and thrive in tough conditions—making it the perfect, hassle-free choice to instantly brighten any landscape.",
    },
     {
      id: 21,
      image: "/Terrestrial plants/Sanchezia nobilis/_DSC5940.JPG",
      title: "Sanchezia nobilis",
      description: "Sanchezia nobilis is a tropical ornamental plant valued for its attractive foliage and fast growth. It thrives in warm, humid climates, prefers well-drained soil, and is easy to propagate by cuttings. Low-maintenance and beneficial for erosion control, it is ideal for gardens and landscaping.",
    },
     {
      id: 22,
      image: "/Terrestrial plants/Selaginella/_DSC5979.JPG",
      title: "Selaginella nobilis",
      description: "Sanchezia nobilis is a tropical ornamental plant valued for its attractive foliage and fast growth. It thrives in warm, humid climates, prefers well-drained soil, and is easy to propagate by cuttings. Low-maintenance and beneficial for erosion control, it is ideal for gardens and landscaping.",
    },
     {
      id: 23,
      image: "/Terrestrial plants/Thaumatophyllum (2 type)/spruceanum.JPG",
      title: "Thaumatophyllum spruceanum",
      description: "Thaumatophyllum spruceanum is a striking tropical aroid native to the rainforests of northern South America. This plant is celebrated for its unique, hoop-shaped leaves that spiral outward, creating a dramatic and architectural appearance, making it a captivating focal point in any indoor space.",
    },
     {
      id: 23,
      image: "/Terrestrial plants/Thaumatophyllum (2 type)/xanadu.JPG",
      title: "Thaumatophyllum Xanadu",
      description: "Thaumatophyllum Xanadu, formerly known Philodendron Xanadu is a tropical perennial native to Brazil, prized for its glossy, deeply lobed leaves and compact, bushy form. It thrives in bright, indirect light, with moist, well-draining soil and moderate humidity.",
    },
     {
      id: 24,
      image: "/Terrestrial plants/Turtle vine/_DSC6028.JPG",
      title: "Turtle Vine (Callisia Hanging Plant)",
      description: "Turtle Vine (Callisia Hanging Plant) is a fast-growing, trailing plant with small, fleshy, green to purple-tinged leaves. Ideal for hanging baskets, it thrives in bright, indirect light and well-drained soil, making it popular for indoor and patio decoration.",
    },
     {
      id: 25,
      image: "/Terrestrial plants/Variegated canna/_DSC5938.JPG",
      title: "Variegated Canna",
      description: "Variegated Canna is a tropical ornamental plant known for its bold, striped foliage in shades of green, yellow, cream, or pink, and vibrant flowers in red, orange, yellow, or bi-colors. It thrives in full sun, rich moist soil, and humid climate.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">Terrestrial Plants</h1>
          <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
            Lush greenery rooted in resilience.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/Terrestrial plants/Aglonema sp/_DSC5963.JPG"
            alt="Featured Terrarium"
            className="w-full h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2E442F] mb-6">Varieties</h2>
          <FramerMotion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {imageData.map((item) => (
              <FramerMotion.div
                key={item.id}
                className="overflow-hidden rounded-lg shadow-md h-64 bg-white cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </FramerMotion.div>
            ))}
          </FramerMotion.div>
        </div>

        {/* Popup Section */}
        {selectedImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-transperent bg-opacity-40 backdrop-blur-sm">
    <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
      >
        ✕
      </button>
      <img src={selectedImage.image} alt={selectedImage.title} className="w-full rounded mb-4" />
      <h2 className="text-xl font-semibold mb-2">{selectedImage.title}</h2>
      <p>{selectedImage.description}</p>
    </div>
  </div>
)}

        {/* CTA Section */}
        <div className="bg-[#2E442F] text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Add a Miniature Ecosystem to Your Space?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your terrarium project. Our experts will help you design a stunning miniature landscape tailored to your space and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#2E442F] px-6 py-3 rounded-full font-semibold hover:bg-[#90A48B] hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2E442F] transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
         <TerrestrialPlantsDetails
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      </div>
    </section>
  );
};

export default TerrestrialPlants; 
