const App = () => {
  return (
    <main>
      <div className="card  font-hanken font-medium">
        <figure className="rounded-bl-[30px] rounded-br-[30px] results bg-gradient-to-b from-light-slate-blue to-light-royal-blue flex flex-col  py-6 justify-center items-center">
          <header className="text-light-lavender mb-4">Your Result</header>
          <div className=" w-[130px] h-[130px] m-auto flex flex-col justify-center items-center border-1 rounded-full py- bg-gradient-to-b from-violet-blue to-persian-blue">
            <h1 className="text-white text-[3rem] font-bold -mb-2">76</h1>
            <span className="text-light-lavender text-sm opacity-[0.4]">
              of 100
            </span>
          </div>
          <p className="mt-4 mb-2 text-white text-lg">Great</p>
          <p className="mb-2 text-[14px] w-[60%] m-auto text-light-lavender opacity-[0.8]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </figure>
        <figure className="summary">
          <header className="text-light-slate-blue">Summary</header>
          <ul>
            <li>Reaction 80 / 100</li>
            <li>Memory 92 / 100</li>
            <li>Verbal 61 / 100</li>
            <li>Visual 72 / 100</li>
          </ul>
          <button>Continue</button>
        </figure>
      </div>
    </main>
  );
};

export default App;
