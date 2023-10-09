import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";
import toast from "react-hot-toast";

const Services = () => {
  const [services, setServices] = useState([]);

  const [data, setData] = useState([]);

  
  useEffect(() => {
    // Load data from localStorage when the component mounts
    const oldData = JSON.parse(localStorage.getItem("data"));
    if (oldData) {
      setData(oldData);
    }
  }, []);

  const addData = (id) => {
    if (!data.includes(id)) {
      // Append the new id to the existing data
      const newData = [...data, id];
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      toast.success("success");
    } else if (data.includes(id)) {
      toast("already added");
    }
  };

  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //   console.log(services);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4  mx-auto xl:w-10/12 xl:my-10 my-6 justify-center   ">
      {services.map((service) => (
        <ServiceDetails
          addData={addData}
          key={service.id}
          service={service}
        ></ServiceDetails>
      ))}
    </div>
  );
};

export default Services;
