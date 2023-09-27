import Result from './components/Result';
import Summary from './components/Summary';
import Card from './components/Card';

import reaction from './assets/icon-reaction.svg';
import memory from './assets/icon-memory.svg';
import verbal from './assets/icon-verbal.svg';
import visual from './assets/icon-visual.svg';

const App = () => {
  const summary = [
    {
      img: reaction,
      title: 'Reaction',
      point: 80,
      color: 'text-light-red',
      bg: 'bg-light-red-o',
    },
    {
      img: memory,
      title: 'Memory',
      point: 92,
      color: 'text-orangey-yellow',
      bg: 'bg-orangey-yellow-o',
    },
    {
      img: verbal,
      title: 'Verbal',
      point: 61,
      color: 'text-green-teal',
      bg: 'bg-green-teal-o',
    },
    {
      img: visual,
      title: 'Visual',
      point: 72,
      color: 'text-cobalt-blue',
      bg: 'bg-cobalt-blue-o',
    },
  ];

  return (
    <Card>
      <Result />
      <Summary summaryData={summary} />
    </Card>
  );
};

export default App;
