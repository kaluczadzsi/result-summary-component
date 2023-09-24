const App = () => {
  return (
    <main>
      <div className="card sm:mx-6 bg-white shadow-2xl rounded-[25px] sm:justify-center sm:items-center sm:max-w-[1440px] sm:flex font-hanken font-medium">
        <figure className="sm:py-8 self-stretch sm:rounded-[25px] sm:  sm:flex-1 rounded-bl-[30px] rounded-br-[30px] results bg-gradient-to-b from-light-slate-blue to-light-royal-blue flex flex-col py-6 justify-center items-center">
          <header className="text-light-lavender mb-4 sm:mb-0">
            Your Result
          </header>
          <div className="sm:mb-8 sm:mt-8 sm:w-[180px] sm:h-[180px]  w-[130px] h-[130px] m-auto flex flex-col justify-center items-center border-1 rounded-full py- bg-gradient-to-b from-violet-blue to-persian-blue">
            <h1 className="sm:text-[4rem] text-white text-[3rem] font-bold -mb-2">
              76
            </h1>
            <span className="text-light-lavender text-sm opacity-[0.4]">
              of 100
            </span>
          </div>
          <p className="mt-4 mb-2 text-white text-lg sm:mb-0 sm:text-2xl">
            Great
          </p>
          <p className=" text-center mb-2  text-[14px] w-[60%] m-auto text-light-lavender opacity-[0.8]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </figure>
        <figure className="sm:py-8 sm: flex-1 px-6 summary py-6 flex flex-col">
          <header className="self-left mb-6 text-dark-gray-blue font-extrabold">
            Summary
          </header>
          <ul className="w-full flex flex-col gap-4 mb-8">
            <li className="bg-light-red flex items-center justify-between p-4 rounded-lg">
              <div className="flex gap-2">
                <img src="src\assets\icon-reaction.svg" />
                <span className="text-[#ff5757]">Reaction</span>
              </div>
              <div>
                80 <span className="text-gray-400">/ 100</span>
              </div>
            </li>
            <li className="bg-orangey-yellow flex items-center justify-between p-4 rounded-lg">
              <div className="flex gap-2">
                <img src="src\assets\icon-memory.svg" />
                <span className="text-[#ffb01f]">Memory</span>
              </div>
              <div>
                92 <span className="text-gray-400">/ 100</span>
              </div>
            </li>
            <li className="bg-green-teal flex items-center justify-between p-4 rounded-lg">
              <div className="flex gap-2">
                <img src="src\assets\icon-verbal.svg" />
                <span className="text-[#00bd91]">Verbal</span>
              </div>
              <div>
                61 <span className="text-gray-400">/ 100</span>
              </div>
            </li>
            <li className="bg-cobalt-blue flex items-center justify-between p-4 rounded-lg">
              <div className="flex gap-2">
                <img src="src\assets\icon-visual.svg" />
                <span className="text-[#1125d4]">Visual</span>
              </div>
              <div>
                72 <span className="text-gray-400">/ 100</span>
              </div>
            </li>
          </ul>
          <button className="py-4 inline-block text-white border-2 rounded-full bg-dark-gray-blue">
            Continue
          </button>
        </figure>
      </div>
    </main>
  );
};

export default App;
