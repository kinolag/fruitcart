import React from 'react';
import prices from './prices-get';
import offers from './offers-get';
import fruits_1 from './img/apples_oranges_1.png';

export default class OrderCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantities: {
                apples: 0,
                oranges: 0
            },
            subtotal: 0,
            offer: this.props.offerId,
            discount: 0,
            total: 0
        };
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.offerId !== prevProps.offerId) {
            this.setState({
                offer: this.props.offerId
            },
                // trigger subtotal recalculation
                () => { this.subtotalCalc(this.state.quantities) }
            );
        }
    }

    resetter() {
        document.getElementById("item1").value = '';
        document.getElementById("item2").value = '';
    };

    restarter() {
        if (this.state.total < 0.01) {
            alert("Please add a fruit to your cart before placing an order")
        } else {
            this.resetter();
            this.setState({
                quantities: {
                    apples: 0,
                    oranges: 0
                },
                offer: '0'
            },
                // trigger offer reset and subtotal recalculation
                () => {
                    // callback from parent magic here
                    this.props.callbackFromSelector(this.state.offer);
                    this.subtotalCalc(this.state.quantities);
                }
            );
            alert("Thank you. Your order has been placed.")
        }

    };

    addToCart(event) {
        event.preventDefault(event);
        const apples = document.getElementById("item1").value;
        const oranges = document.getElementById("item2").value;

        let quantities = {
            apples,
            oranges
        };
        // console.log(`quantities: ${quantities}`);

        this.setState({
            quantities
        },
            () => {
                this.subtotalCalc(quantities);
                //console.log(this.state); // subtotal not updated here
            }
        );

    }

    subtotalCalc(quantities) {

        //addition(quantities, prices);
        this.setState({
            subtotal: this.addition(quantities, prices).toFixed(2)
        },
            () => {

                // any other concatenated function
                const { subtotal, offer } = this.state; //obj.des.
                this.setState({
                    total: offer === '0' ? subtotal :
                        this.offerAdjust()
                }
                // ,    () => { console.log(this.state); }
                )
            }
        );

    }

    addition(quantities, prices) {
        let sub = 0;
        for (let item in quantities) {
            sub += prices[item] * quantities[item];
        }
        return sub;
    }

    offerAdjust() {
        const { quantities, subtotal, offer } = this.state;
        if (offer === '1') {
            let discount = (Math.floor(quantities.apples / 2) * prices.apples).toFixed(2);
            this.setState({ discount });
            return (subtotal - discount).toFixed(2);
        } else if (offer === '2') {
            let discount = (Math.floor(quantities.oranges / 3) * prices.oranges).toFixed(2);
            this.setState({ discount });
            return (subtotal - discount).toFixed(2);
        }
    }

    render() {
        return (
            <>
                <div className="row left">
                    <div>
                        <div className="w60vw mar-10 radius-8 border-2">
                            <form onSubmit={e => this.addToCart(e)}>
                                <div className='wrapper'>
                                    <p className="w50vw is-349 bg-e pad-10 mar-10 border-1 radius-4">
                                        New Order - Enter Quantities
                                    </p>

                                    <div>
                                        <input
                                            className="w50 space-04 pad-10 mar-10 border-1 radius-4"
                                            id="item1"
                                            type="number"
                                            placeholder="0"
                                            required
                                            min="0"
                                        // onInput={() => this.value = Math.abs(this.value)}
                                        />
                                        <label className="w50vw pad-10 mar-10 is-slategrey">
                                            Apples (£0.60 each)
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            className="w50 space-04 pad-10 mar-10 border-1 radius-4"
                                            id="item2"
                                            type="number"
                                            placeholder="0"
                                            required
                                            min="0"
                                        // onInput={() => this.value = Math.abs(this.value)}
                                        />
                                        <label className="w50vw pad-10 mar-10 is-slategrey">
                                            Oranges (£0.25 each)
                                        </label>
                                    </div>

                                    <div>
                                        <input className='form-button point w15vw bg-sg txt-12 is-fc0  pad-10 mar-10 space-04 radius-4' type="submit" value="Add to Cart" />

                                        <button className='form-button point w15vw bg-sg txt-12 is-white  pad-10 mar-10 space-04 radius-4'
                                            onClick={() => this.resetter()}>Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>


                        <div className="w60vw mar-10 is-slategrey radius-8 border-2">

                            <p className="pad-10">
                                Subtotal: £ {this.state.subtotal}
                            </p>
                            {
                                (this.state.offer !== '0') &&
                                <>
                                    <p className="pad-10 is-red">
                                        Active offer: {offers[this.state.offer]}
                                    </p>
                                    <p className="pad-10">
                                        Discount: £ {this.state.discount}
                                    </p>
                                </>
                            }

                            <p className="pad-10">
                                Total: £ {this.state.total}
                            </p>
                            <button
                                className='form-button point w25vw bg-sg txt-12 is-fc0 pad-10 mar-10 space-04 radius-4'
                                onClick={() => this.restarter()}>Place Order and Restart
                            </button>
                        </div>

                    </div>
                    <div className="w30vw no-display">
                        <img className="w30vw mar-10 shadow-fc0" src={fruits_1} alt="Apples and Oranges" />
                    </div>
                </div>
            </>
        );
    }

}
