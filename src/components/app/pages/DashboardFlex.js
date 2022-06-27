import "../../../css/app/DashboardFlex.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import avatarDonut from "../../../assets/avatarDonut.png"


const DashboardFlex = (props) => {

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
    <div className="Dashboard-box-container noselect">


      <div className="Dashboard-globalStats-container ">
        <div className="Dashboard-globalStats-Title">
          <h2>Dashboard</h2>
        </div>
        <div className="Dashboard-globalStats-Stats">
          <div className="Dashboard-globalStats-statUnit">
            <h2>6</h2>
            <p>Pending Challenge</p>
          </div>
          <div className="Dashboard-globalStats-statUnit">
            <h2>32</h2>
            <p>Quests to Approve</p>
          </div>
          <div className="Dashboard-globalStats-statUnit">
            <h2>See More</h2>
            <p>Wall Of Fame</p>
          </div>
        </div>
      </div>

      <div className="Dashboard-profil-container Dashboard-MultiBoxContainer">
        <div className="Dashboard-profil-Title">
          <h2>Profil</h2>
        </div>
        <div className="Dashboard-profil-InfosContainer-left-top">
              <img src={avatarDonut} alt="userAvatar" className="avatar-persona" />
            </div>
        <div className="Dashboard-profil-InfosContainer">
          <div className="Dashboard-profil-InfosContainer-left">

            <h3>Verified Accounts </h3>
            <div className="Dashboard-profil-InfosContainer-left-bottom">

              <div className="Dashboard-profil-InfosContainer-left-bottom-left">
                <p>Name : DevleDev</p>
                <p>Email : Enter Email Here 📝</p>
                <p>Public Address : 0xDev</p>
              </div>
              <div className="Dashboard-profil-InfosContainer-left-bottom-right">
                <p>Twitter : @DevleDev ✅</p>
                <p>Youtube: @DevleDev ✅</p>
                <p>Instagram: @DevleDev ✅</p>
                <p>Phone Number : Complete Verification 📝</p>
              </div>
            </div>

          </div>
          <div className="Dashboard-profil-InfosContainer-right">
            <h3>Nft Statistics</h3>
            <div className="Dashboard-profil-InfosContainer-right-bottom">

              <div className="Dashboard-profil-InfosContainer-right-bottom-left">
              <p>Experience : level 10</p>
                <p>Quest Accepted: 56</p>
                <p>Quest Completed: 32 </p>
                <p>Friend Challengend : 2 </p>
              </div>
              <div className="Dashboard-profil-InfosContainer-right-bottom-right">
                <p>Dao Proposal Created : 3 </p>
                <p>Dao Proposal Created Accepted: 1</p>
                <p>Dao Proposal Voted: 102 </p>
                <p>Challenge Received : 12 </p>
                <p>Challenge Completed : 8 </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Dashboard-stats-container Dashboard-MultiBoxContainer">
        <h3>Statistics</h3>

        <div className="Dashboard-statistics-card1">
          <div className="Dashboard-statistics-card1-text">
            <h4>Personal Statistics</h4>
          </div>
          <div className="Dashboard-persoStats-box-cards">
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


  )
}

export default DashboardFlex;