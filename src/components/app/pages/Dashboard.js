import "../../../css/app/Dashboard.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import avatarDonut from "../../../assets/avatarDonut.png"


const Dashboard = (props) => {

  const data = [
    {
      name: 'Monday',
      Total: 18
    },
    {
      name: "Tuesday ",
      Total: 13,
    },
    {
      name: "Wednesday ",
      Total: 9,
    },
    {
      name: "Thursday ",
      Total: 12,
    },
    {
      name: "Friday ",
      Total: 10,
    },
    {
      name: "Saturday  ",
      Total: 2,
    },
    {
      name: "Sunday  ",
      Total: 4,
    },
  ];

  return (
      <div className="dashboard-gridContainer">
  
  
        <div className="dashboard-gridItemContainer dashboard-gridItemContainer2">
          <div className="dashboard-hero-gridItem1">
            <h2>Dashboard</h2>
          </div>
          <div className="dashboard-hero-gridItem2">
            <div className="dashboard-hero-gridItem2-sub1">
              <h2>6</h2>
              <p>Pending Challenge</p>
            </div>
            <div className="dashboard-hero-gridItem2-sub2">
              <h2>32</h2>
              <p>Quests to Approve</p>
            </div>
            <div className="dashboard-hero-gridItem2-sub3">
              <h2>See More</h2>
              <p>Wall Of Fame</p>
            </div>
          </div>
        </div>
  
        <div className="dashboard-gridItemContainer dashboard-gridItemContainer3">
          <div className="dashboard-gridItemContainer-background">
            <div className="dashboard-profil-gridItem1">
              <h2>Profil</h2>
            </div>
            <div className="dashboard-profil-gridItem2">
              <div className="dashboard-profil-gridItem2-left">
                <div className="dashboard-profil-gridItem2-left-top">
                  <img src={avatarDonut} alt="userAvatar" className="avatar-persona" />
                  <p>Name : DevleDev</p>
                  <p>Email : Enter Email Here 📝</p>
                  <p>Public Address : 0xDev</p>
                </div>
                <div className="dashboard-profil-gridItem2-left-bottom">
                  <h3>Verified Accounts </h3>
                  <p>Twitter : @DevleDev ✅</p>
                  <p>Youtube: @DevleDev ✅</p>
                  <p>Instagram: @DevleDev ✅</p>
                  <p>Phone Number : Complete Verification 📝</p>
                </div>
              </div>
              <div className="dashboard-profil-gridItem2-right">
                <h3>Write Here</h3>
              </div>
            </div>
          </div>
        </div>
  
  
        <div className="dashboard-gridItemContainer dashboard-gridItemContainer4">
          <div className="dashboard-gridItemContainer-background">
            <h2>Earnings</h2>
            <div className="dashboard-earnings-card1">
              <div className="dashboard-earnings-card1-text">
                <h4>Personal Statistics</h4>
              </div>
              <div className="dashboard-persoStats-box-cards">
                <h2>1k3 usdt</h2>
                <ResponsiveContainer width="90%" aspect={2}>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 15,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
                    <XAxis dataKey="name" tick={{ fill: "#fff" }} />
                    <YAxis tick={{ fill: "#fff" }} />
                    <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
                    <Line type="monotone" dataKey="Total" stroke="#8884d8" strokeWidth="5" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }} />
  
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
  
        <div className="dashboard-gridItemContainer dashboard-gridItemContainer5">
          <h3>Statistics</h3>
  
          <div className="dashboard-statistics-card1">
            <div className="dashboard-statistics-card1-text">
              <h4>Personal Statistics</h4>
            </div>
            <div className="dashboard-persoStats-box-cards">
              <h2>1k3 usdt</h2>
              <ResponsiveContainer width="90%" aspect={2}>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
                  <XAxis dataKey="name" tick={{ fill: "#fff" }} />
                  <YAxis tick={{ fill: "#fff" }} />
                  <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
                  <Line type="monotone" dataKey="Total" stroke="#8884d8" strokeWidth="5" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }} />
  
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
  
  
        <div className="dashboard-gridItemContainer dashboard-gridItemContainer6" />
  
      </div>
  
  
)
}

export default Dashboard;