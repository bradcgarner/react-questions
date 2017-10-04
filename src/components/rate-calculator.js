import React from 'react';

import NumberInput from './number-input';
import Output from './output';


export default class RateCalculator extends React.Component { 
    constructor(props) { // rules for needing this line? Is constructor a method of React.Component
                         //   and therefore a method of its child RateCalculator?
                         // If this were a stateless class, could be skip line 8?
                         // What does the props argument do on line 8? Allow the constructor access to props passed when RateCalculator is invoked?
        super(props);    // what are the rules for needing this line? What does this do? Allow the constructor access to props passed when RateCalculator is invoked?
        this.state = {   // On this line, are we creating the property state? Or is it already created, and we are assigning a value to it?
            dayRate: 300, // If we set an initial value to state, is the constructor method where we always do that?
            hours: 8
        };
    }

    setDayRate(dayRate) { // is this still called a "method" in react? I.e. "constructor" is an inherited method but setDayRate is a custom method?
        this.setState({   // Should we just memorize that React method declarations have different syntax than vanilla JS?
            dayRate       // E.g. no "function" and no fat arrow?
        });               //  Or are there some rules about when "function" or fat arrow would be used in React method delcarations?
    }

    setHours(hours) {
        this.setState({
            hours
        });
    }

    calcRate() {
        return this.state.dayRate / this.state.hours;
    }

    render() {
        const rate = this.state.dayRate / this.state.hours;  // is our const rate the same as calcRate()?
                                                             // E.g. could we substitute "rate" with "calcRate()" below and achieve the same results?
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                    val={this.state.dayRate}                // Val is a prop. Props can have [almost] any name.  ...?
                    onChg={v => this.setDayRate(v)} />  {/* onChg is a prop.  Would we call this a prop declaration?
                                                            What are the rules for the 1st argument (v) here? 
                                                            in this case, v is e.target.value from NumberInput
                                                            Is this because v is just an argument (could represent anything),
                                                            and when invoked in NumberInput e.target.value is passed in???
                                                          */}
                <NumberInput id="hours" label="Hours" min={1} max={12}
                    val={this.state.hours}
                    onChg={v => this.setHours(v)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
            </form>
        );
    }
}
