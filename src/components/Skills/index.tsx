import { Pie } from "./Pie";

export const Skills = () => {
  return (
    <section
      className="container mx-auto flex flex-wrap items-center bg-[#121212] rounded-[64px] text-center px-[50px] py-[60px] -mt-[60px] shadow-fuchsia-900 shadow-lg"
      id="skills"
    >
      <div className="w-full mb-[75px]">
        <h2 className="text-[45px] font-bold">Skills</h2>
        <p className="text-[18px] tracking-[0.8px] leading-[1.5em] mt-[14px] text-[#B8B8B8]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.<br></br> Lorem Ipsum has been the industry's standard dummy
          text.
        </p>
      </div>
      <div className="flex ">
        <Pie value={95} />
        <Pie value={80} />
        <Pie value={90} />
        <Pie value={95} />
      </div>
    </section>
  );
};
