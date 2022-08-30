export const ContactButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="font-bold text-[18px] ml-[18px] border border-white px-[34px] py-[18px] bg-transparent relative
  before:transition-all  before:duration-300 before:-z-[1]
  before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 
  before:content-[''] hover:before:w-full before:bg-white hover:text-black"
      onClick={onClick}
    >
      <span className="z-[1]">{children}</span>
    </button>
  );
};
