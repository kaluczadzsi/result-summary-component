const Result = () => {
  return (
    <figure className="figure sm:py-8 self-stretch sm:rounded-[25px] sm:  sm:flex-1 rounded-bl-[30px] rounded-br-[30px] results bg-gradient-to-b from-light-slate-blue to-light-royal-blue flex flex-col py-6 justify-center items-center">
      <header className="text-light-lavender mb-4 sm:mb-0">Your Result</header>
      <div className="sm:mb-8 sm:mt-8 sm:w-[180px] sm:h-[180px]  w-[130px] h-[130px] m-auto flex flex-col justify-center items-center border-1 rounded-full py- bg-gradient-to-b from-violet-blue to-persian-blue">
        <h1 className="sm:text-[4rem] text-white text-[3rem] font-bold -mb-2">
          76
        </h1>
        <span className="text-light-lavender text-sm opacity-[0.4]">
          of 100
        </span>
      </div>
      <p className="mt-4 mb-2 text-white text-lg sm:mb-0 sm:text-2xl">Great</p>
      <p className=" text-center mb-2  text-[14px] w-[60%] m-auto text-light-lavender opacity-[0.8]">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </figure>
  );
};

export default Result;
