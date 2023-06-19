import LandingPage from "../components/page/landing-page/landingPage";
import FindJobs from "../components/page/find-jobs/findJobs";
import BrouseCompanies from "../components/page/browse-companies/brouseCompanies";
import DesignSystem from "../components/page/design-system/design-system";

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
  {
    Element: <DesignSystem />,
    path: "/Design-System",
    key: "Design System",
  },
];

export default PublicRouters;
