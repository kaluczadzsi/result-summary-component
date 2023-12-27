import SummaryItem from "./SummaryItem";
import Button from "./Button";
const Summary = ({ summaryData }) => {
  return (
    <figure className="sm:py-8 w-full sm:w-1/2 px-6 summary py-6 flex flex-col">
      <header className="text-xl self-left mb-6 text-dark-gray-blue font-extrabold">
        Summary
      </header>
      <ul className="w-full flex flex-col gap-4 mb-8">
        {summaryData.map((summary) => (
          <SummaryItem
            key={summary.title}
            img={summary.img}
            title={summary.title}
            point={summary.point}
            color={summary.color}
            bg={summary.bg}
          />
        ))}
      </ul>
      <Button />
    </figure>
  );
};

export default Summary;
