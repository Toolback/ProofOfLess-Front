import React from 'react';
import '../css/HomePage.css';
// import lessLogo from "../assets/LessLogo.png"
import heroDesign from "../assets/HeroDesign.png"

// import eth_logo from '../assets/social-media-icons/protocols/x500/ethx500.png';
// import polygon_logo from '../assets/social-media-icons/protocols/x500/polygonx500.png';
// import arbitrum_logo from '../assets/social-media-icons/protocols/x500/Arbitrumx500.png';
// import optimism_logo from '../assets/social-media-icons/protocols/x500/optimismx500.png';


const HomeFront = () => {
  return (
    <div className="Home-general-container">
      <div className="Home-hero-title&logo">
        <h2 className='Home-title noselect'>Proof Of Less</h2>

        <img src={heroDesign} className="Home-treePlant-image noselect" alt=""/>
      </div>

      <div className="Home-lessismore">
        <p className='noselect'>Less is more. Earn rewards for doing less TWEETING</p>
      </div>

      <div className="Home-buttons-app">
        <a href="/app"><button className='hba noselect'>Go to App</button></a>
        <a href="/community"><button className='hba noselect'>Go to Docs</button></a>
      </div>


      {/* <div className="Home-statsDetails">
          <div className="Home-stats-container">
            <p className="hsd-bold">$Less 10.39B</p>
            <p className="hsd-t">Total Rewards</p>
          </div>

          <div className="Home-stats-container">
            <p className="hsd-bold">7M</p>
            <p className="hsd-t">Total Users</p>
          </div>

          <div className="Home-stats-container">
            <p className="hsd-bold">9K</p>
            <p className="hsd-t">Total Quests</p>
          </div>
        </div> */}

      {/* <div className="Home-chains">
          <div className="Home-chains-container"><img src={eth_logo} className="Home-chains-logo" alt="" /></div>
          <div className="Home-chains-container"><img src={polygon_logo} className="Home-chains-logo" alt="" /></div>
          <div className="Home-chains-container"><img src={arbitrum_logo} className="Home-chains-logo" alt="" /></div>
          <div className="Home-chains-container"><img src={optimism_logo} className="Home-chains-logo" alt="" /></div>
        </div> */}

    </div>
  )
}

export default HomeFront;
