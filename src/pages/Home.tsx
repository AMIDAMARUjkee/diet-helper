import Header from "../layouts/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main__home">
        <div>
          Welcome to diet helper website. Here you can calculate your daily calories norm. And find
          out your meal calories.
        </div>
      </main>
    </>
  );
};

export default Home;
