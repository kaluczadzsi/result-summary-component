const Card = ({ children }) => {
  return (
    <main className="card sm:mx-6 bg-white shadow-2xl rounded-[25px] sm:justify-center sm:items-center sm:max-w-[1440px] sm:flex font-hanken font-medium">
      {children}
    </main>
  );
};

export default Card;
