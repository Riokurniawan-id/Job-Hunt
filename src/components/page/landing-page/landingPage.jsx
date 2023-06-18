import Header from "../../organisms/header";

function LandingPage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="container xl:px-32 bg-hero-pattern bg-left sm:bg-right">
        <Header
          header="Discover more than"
          headerSpan="5000+ Jobs"
          description="Great platform for the job seeker that searching for new career heights and passionate about startups."
        />
      </div>
    </>
  );
}

export default LandingPage;
