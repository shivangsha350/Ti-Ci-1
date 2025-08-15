import { Link } from 'react-router-dom';

const plantSections = [
  { id: 'Aglaonema', title: 'Aglaonema', image: '/Terrestrial plants/Aglonema sp/_DSC5963.JPG', description: 'Beautiful foliage plants for tropical setups.' },
  { id: 'Alocasia', title: 'Alocasia', image: '/Terrestrial plants/Alocasia/_DSC5806.JPG', description: 'Elegant and bold leaves for interiors.' },
  { id: 'Anthurium', title: 'Anthurium', image: '/Terrestrial plants/Anthurium/IMG_0413.JPG', description: 'Elegant flowers with vibrant colors.' },
  { id: 'Begonia', title: 'Begonia', image: '/Terrestrial plants/Bigonia/_DSC5808.JPG', description: 'Lush plants with striking foliage.' },
  { id: 'Bromeliad', title: 'Bromeliad', image: '/Terrestrial plants/Bromelliad/_DSC5901.JPG', description: 'Lush plants with striking foliage.' },
   { id: 'Coin plant', title: 'Coin plant', image: '/Terrestrial plants/Coin plant/_DSC6010.JPG', description: 'Round-leaf plant for indoor displays.' },
  { id: 'Coleus', title: 'Coleus', image: '/Terrestrial plants/Coleus/_DSC5840.JPG', description: 'Colorful foliage plant for bright spots.' },
  { id: 'Dieffenbachia sterling', title: 'Dieffenbachia sterling', image: '/Terrestrial plants/Dieffenbachia sterling/_DSC5915.JPG', description: 'Beautiful patterned leaves for shade.' },
  { id: 'Dracaena reflexa', title: 'Dracaena reflexa', image: '/Terrestrial plants/Dracaena reflexa/_DSC6006.JPG', description: 'Tall and sleek indoor foliage plant.' },
  { id: 'Drimiopsis kirkii', title: 'Drimiopsis kirkii', image: '/Terrestrial plants/Drimiopsis kirkii/_DSC6018.JPG', description: 'Compact plant with spotted leaves.' },
  { id: 'Fern (4 type)', title: 'Fern (4 type)', image: '/Terrestrial plants/Fern (4 type)/bird nest fern.JPG', description: 'Delicate fronds perfect for shade.' },
  { id: 'Haworthia sp', title: 'Haworthia sp', image: '/Terrestrial plants/Haworthia sp/_DSC5997.JPG', description: 'Small succulent with patterned leaves.' },
  { id: 'Lonantha rubra', title: 'Lonantha rubra', image: '/Terrestrial plants/Lonantha rubra/_DSC5971.JPG', description: 'Striking red-toned foliage.' },
  { id: 'Monstera deliciosa', title: 'Monstera deliciosa', image: '/Terrestrial plants/Monstera deliciosa/_DSC5888.JPG', description: 'Large leaves with unique natural holes.' },
  { id: 'Orchid (2 type)', title: 'Orchid (2 type)', image: '/Terrestrial plants/Orchid (2 type)/jewel orchid 1.JPG', description: 'Exotic flowers with long-lasting blooms.' },
  { id: 'Peace lily', title: 'Peace lily', image: '/Terrestrial plants/Peace lily/peace lily.jpg', description: 'Elegant white flowers and lush leaves.' },
  { id: 'Philodendron( 6 type)', title: 'Philodendron( 6 type)', image: '/Terrestrial plants/Philodendron( 6 type)/broken heart.JPG', description: 'Low-maintenance climbing foliage plant.' },
  { id: 'Remusatia sp', title: 'Remusatia sp', image: '/Terrestrial plants/Remusatia sp/remusatia.JPG', description: 'Unique tropical foliage with bold textures.' },
  { id: 'Rhoeo discolor', title: 'Rhoeo discolor', image: '/Terrestrial plants/Rhoeo discolor/_DSC5928.JPG', description: 'Two-toned leaves with vibrant colors.' },
  { id: 'Ruellia simplex', title: 'Ruellia simplex', image: '/Terrestrial plants/Ruellia simplex/_DSC5880.JPG', description: 'Vibrant flowers with lush foliage.' },
  { id: 'Sanchezia nobilis', title: 'Sanchezia nobilis', image: '/Terrestrial plants/Sanchezia nobilis/_DSC5940.JPG', description: 'Bright yellow-veined leaves.' },
  { id: 'Selaginella', title: 'Selaginella', image: '/Terrestrial plants/Selaginella/_DSC5979.JPG', description: 'Delicate moss-like greenery.' },
  { id: 'Thaumatophyllum (2 type)', title: 'Thaumatophyllum (2 type)', image: '/Terrestrial plants/Thaumatophyllum (2 type)/xanadu.JPG', description: 'Large leaves with bold textures.' },
  { id: 'Turtle vine', title: 'Turtle vine', image: '/Terrestrial plants/Turtle vine/_DSC6028.JPG', description: 'Trailing plant with small round leaves.' },
  { id: 'Variegated canna', title: 'Variegated canna', image: '/Terrestrial plants/Variegated canna/_DSC5938.JPG', description: 'Striking variegated foliage and blooms.' }
];

export default function TerrestrialPlants() {
  return (
    <section className="bg-[#EEF3EC] min-h-screen py-16 px-6 mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2E442F] mb-4 mt-4">
                Terrestrial Plants
              </h1>
              <p className="text-[#2E442F]/70 max-w-3xl mx-auto">
                Terrestrial plants
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {plantSections.map((section) => (
          <Link
            key={section.id}
            to={`/products/terrestrialplants/${encodeURIComponent(section.id)}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow block" // removed hover zoom
          >
            <img src={section.image} alt={section.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#2E442F] mb-2">{section.title}</h3>
              <p className="text-[#2E442F]/70">Click to view plant Varieties</p>
            </div>
          </Link>
        ))}
      </div>
            </div>


            {/* back button */}
                  <div className="text-center mt-12">
                    <Link
                      to="/products"
                      className="inline-block bg-[#2E442F] text-white px-6 py-3 rounded-full hover:bg-[#90A48B] transition"
                    >
                      ← Back to Products
                    </Link>
                  </div>
        
        </section>
      );
  
}

