import { useState } from "react";

export const Tabs = ({
  defaultActiveKey,
  ActiveClassName = "bg-[#39A2DB]",
  children,
}: {
  ActiveClassName?: string;
  defaultActiveKey: string;
  children: React.ReactElement[];
}) => {
  const [activeKey, setActiveKey] = useState<number | string | null>(
    defaultActiveKey
  );
  const renderChildren = children.find((item) => item.key === activeKey);

  console.log(children);

  return (
    <>
      <ul className="flex items-center justify-center w-[72%] mx-auto ">
        {children.map((item) => (
          <li
            className={`border flex-1 py-[17px] text-[18px] tracking-[0.8px]  ${
              activeKey === item?.key ? ActiveClassName : ""
            }`}
            onClick={() => setActiveKey(item.key)}
            key={item.key}
          >
            <button>{item?.props.tab}</button>
          </li>
        ))}
      </ul>
      <div className="mt-[40px]">{renderChildren}</div>
    </>
  );
};

interface TabPaneProps {
  children: React.ReactNode;
  tab: string;
  key: string;
}

export const TabPane = ({ children, tab, key }: TabPaneProps) => {
  return <>{children}</>;
};
