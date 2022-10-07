import Rating from "@mui/material/Rating";

interface componentProps {
  from?: string;
}
const ReveiwsOverall = ({from}: componentProps) => {
  const value = 4;
  return (
    <div className={`reviews-overall-container ${from}`}>
      <div className="overall-rating-container">
        <Rating defaultValue={value} precision={0.5} readOnly />

        <span className="rating-ratio">2.4</span>
        <span className="number-of-rates">(27 Reviews)</span>
      </div>
      <div className="overall-text-container">
        <span>28% of customers recommend this product</span>
      </div>
    </div>
  );
};

export default ReveiwsOverall;
