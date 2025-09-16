import { renderRichText } from "@storyblok/react";
import FullStar from "./icons/full_star.svg";
import EmptyStar from "./icons/half_star.svg";
import Image from "next/image";

const ReviewInfo = ({ blok }) => {
  const score = blok.score || 0;
  const total_score = blok.total_score || 0;

  const ratingoutof10 = total_score > 0 ? (score / total_score) * 10 : 0;

  const ratingoutof5 = Math.round(ratingoutof10 / 2);

  return (
    <div className="flex flex-col md:flex-row gap-x-8 items-start m-8 py-4 px-8 shadow-lg shadow-[#DAE4E9] rounded-lg">
      <div className="flex flex-col gap-y-2 md:w-[200px]">
        <h2 className="text-2xl font-bold">{blok.title}</h2>
        <div className="py-1 flex flex-row items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              const starNumber = index + 1;
              if (starNumber <= ratingoutof5) {
                return <Image key={index} src={FullStar} alt="Full Star" />;
              } else {
                return <Image key={index} src={EmptyStar} alt="Empty Star" />;
              }
            })}

          <span className="ml-2 font-semibold text-gray-400">
            {ratingoutof10.toFixed(1)} out of 10
          </span>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.description) }}
        className="flex-1 ml-auto text-[16px] font-normal leading-[20px] tracking-normal text-[#222222] "
      ></div>
    </div>
  );
};

export default ReviewInfo;
