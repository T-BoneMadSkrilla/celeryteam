import React,{Component} from 'react';
import './NavTop.css';

class NavTop extends Component {
    render(){
        return(
            <div className='topNavBox'>

                <div className='topNavHomeLink'>Home</div>

                <div className='topNavUserLinks'>
                    <div> Create my List </div>
                    <div> Dashboard </div>
                    <div> Accounts </div>
                </div>

            </div>
        )
    }
}

export default NavTop;