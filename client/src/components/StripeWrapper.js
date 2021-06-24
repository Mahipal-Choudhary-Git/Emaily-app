import { useCallback } from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { postStripeToken } from "../actions";

const StripeWrapper = () => {
    const dispatch = useDispatch();
    const handleOnToken = useCallback(
        (token) => dispatch(postStripeToken(token)),
        [dispatch]
    );
    return (
        <StripeCheckout
            currency="INR"
            name="Emaily"
            description="pay $5 for 5 Email credits"
            amount={500}
            label="Add Credits"
            token={handleOnToken}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            {/* <button className="btn">Add Credits</button> */}
        </StripeCheckout>
    );
};
export default StripeWrapper;
