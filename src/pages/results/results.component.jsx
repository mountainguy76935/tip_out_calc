import React from 'react';
import "./results.styles.css";

class Results extends React.Component{
    convertToCents = (val) => {
        val = (Math.floor(val*100))/100;
        val = (val-Math.floor(val))<.5 ? Math.floor(val) : (Math.floor(val)+1);
        return val;
    }

    render() {
        const duBaStart = this.props.net_sales - this.props.food_sales - this.props.retail_sales - this.props.at_sales;
        const duBa = this.props.bartender ? this.convertToCents((duBaStart) * .06): 0;
        const duBaAt = this.props.bartender ? this.convertToCents(this.props.at_sales * .03) : 0;
        const expoTip = this.props.expo ? this.convertToCents(this.props.food_sales * .02) : 0;
        const hostTip = this.props.host ? this.convertToCents(this.props.food_sales*(.005) + this.props.at_sales*(.005)) : 0;
        const busserTip = this.props.busser ? this.convertToCents(this.props.net_sales * .02) : 0;
        const tipTotal = this.convertToCents((duBa + expoTip + hostTip + busserTip + duBaAt) + parseInt(this.props.amount_owed));
        console.log(tipTotal);
        return(
            <div className = "the_results">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>scroll down......</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>scroll down......</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>scroll down......</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>
                    Here are your totals!!
                </h1>
                <br />
                <br />
                <br />
                <br />
                <p>Total Net Sales = {this.props.net_sales ? this.props.net_sales : "you didn't sell anything today??? Super wierd"}</p>
                <p>duba = {this.props.bartender ? duBaStart : "no bartender!"}</p>
                <p>Food sales = {this.props.food_sales > 0 ? this.props.food_sales : "you didn't sell any food today??? Wierd"}</p>
                <p>AT Food Sales = {this.props.at_sales > 0 ? this.props.at_sales : "No AT today? Glad you didn't have to deal with that madness...."}</p>
                <p>expo tip out= {this.props.expo ? expoTip : 'no expo!'}</p>
                <p>bartender tip out= {this.props.bartender ? duBa : "no bartender!"}</p>
                <p>bartender tip out (Afternoon Tea)= {this.props.bartender ? duBaAt : "no bartender!"}</p>
                <p>host tip out= {this.props.host ? hostTip : "no host!"}</p>
                <p>busser tip out= {this.props.busser ? busserTip : "no busser!"}</p>
                <h2 className = "results">{ tipTotal > 0 ? `BOOOO you owe $${tipTotal} to house!` : tipTotal < 0 ? `You get $${Math.abs(tipTotal)} for being an awesome server!`: `You owe NOTHING. congratulations, I guess!?! `}</h2>
            </div>
        )
    }
}

export default Results;