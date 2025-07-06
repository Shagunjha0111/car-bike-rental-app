import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/config";

const MyBookings = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!currentUser) return;
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", currentUser.uid)
      );
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map(doc => doc.data());
      setBookings(results);
    };

    fetchBookings();
  }, [currentUser]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, idx) => (
            <div key={idx} className="border rounded p-4 shadow-sm">
              <img src={booking.image} alt={booking.name} className="w-40 h-24 object-cover rounded mb-2" />
              <p><strong>Vehicle:</strong> {booking.name}</p>
              <p><strong>Days:</strong> {booking.days}</p>
              <p><strong>Total:</strong> ₹{booking.total}</p>
              <p><strong>Payment ID:</strong> {booking.paymentId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
