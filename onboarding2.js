import { useNavigate } from "react-router-dom";

export default function Onboarding2() {
  const navigate = useNavigate();
  return (
    <div className="onboarding-screen text-center p-4">
      <img
        src="https://via.placeholder.com/250x150?text=Reserve+%26+Charge"
        alt="Reserve and Charge"
        className="img-fluid my-4"
      />
      <h3>Book your spot, hassle-free.</h3>
      <p>Secure your charging slot in advance and pay seamlessly.</p>
      <div className="pagination-dots my-3">○ ● ○</div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-secondary" onClick={() => navigate("/onboarding1")}>
          Back
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/onboarding3")}>
          Next
        </button>
      </div>
    </div>
  );
}
