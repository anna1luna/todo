import React from "react";
import Side from "./side";
import { connect } from "react-redux";
const mapStateToProps = (state) => {};

const SideContainer = connect(mapStateToProps)(Side);

export default SideContainer;
