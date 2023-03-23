import React from "react";
import ClayButton from '@clayui/button';

const ButtonClay = (props) => {
	return (
        <ClayButton displayType="primary">
        {props.text}
        </ClayButton>

	);
}

export default ButtonClay;