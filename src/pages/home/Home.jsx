import { useEffect, useRef, useState } from "react";

// setting limit to minimum 0 and maximum 5

const Home = () => {
  const [count, setCount] = useState(0);

  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    // Initially apply the "slide-up" class to hide the content
    page.classList.add("slide-up");

    // Add a slight delay before triggering the "slide-up-visible" class for the animation
    setTimeout(() => {
      page.classList.add("slide-up-visible");
    }, 100); // Add a small delay to let the DOM render before the animation starts
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen w-full flex justify-center items-center flex-col bg-black gap-10"
    >
      <div className="flex flex-col justify-center items-center gap-2 bg-gray-400 w-11/12 p-5">
        <button
          onClick={() => setCount((prev) => (prev < 5 ? prev + 1 : prev))}
          className="bg-white text-black px-10 py-2 rounded-full font-semibold tracking-wider"
        >
          Increase
        </button>
        <h1 className="text-[50px] font-bold text-white">{count}</h1>
        <button
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
          className="bg-red-600 text-white px-10 py-2 rounded-full font-semibold tracking-wider"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Home;
