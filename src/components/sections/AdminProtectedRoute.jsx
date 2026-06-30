import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

const AdminProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminProtectedRoute;