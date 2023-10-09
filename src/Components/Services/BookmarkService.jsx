import { useEffect, useState } from "react";
import mainData from "../../data/event.json";
import ServiceDetails from "./ServiceDetails";

const BookmarkService = () => {
  const ids = JSON.parse(localStorage.getItem("data"));
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    // Use Array.filter() to filter the main data based on the IDs in the 'ids' array
    if (ids) {
      const filteredData = mainData.filter((item) => ids.includes(item.id));
      setData(filteredData);
    }
  }, []);
if (ids) {
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4  mx-auto xl:w-10/12 xl:my-10 my-6 justify-center  ">
        {data.map((service) => (
          <ServiceDetails key={service.id} service={service}></ServiceDetails>
        ))}
      </div>
    );
    }
else {
    return <div> 
        <h1 className="text-7xl grid justify-center items-center font-bold text-center  h-screen">not added to Bookmark</h1>
    </div>
    }
};

export default BookmarkService;
