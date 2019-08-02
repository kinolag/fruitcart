import React from 'react';
// import { NavLink } from 'react-router-dom';

import OrderCreator from './OrderCreator';
import offers from './offers-get';

export default class Selector extends React.Component {

    constructor() {
        super();
        this.state = {
            offerId: '0'
        };
    }

    setOffer(e) {
        this.setState({
            offerId: e.target.value
        }
            // , () => { console.log(this.state.offerId); }
        );
    }

    // returning data from child (OrderCreator) to parent, in this case for the final restart
    // NB this has to be an arrow function!
    returnOfferId = (returnedId) => {
        this.setState({
            offerId: returnedId
        });
    }

    render() {
        return (
            <>
                <div className='cell left pad-10 mar-10'>
                    <p className='is-red pad-5'>Select Offer </p>

                    {/* issue: onChange returns the selected value, not the complete event */}
                    <select
                        className='txt-12 space-04'
                        value={this.state.offerId}
                        onChange={(e) => this.setOffer(e)}
                    >
                        {/* mapping, instead of hardcoding value and label ie
                            <option value='0'>
                                {offers[0]}
                            </option> */}
                        {
                            Object.keys(offers).map(
                                item =>
                                    <option
                                        key={item}
                                        value={item}>
                                        {Object.values(offers)[item]}
                                    </option>
                            )
                        }
                    </select>
                </div>

                {/* Passing parameter to child components */}

                <OrderCreator offerId={this.state.offerId} callbackFromSelector={this.returnOfferId}/>
                {/* {console.log(this.state.offerId)} */}

            </>
        );
    }

}