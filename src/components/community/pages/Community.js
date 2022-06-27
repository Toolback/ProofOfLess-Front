import "../../../css/community/Community.css"
import React from 'react';
// import arrow from "../../../assets/Arrow.png"
import proof from "../../../assets/ProofDesign.png"
import chall from "../../../assets/ChallengeDesign.png"

// import NavBar from '../components/NavBar'

const Community = () => {
    return (
        <div className="Community-box-container noselect">

            <div className="Community-Pres Community-Pres1">
            <div className="Community-ImgPresContainer"><img className="Community-ImgPres" src={chall} alt=""/></div>
                <div className="Community-TextPres ">
                    <p>Proofs will be based on external data sources based on which we'll compute statistical indicators (mainly activity averages) that will serve as base indicators to determine if the user did less. Each proof will custom based on the quest objective.
                        Once the quest starts we'll take a snapshot of the user activity for a certain period of time. When the quest is over a second snapshot will occur and will allow comparison.
                        The snapshots will be stored in a custom oracle that will feed the smart contract responsible for distributing the funds once the challenge ended.
                    </p>

                </div>
            </div>

            <div className="Community-Pres Community-Pres2">
                <div className="Community-ImgPresContainer"><img className="Community-ImgPres" src={proof} alt=""/></div>
                <div className="Community-TextPres">

                    <p>Proofs will be based on external data sources based on which we'll compute statistical indicators (mainly activity averages) that will serve as base indicators to determine if the user did less. Each proof will custom based on the quest objective.
                        Once the quest starts we'll take a snapshot of the user activity for a certain period of time. When the quest is over a second snapshot will occur and will allow comparison.
                        The snapshots will be stored in a custom oracle that will feed the smart contract responsible for distributing the funds once the challenge ended.
                    </p>

                </div>
            </div>

            <div className="Community-CTA noselect"><a href="/app"><button>START YOUR QUEST NOW</button></a></div>


        </div>
    )
}

export default Community;