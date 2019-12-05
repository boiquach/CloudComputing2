import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (

            <div>
                <div className="banner">
                    <div className="title_text"><h1>Viet Nam Sach va Xanh</h1>
                        <br />


                        <a className="button home" href="/join_site" >Join a Clean Up</a>

                        <a className="button home" href="/create_site">Organize a Clean Up</a>
                    </div>

                </div>
                <div className="container">
                    <div className="align txt">
                    <div className="home_text">
                        <div className="home_text_align">
                        <h4>Welcome to Keep Vietnam Clean and Green</h4>
                        <p>
                    Vietnam Clean and Green’s mission is to reduce littering in Vietnam and to bring about momentous societal change. We’ll raise public awareness about the negative impacts of littering and highlight the importance of individual responsibility. To accomplish this mission, we seek to cooperate with companies, educational institutions, government agencies, NGOs and anyone else who believes in a cleaner country and world.
                    </p>


                        </div>
                    </div>
                    <div>
                    <img style={{width:`300px`,height:`300px`}} src="tree.png" />
                        {/* <img style={{width:`60px`,height:`60px`}} src="home.png" /> */}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home