import { BarChart } from "./BarChart";


const WorkProgress = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    title: "Sales",
    values: [100, 200, 300, 400, 500, 600],
  };

  return (
    <div>
      <BarChart data={data} />
    </div>
  );
};

export default WorkProgress;
