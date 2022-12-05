import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AchievementsAdd from "./pages/AchievementsAdd";
import WorkExpEdit from "./pages/WorkExpEdit";
import EducationEdit from "./pages/EducationEdit";
import AchievementsEdit from "./pages/AchievementsEdit";
import WorkExpAdd from "./pages/WorkExpAdd";
import EducationAdd from "./pages/EducationAdd";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import WorkExp from "./pages/WorkExp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/workexp-edit":
        title = "";
        metaDescription = "";
        break;
      case "/education-edit":
        title = "";
        metaDescription = "";
        break;
      case "/achievements-edit":
        title = "";
        metaDescription = "";
        break;
      case "/workexp-add":
        title = "";
        metaDescription = "";
        break;
      case "/education-add":
        title = "";
        metaDescription = "";
        break;
      case "/education":
        title = "";
        metaDescription = "";
        break;
      case "/achievements":
        title = "";
        metaDescription = "";
        break;
      case "/workexp":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AchievementsAdd />} />

      <Route path="/workexp-edit" element={<WorkExpEdit />} />

      <Route path="/education-edit" element={<EducationEdit />} />

      <Route path="/achievements-edit" element={<AchievementsEdit />} />

      <Route path="/workexp-add" element={<WorkExpAdd />} />

      <Route path="/education-add" element={<EducationAdd />} />

      <Route path="/education" element={<Education />} />

      <Route path="/achievements" element={<Achievements />} />

      <Route path="/workexp" element={<WorkExp />} />
    </Routes>
  );
}
export default App;
