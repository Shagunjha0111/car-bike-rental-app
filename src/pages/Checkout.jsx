
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const { state } = useLocation(); // Booking info passed from BookingForm
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state || !currentUser) {
      navigate("/login");
    }
  }, [state, currentUser, navigate]);

  const handleFakePayment = async () => {
    try {
      await addDoc(collection(db, "bookings"), {
        ...state,
        userId: currentUser.uid,
        email: currentUser.email,
        paymentId: "FAKE_PAYMENT_ID_" + Date.now(),
        bookedAt: serverTimestamp()
      });
      alert("Fake payment successful! Booking confirmed.");
      navigate("/my-bookings");
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  if (!state) return null;

  return (
    <div className="p-6 max-w-md mx-auto mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Checkout</h2>
      <p className="mb-1"><strong>Vehicle:</strong> {state.name}</p>
      <p className="mb-1"><strong>Duration:</strong> {state.days} day(s)</p>
      <p className="mb-1"><strong>Total:</strong> ₹{state.total}</p>
      <button onClick={handleFakePayment} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Confirm Payment (Fake)
      </button>
    </div>
  );
};

export default Checkout;
