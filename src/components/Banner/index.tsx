import { useState, useEffect, useRef } from "react";
import headerImg from "../../assets/img/header-img.svg";
import useOnScreen from "../../hooks/useOnScreen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Hi! My name is Bojack",
    "I'm a Frontend Developer",
    "Nice to meet you!",
  ];
  const period = 500;

  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const onScreen2 = useOnScreen(ref2);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="bg-[url('src/assets/img/banner-bg.png')] bg-cover bg-no-repeat bg-top-center pt-[220px] pb-[100px]"
      id="home"
    >
      <div className="container mx-auto flex items-center">
        <div
          className={`flex-1
           ${
             onScreen
               ? "transition-opacity ease-in duration-700 opacity-100"
               : "opacity-0"
           }`}
          ref={ref}
        >
          <span
            style={{
              background: `linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%) `,
            }}
            className="inline-block font-bold tracking-[0.8px] px-[8px] py-[10px] mb-[16px] text-[20px] border border-solid border-white/50"
          >
            Welcome to my Profile
          </span>
          <h1 className="font-bold tracking-[0.8px] text-[64px] mb-[20px] block leading-none">
            <span className="border-r-[0.08em] border-gray-400">{text}</span>
          </h1>
          <p className="text-[18px] tracking-[0.8px] w-[96%] leading-[1.5em] text-[#B8B8B8]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button
            onClick={() => console.log("connect")}
            className="font-bold text-[20px] mt-[60px] tracking-[0.8px] flex items-center"
          >
            <span className="phrase hover:!bg-[length:100%_0.1em] transition-all duration-1000 mr-[10px] hover:mr-[20px]">
              Let's Connect
            </span>
            <svg
              className="w-8 h-8 leading-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>

        <div className={onScreen2 ? "animate-zoomin" : ""} ref={ref2}>
          <img className="animate-updown" src={headerImg} alt="Header Img" />
        </div>
      </div>
    </section>
  );
};
