import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path="/course_detail" element={<SingleCourse />} />
        </Route>
      </Routes>
    </Router>
  );
}
