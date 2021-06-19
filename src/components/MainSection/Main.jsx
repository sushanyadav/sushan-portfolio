const Main = () => {
  return (
    <div className="mt-xl mb-lg container text-gray-900">
      <h1 className="font-black   text-8.5xl">
        Hi!
        <br />
        I&apos;m
        <span
          className="italic text-black"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
        >
          {" "}
          Sushan.
        </span>
      </h1>
      <h2 className="mt-5 text-5xl text-gray-600 font-bold  leading-extra-loose">
        Frontend Developer based in Nepal.
      </h2>
      <p className="mt-16  text-4.5xl">
        Currently, looking for the next opportunity to create beautiful user
        interfaces.
      </p>
    </div>
  );
};

export default Main;
