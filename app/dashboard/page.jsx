import Card from "../ui/dashboard/card/card";

const Dashboard = () => {
  return (
    <div className="wrapper flex mt-5 gap-5 min-h-96">
      <div className="main flex flex-col gap-5" style={{ flex: 3 }}>
        <div className="cards flex justify-between gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
