import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ratting}) => {
  return (
    <div className="text-green-700 text-2xl ml-10 md:ml-0">
      {ratting === 1 && (
        <div className="flex">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      )}
      {ratting === 2 && (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      )}
      {ratting === 3 && (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      )}
      {ratting === 4 && (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      )}
      {ratting === 5 && (
        <div className="flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      )}
    </div>
  );
};

export default Ratings;
