import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/image/mi.jpg'
import img2 from '../../assets/image/rr.png'
import img3 from '../../assets/image/dd.jpg'

function IPLTeams(){
    return(
        <div>
            <ul>
                <li>
                    <h3>Mumbai Indians</h3>
                    <Link to={{
                        pathname:'/team-details',
                        props:{
                            team_name:'Mumbai Indians',
                            owner:'Nita Ambani',
                            head_coach:'Mahela Jayawardene',
                            bowling_coach:'Shane Bond',
                            logo:img1
                        }
                    }}>
                    <img
                        src={img1}
                        alt=""
                        width={250}
                        height={250}
                    />

                    </Link>
                </li>

                <li>
                    <h3>Rajasthan Royals</h3>
                    <Link to={{
                        pathname:'/team-details',
                        props:{
                            team_name:'Rajasthan Royals',
                            owner:'Manoj Badale,Lachlan Murdoch',
                            head_coach:'Andrew McDonald',
                            bowling_coach:'Sairaj Bahutule',
                            logo:img2
                        }
                    }}>
                    <img
                        src={img2}
                        alt=""
                        width={250}
                        height={250}
                    />

                    </Link>
                </li>

                <li>
                    <h3>Delhi Daredevils</h3>
                    <Link to={{
                        pathname:'/team-details',
                        props:{
                            team_name:'Delhi Daredevils',
                            owner:'GMR and JSW Group',
                            head_coach:'Ricky Pointing',
                            bowling_coach:'Eric Simons,Robin Singh',
                            logo:img3
                        }
                    }}>
                    <img
                        src={img3}
                        alt=""
                        width={250}
                        height={250}
                    />
                    </Link>
                </li>
        
            </ul>
        </div>
    )
}
export default IPLTeams;