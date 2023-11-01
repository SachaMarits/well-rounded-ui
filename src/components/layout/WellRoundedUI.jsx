import "../../scss/app.css";
import React from 'react'
import PropTypes from "prop-types";

export default function WellRoundedUI({ children }) {
  return (
    <>
        {children}
    </>
  )
}

WellRoundedUI.propTypes = {
    children: PropTypes.node
};

WellRoundedUI.defaultProps = {
    children: null,
};
 