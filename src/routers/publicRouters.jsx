import LandingPage from "../components/page/landing-page/landingPage";
import FindJobs from "../components/page/find-jobs/findJobs";
import BrouseCompanies from "../components/page/browse-companies/brouseCompanies";

const PublicRouters = [
  {
    Element: <LandingPage />,
    path: "/",
    key: "Landing Page",
  },
  {
    Element: <FindJobs />,
    path: "/Find-Jobs",
    key: "Find Jobs",
  },
  {
    Element: <BrouseCompanies />,
    path: "/Brouse-Companies",
    key: "Brouse Companies",
  },
];

export default PublicRouters;
