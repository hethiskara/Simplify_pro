import PropTypes from "prop-types";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div
      className="flex justify-center items-center
  flex-col">
      <img
        src={imgURL}
        alt="Customer"
        className=" rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex  gap-2.5 justify-center items-center">
        <img
          src={star}
          width={24}
          height={24}
          className=" object-contain m-0"
        />
        <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

ReviewCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default ReviewCard;
