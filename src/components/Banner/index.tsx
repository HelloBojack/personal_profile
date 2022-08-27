import { useState, useEffect, useRef } from "react";
import headerImg from "../../assets/img/header-img.svg";
// import "animate.css";
import useOnScreen from "../../hooks/useOnScreen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const onScreen2 = useOnScreen(ref2);

  console.log(onScreen);

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
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="bg-[url('src/assets/img/banner-bg.png')] bg-cover bg-no-repeat bg-top-center pt-[260px] pb-[100px]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className={
              onScreen
                ? "transition-opacity ease-in duration-700 opacity-100"
                : "opacity-0"
            }
            ref={ref}
          >
            <div>
              <span
                style={{
                  background: ` linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%) `,
                }}
                className="inline-block bg-gradient-to-r from-pink-900 to-fuchsia-900 font-bold tracking-[0.8px] px-[8px] py-[10px] mb-[16px] text-[20px] border border-solid border-white/50"
              >
                Welcome to my Profile
              </span>
              <h1 className="font-bold tracking-[0.8px] text-[65px] mb-[20px] block leading-none">
                {`Hi! I'm Judy`}{" "}
                <span
                  className="txt-rotate"
                  // dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p className="text-[18px] tracking-[0.8px] w-[96%] leading-[1.5em] text-[#B8B8B8]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button
                onClick={() => console.log("connect")}
                className="font-bold text-[20px] mt-[60px] tracking-[0.8px] flex items-center"
              >
                Let’s Connect
                <svg
                  className="w-8 h-8 ml-[10px] leading-none transition-all ease-in-out delay-300 hover:ml-[25px]"
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
          </div>

          <div>
            <div className={onScreen2 ? "animate-updown" : ""} ref={ref2}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
