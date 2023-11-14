import "../../scss/app.scss";
import React from 'react'
import PropTypes from "prop-types";
export default function WellRoundedUI({ children }) {
    return (
    <>
        {children}
        <div id='toasts-container' />
    </>
  )
}

WellRoundedUI.propTypes = {
    children: PropTypes.node
};

WellRoundedUI.defaultProps = {
    children: null,
};
 