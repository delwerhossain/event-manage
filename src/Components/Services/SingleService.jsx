import { useParams } from "react-router-dom";
import data from "../../data/event.json";
import ServiceDetails from "./ServiceDetails";

const SingleService = () => {
  const { id } = useParams();
  const single = data.filter((service) => service.id == id);

  console.log(single);

  return (
    <div className="">
      {single.map((service) => (
        <ServiceDetails
          single={true}
          key={service.id}
          service={service}
        ></ServiceDetails>
      ))}
    </div>
  );
};

export default SingleService;
