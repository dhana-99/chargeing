import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding1"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
      <div className="battery-icon mb-3">
        <i className="fas fa-bolt"></i>
      </div>
      <h1 className="text-primary fw-bold">Charginguu</h1>
      <div className="loading-bar mt-3">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}
