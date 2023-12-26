import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer;
