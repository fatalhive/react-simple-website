import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import "./index.css";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";

const App = () => {
  const AddJobRequest = async (job) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {},
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        <Route
          path="/addjob"
          element={<AddJob submitJobDetails={AddJobRequest} />}
        ></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <div className="hide-scrollbar">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
