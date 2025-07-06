import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import VehicleCard from "../components/VehicleCard";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const querySnapshot = await getDocs(collection(db, "vehicles"));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setVehicles(data);
    };

    fetchVehicles();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Available Vehicles
      </h2>

      {/* ✅ Responsive 1 → 2 → 3 column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {vehicles.length > 0 ? (
          vehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">Loading vehicles...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
