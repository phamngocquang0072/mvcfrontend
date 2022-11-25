/*
 * @Author: xyh 
 * @Date: 2020-09-22 00:30:15 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 15:21:39
 */
import React, { Component } from 'react'
import './index.scss'
export default class Nofound extends Component {
  render() {
    return (
      <div className="no-found">
        <img src={require("../../assets/images/404.jpg")} alt="loading图片"/> 
        <div className="text">
          <span>Tôi nghĩ bạn bị lạc, nghe nhạc không hay sao?</span>
          <a href="#/">Đến với tôi bây giờ</a>
        </div>
      </div>
    )
  }
}