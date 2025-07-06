import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-[400px] h-[200px] object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-center">{vehicle.name}</h2>
      <p className="text-gray-500 capitalize">{vehicle.type}</p>
      <p className="text-green-600 font-bold mb-4">₹{vehicle.price} / day</p>
<Link to={`/vehicle/${encodeURIComponent(vehicle.id)}`}  // ✅ Correct

        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Rent Now
      </Link>
    </div>
  );
};

export default VehicleCard;

