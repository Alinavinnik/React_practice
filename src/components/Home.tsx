const Home = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-between gap-12">
      <div className="max-w-xl -translate-y-20 pl-4">
        <p className="mb-4 font-medium text-text-accent">
          React Practice Playground
        </p>

        <h1 className="mb-6 text-6xl font-bold leading-tight text-text-primary">
          Practice. Code.
          <span className="block text-text-accent">Get better.</span>
        </h1>

        <p className="max-w-lg text-lg leading-8 text-text-secondary">
          A personal playground for building React features from scratch,
          practicing frontend logic, and becoming a more confident developer.
        </p>
      </div>

      <div
        className="
      h-125
      w-full
      max-w-3xl
      bg-(image:--hero-img)
      bg-contain
      bg-center
      bg-no-repeat
    "
      />
    </section>
  );
};

export default Home;
