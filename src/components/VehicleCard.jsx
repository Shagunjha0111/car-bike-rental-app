
import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{vehicle.name}</h3>
        <p className="text-gray-500 capitalize">{vehicle.type}</p>
        <p className="text-green-600 font-bold mt-2">₹{vehicle.price}/day</p>
        <Link
          to={`/vehicle/${vehicle.id}`}
          className="block mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
