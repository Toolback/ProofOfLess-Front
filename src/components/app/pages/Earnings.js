import React from 'react';
import"../../../css/app/Earnings.css"
// import EarningsDesign from "../../../assets/EarningsIcon.png"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Earnings = () => {
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
    <div className='Earnings-box-container noselect'>



    {/* <div className="Earnings-nav-buttons-container">
        <button className="EarningsNavButtons">Join</button>
        <button className="EarningsNavButtons">Create</button>
    </div> */}

    <div className="Earnings-Container-Title">
        <h3>Summary</h3>
          </div>
          


    <div className="Earnings-users-stats-container  Community-gridItemContainer3">
              <div className='Earnings-users-stats-bg'>
                  <h4>870 Dai</h4>
                  <p>Total in Waiting Pools</p>
        </div>
              <div className='Earnings-users-stats-bg'>
              <h4>10 Dai</h4>
                  <p>Total Lock in Quests Pools</p>
              </div>
              <div className='Earnings-users-stats-bg'>
              <h4>140 Less</h4>
                  <p>Total Earn</p>
              </div>
              <div className='Earnings-users-stats-bg'>
              <h4>140 Less</h4>
                  <p>Total Lock in Nft</p>
        </div>
    </div>


          <div className="Earnings-users-list-container  Community-gridItemContainer4">
              <h3>Earnings</h3>
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
  )
}

export default Earnings;