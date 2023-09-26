import SummaryItem from './SummaryItem';
import Button from './Button';
const Summary = ({ summaryData }) => {
  return (
    <figure className="sm:py-8 sm: flex-1 px-6 summary py-6 flex flex-col">
      <header className="self-left mb-6 text-dark-gray-blue font-extrabold">
        Summary
      </header>
      <ul className="w-full flex flex-col gap-4 mb-8">
        <SummaryItem
          img={summaryData[0].img}
          title={summaryData[0].title}
          point={[summaryData[0].point]}
          color={summaryData[0].color}
          bg={summaryData[0].bg}
        />

        <SummaryItem
          img={summaryData[1].img}
          title={summaryData[1].title}
          point={[summaryData[1].point]}
          color={summaryData[1].color}
          bg={summaryData[1].bg}
        />

        <SummaryItem
          img={summaryData[2].img}
          title={summaryData[2].title}
          point={[summaryData[2].point]}
          color={summaryData[2].color}
          bg={summaryData[2].bg}
        />

        <SummaryItem
          img={summaryData[3].img}
          title={summaryData[3].title}
          point={[summaryData[3].point]}
          color={summaryData[3].color}
          bg={summaryData[3].bg}
        />
      </ul>
      <Button />
    </figure>
  );
};

export default Summary;
