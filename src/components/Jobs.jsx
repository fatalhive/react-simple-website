/* eslint-disable react/prop-types */
import CustomLoader from "./CustomLoader";
import Job from "./Job";
import { useEffect, useState } from "react";

const Jobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async function () {
      try {
        const apiUrl = `/api/jobs` + `${isHome ? "?_limit=3" : ""}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(getData, 3000);
  }, [isHome, jobs]);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Browse Jobs" : "All Jobs"}
          </h2>
          {loading ? (
            <CustomLoader loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => {
                return <Job key={job.id} job={job} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Jobs;
