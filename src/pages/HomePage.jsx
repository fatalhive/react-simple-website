import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Jobs from "../components/Jobs";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Jobs isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
