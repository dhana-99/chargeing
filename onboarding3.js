import { useNavigate } from "react-router-dom";

export default function Onboarding3() {
  const navigate = useNavigate();
  return (
    <div className="onboarding-screen text-center p-4">
      <img
        src="https://via.placeholder.com/250x150?text=Earn+Rewards"
        alt="Earn Rewards"
        className="img-fluid my-4"
      />
      <h3>Charge smart, get rewarded.</h3>
      <p>Enjoy exclusive offers and cashback on every charge.</p>
      <div className="pagination-dots my-3">○ ○ ●</div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-secondary" onClick={() => navigate("/onboarding2")}>
          Back
        </button>
        <button className="btn btn-success" onClick={() => alert("Navigate to Login/Signup")}>
          Get Started
        </button>
      </div>
    </div>
  );
}
