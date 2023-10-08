import { Link, useLocation } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";


const ServiceDetails = ({ single, service, addData }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { id, name, img, details } = service;

  return (
    <div className="mr-5 mb-8">
      <div
        className={`bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
          single ? "mx-auto max-w-7xl" : "max-w-sm"
        }`}
      >
        <img className="h-72 rounded-t-lg" src={img} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {single ? details : details.slice(0, 135)}...
          </p>
          <div className="flex justify-between items-center">
            {single ? (
              <Link
                to={`/`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                back
              </Link>
            ) : (
              <Link
                to={`/services/${id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Details
              </Link>
            )}
            {pathname === "/bookmark" ? (
              ""
            ) : (
              <button
                onClick={() => addData(id)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-500"
              >
                <BsBookmark />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
