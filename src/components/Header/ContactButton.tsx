export const ContactButton = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`font-bold text-[18px] ml-[18px] border border-white w-[135px] h-[60px] bg-transparent relative before:transition-all  before:duration-300 before:-z-[1] before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 before:content-[''] hover:before:w-full before:bg-white hover:text-black ${className}`}
      onClick={onClick}
    >
      <div className="z-[1] w-full h-full">{children}</div>
    </button>
  );
};
