/*
 * @Author: xyh 
 * @Date: 2020-09-20 18:29:16 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-24 23:41:04
 */
import React, { Component } from 'react';
import './PageLoad.scss'
import { connect } from 'react-redux'
class PageLoad extends Component {


  
  render() {
    return (
      <div className="page op">
        <img src={require("../../assets/images/logo.svg")} alt="loading图片"/>
        <div>Vui lòng đợi trong khi tải....</div>
      </div>
    )
  }
}
const mapstateToProps = (state, ownProps) => {
  return {...state}
}
const mapDispatchToProps = dispatch => {
  return {
    onClickOf: title => {
      dispatch(title)
    }
  }
}
export default connect(mapstateToProps,mapDispatchToProps)(PageLoad);