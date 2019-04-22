import React from "react";

const Button = ({label ="Click me"}) => {
        return (
            <React.Fragment>
                <button > {label}</button>
            </React.Fragment>
        )
}

export default Button;