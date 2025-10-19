import { useNavigate } from "react-router-dom";

export default function Onboarding1() {
  const navigate = useNavigate();
  return (
    <div className="onboarding-screen text-center p-4">
      <img
        src="https://via.placeholder.com/250x150?text=Find+Charging"
        alt="Find Charging"
        className="img-fluid my-4"
      />
      <h3>Never run out of power again.</h3>
      <p>Discover available charging spots for your devices, wherever you are.</p>
      <div className="pagination-dots my-3">● ○ ○</div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-secondary" onClick={() => navigate("/onboarding3")}>
          Skip
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/onboarding2")}>
          Next
        </button>
      </div>
    </div>
  );
}
