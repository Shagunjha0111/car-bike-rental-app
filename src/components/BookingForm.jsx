import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ vehicle }) => {
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = days * vehicle.price;
    navigate(`/checkout/${vehicle.id}`, {
      state: {
        ...vehicle,
        days,
        total
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <label className="block">
        <span className="text-gray-700">Number of Days:</span>
        <input
          type="number"
          value={days}
          min="1"
          onChange={(e) => setDays(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
