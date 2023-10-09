import { BarChart } from "./BarChart";


const WorkProgress = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    title: "Sales",
    values: [100, 200, 300, 400, 500, 600],
  };

  return (
    <div
      className="w-6/12 mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2000"
    >
      <BarChart data={data} />
    </div>
  );
};

export default WorkProgress;
