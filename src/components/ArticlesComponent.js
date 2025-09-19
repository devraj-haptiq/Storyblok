import Image from "next/image";
import Link from "next/link"; // No changes here

const ArticlesComponent = ({ blok }) => {
  const { day, headline, author_name, description } = blok.content;
  const articleSlug = blok.full_slug;

  return (
    <Link
      href={`/${articleSlug}`}
      className="block relative border border-border-gray rounded-lg overflow-hidden w-[326.98px] lg:w-[360px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="absolute top-0 left-0 z-10 bg-dark-blue-header px-4 py-1 text-white text-sm font-semibold">
        News & Notes
      </div>
      <div className="pt-10 px-3 md:px-4 pb-4">
        <div className="flex flex-row items-start justify-between mb-4">
          <div>
            <p className="text-[10px] md:text-[11px] leading-4 text-gray-text mb-4">
              {author_name} | {day}
            </p>
            <h6 className=" text-[13px] md:text-[15px] font-bold leading-5 tracking-normal mr-2 md:mr-4">
              {headline}
            </h6>
          </div>
          <div>
            <div className=" w-[110px] h-[80px] md:w-[126px] md:h-[96px] flex justify-center items-center bg-black rounded overflow-hidden relative">
              <Image src="/logo1.png" alt="Logo" width={68} height={22} />
            </div>
          </div>
        </div>
        <div className="flex">
          <p className=" line-clamp-4 md:line-clamp-3 text-[10px] md:text-[11px] leading-4 tracking-normal text-[#323232]">
            {description}
          </p>
          <span className="self-end font-bold text-blue text-[10px] md:text-[11px] leading-4 whitespace-nowrap">
            &nbsp;Read More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticlesComponent;
