const SummaryItem = ({ img, title, point, color, bg }) => {
  return (
    <li className={`${bg} flex items-center justify-between p-4 rounded-lg`}>
      <div className="flex gap-2">
        <img src={img} />
        <span className={`${color}`}>{title}</span>
      </div>
      <div>
        {point}
        <span className="text-gray-400"> / 100</span>
      </div>
    </li>
  );
};

export default SummaryItem;
