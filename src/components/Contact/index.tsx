import { useRef } from "react";
import ContactImg from "../../assets/img/contact-img.svg";
import useOnScreen from "../../hooks/useOnScreen";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-r from-pink to-purple pt-[60px] pb-[60px]"
    >
      <div className="container mx-auto flex">
        <div className={`flex-1 ${onScreen ? "animate-zoomin" : ""}`} ref={ref}>
          <img src={ContactImg} alt="ContactImg" className="animate-swing" />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};
