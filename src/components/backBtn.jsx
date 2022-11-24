import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <Link to="/">
      <div className="back-btn">&larr; Back</div>
    </Link>
  );
};

export default BackBtn;
