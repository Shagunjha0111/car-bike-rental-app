import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import BookingForm from "../components/BookingForm";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      const decodedId = decodeURIComponent(id);
const docRef = doc(db, "vehicles", decodedId);

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setVehicle(docSnap.data());
      }
    };
    fetchVehicle();
  }, [id]);

  if (!vehicle) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={vehicle.image} alt={vehicle.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold">{vehicle.name}</h1>
      <p className="capitalize text-gray-600">{vehicle.type}</p>
      <p className="text-xl text-blue-600 font-semibold mb-4">₹{vehicle.price}/day</p>

      <BookingForm vehicle={vehicle} vehicleId={id} />
    </div>
  );
};

export default VehicleDetails;
