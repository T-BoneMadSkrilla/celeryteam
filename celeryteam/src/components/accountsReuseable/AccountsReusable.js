import React,{Component} from 'react';
import './AccountsReusable.css';

class AccountsReusable extends Component {
    constructor(){
        super()
        this.state = {
            editable: false,
            account: [{companyName: 'CeleryCrm', location: 'Dallas', revenue: '5 Billion', industry: 'Tech', decisionMaker: 'Tyler Eftink', importantNote: '', opportunity: ''}]
        }
    }

    
    render(){
        const editable = this.state.editable
        const accounts = this.state.account.map((e, i) => {
            return(
                <div key={i}>
                {e.companyName}
                {e.location}
                {e.revenue}
                {e.indsutry}
                {e.decisionMaker}
                {e.importantNote}
                {e.opportunity}
                <div onClick={()=>this.setState({editable: !editable})}> EDIT </div>
                {editable && <div> now this is editable </div>}
                </div>
            )
        })

        return(
            <div>
                {accounts}
            </div>
        )
    }
}

export default AccountsReusable;
