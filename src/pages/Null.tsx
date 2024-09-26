const NullPage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <img src="/bg.png" alt="Background" className="absolute -z-10 h-screen w-screen" />
      <div className="container mt-20 flex w-full flex-col overflow-y-scroll p-10">
        <span>404</span>
      </div>
    </div>
  );
};

export default NullPage;
