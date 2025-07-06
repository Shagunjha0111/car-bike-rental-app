import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ vehicle, vehicleId }) => {
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const bookingInfo = {
      vehicleId,
      name: vehicle.name,
      image: vehicle.image,
      price: vehicle.price,
      days,
      total: vehicle.price * days,
    };
    navigate(`/checkout/${vehicleId}`, { state: bookingInfo });
  };

  return (
    <div className="border-t pt-4 mt-4">
      <label className="block mb-2 font-semibold">Rental Duration (Days):</label>
      <input
        type="number"
        value={days}
        min={1}
        onChange={(e) => setDays(parseInt(e.target.value))}
        className="border p-2 w-20"
      />
      <p className="mt-2">Total Price: <strong>₹{vehicle.price * days}</strong></p>
      <button
        onClick={handleCheckout}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BookingForm;
