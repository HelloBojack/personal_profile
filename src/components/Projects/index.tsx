import { TabPane, Tabs } from "../common/Tabs";

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
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </section>
  );
};
