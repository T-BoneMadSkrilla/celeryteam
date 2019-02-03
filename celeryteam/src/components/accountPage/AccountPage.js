import React,{Component} from 'react';
import './AccountPage.css';
import AccountsReusable from '../accountsReuseable/AccountsReusable';

class AccountPage extends Component {
    render(){
        return(
            <div className='accountPageOuterBox'>
                <div className='accountPageInnerBox'>
                    <AccountsReusable/>
                </div>
            </div>
        )
    }
}

export default AccountPage;