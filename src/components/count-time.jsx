import { Component } from 'react';

class CountTime extends Component {
    render() {

        const time = this.props;

        const firstValue = Number(time.firstTime);
        const secondValue = Number(time.secondTime);

        const time_result = 0;

        if (time.operator === "+") {
            const time_result = firstValue + secondValue;
            // return time_result;
        }
        
        const timeString = "01:24:31";
        const timeStringSplit = timeString.split(':');
        // const answer_array = answer.split(',');



        return (
        	<div>
                {/* <h1>{time_result}</h1> */}
                <h2>{timeStringSplit[0]}</h2>
        	</div>
        );
    }
}

export default CountTime;
