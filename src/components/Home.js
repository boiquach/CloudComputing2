import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return(

            <div>
                <div className="banner">
              <div className="title_text"><h1>Clean Up</h1>
              <br/>
              
                
              <a className="button home" href="/join_site" >Join</a> 
                
                <a className="button home" href="/create_site">Create</a>
                </div>
                
        </div>
            </div>
        )
    }
}

export default Home