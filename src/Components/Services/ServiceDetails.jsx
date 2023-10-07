import { Link } from "react-router-dom";

const ServiceDetails = ({ single, service }) => {
  const { id, name, img, details } = service;
  return (
    <div>
      <div
        className={` bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700  ${
          single ? " mx-auto max-w-7xl" : "max-w-sm"
        }`}
      >
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {single ? details : details.slice(0, 150)}...
          </p>
          {single ? (
            <Link
              to={`/`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              back
            </Link>
          ) : (
            <Link
              to={`/services/${id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
