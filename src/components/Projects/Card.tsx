export const Card = ({
  imgUrl,
  title,
  description,
  className,
  innerClassName,
}: {
  imgUrl?: string;
  className?: string;
  innerClassName?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div
      className={`relative rounded-[30px] overflow-hidden mb-[24px] ${className} `}
    >
      <img src={imgUrl} />
      <div
        className={`absolute top-[65%] left-0 text-center transition-all opacity-0 ease-in-out duration-500 w-full group ${innerClassName}`}
      >
        <h4 className="text-[30px] font-bold  tracking-[0.8px] leading-[1.1em]">
          {title}
        </h4>
        <span className="text-[15px] font-light tracking-[0.8px] italic">
          {description}
        </span>
      </div>
    </div>
  );
};
