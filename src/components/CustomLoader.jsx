/* eslint-disable react/prop-types */
import PuffLoader from "react-spinners/PuffLoader";

const CustomLoader = ({ loading }) => {
  return (
    <div className="flex justify-center items-center min-w-screen">
      <PuffLoader
        color="rgb(99 102 241)"
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default CustomLoader;
