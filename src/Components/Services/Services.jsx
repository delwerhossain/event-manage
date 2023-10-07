import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
//   console.log(services);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4  mx-auto xl:w-10/12 gap-3 justify-center items-center  ">
      {services.map((service) => (
        <ServiceDetails key={service.id} service={service}></ServiceDetails>
      ))}
    </div>
  );
};

export default Services;
