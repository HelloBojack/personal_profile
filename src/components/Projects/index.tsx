import { TabPane, Tabs } from "../common/Tabs";
import { Card } from "./Card";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

export const Project = () => {
  return (
    <section className=" w-full  bg-black py-[80px] text-center " id="projects">
      <div className="container mx-auto">
        <div className="mb-[75px]">
          <h2 className="text-[45px] font-bold">Projects</h2>
          <p className="text-[18px] tracking-[0.8px] leading-[1.5em] mt-[14px] text-[#B8B8B8] w-[56%] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <Tabs
            defaultActiveKey="1"
            tabClassName="first-of-type:rounded-l-full last-of-type:rounded-r-full  before:transition-all before:duration-300 before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 before:content-[''] before:bg-gradient-to-r  before:from-pink  before:to-purple first-of-type:before:rounded-l-full last-of-type:before:rounded-r-full"
            ActiveClassName="before:w-full"
          >
            <TabPane tab="Tab 1" key="1">
              <div className="grid grid-cols-3 gap-6">
                {projects.map((project, index) => {
                  return (
                    <Card
                      key={index}
                      {...project}
                      className="
                      group
                      before:rounded-[30px]
                      before:transition-all before:duration-300 
                      before:absolute relative
                      before:w-full before:h-0 before:top-0 before:left-0 before:content-[''] 
                      before:bg-gradient-to-b  before:from-pink/75  before:to-purple/75
                      hover:before:h-full"
                      innerClassName="group-hover:top-[45%] group-hover:opacity-100"
                    />
                  );
                })}
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
