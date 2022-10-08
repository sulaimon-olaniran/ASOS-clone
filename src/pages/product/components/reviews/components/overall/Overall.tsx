import Rating from "@mui/material/Rating";

interface componentProps {
  from?: string;
  review: {
    [key: string]: any;
    id: number;
    customer_rating: {
      size: number | null;
      comfort: number | null;
      quality: number | null;
    };

    recommended_by: number;
    comments: {
      title: string;
      comment: string;
      id: string;
      time: string;
      rating: number;
    }[];
  };
}
const ReveiwsOverall = ({from, review}: componentProps) => {
  //const value = 4;

  const total_rating = review?.comments
    .map(item => item.rating)
    .reduce((prev, next) => prev + next);

  const average_rating = total_rating / review?.comments?.length;

  const rounded_average_rating = Math.round(average_rating * 10) / 10;

  return (
    <div className={`reviews-overall-container ${from}`}>
      <div className="overall-rating-container">
        <Rating defaultValue={rounded_average_rating} readOnly />

        <span className="rating-ratio">{rounded_average_rating}</span>
        <span className="number-of-rates">
          ({review?.comments?.length} Reviews)
        </span>
      </div>
      <div className="overall-text-container">
        <span>
          {review?.recommended_by}% of customers recommend this product
        </span>
      </div>
    </div>
  );
};

export default ReveiwsOverall;
