/*
 * @Author: xyh 
 * @Date: 2020-09-28 19:21:40 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-30 15:28:52
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import Swiper from '../../../components/home/Swiper'
import Personalized from '../../../components/home/Personalized/index'
import Toplist from '../../../components/home/Toplist'
import Scroll from '../../../components/home/Scroll'
import {connect} from 'react-redux'
import bus from '../../../utils/bus'
class Discover extends Component {

  toLogin = () => {
    this.props.history.push('/login')
  }
  componentDidMount () {
    
    bus.emit('location',true)
    bus.emit('isShow', true)
  }
  render() {
    const { userInfo } =this.props
    return (
      <div className={style.content}>
        <Swiper {...this.props} />
        <div className={style.container}>
          <div className={style.content_two}>
            <div className={style.left}>
              <Personalized {...this.props}/>
              <Toplist {...this.props} />
            </div>
            <div className={style.right}>
              <div className={style.loginInfo}>
                
                

                {
                  !userInfo.profile ? (
                    <div className={style.text}>
                      <span>
                      Đăng nhập vào Wangyiyun Music,
                      bạn có thể tận hưởng niềm vui với các bộ sưu tập không giới hạn và
                      bạn có thể đồng bộ hóa chúng với điện thoại di động của mình vô thời hạn
                      </span>
                      <div className={style.btn}>
                        <button onClick={this.toLogin}>Đăng nhập người dùng</button>
                      </div>
                    </div>
                  ) : (
                    <div className={style.user}>
                      <div className={style.user_info}>
                        <div className={style.img}>
                          <img src={userInfo.profile.avatarUrl} alt=""/>

                        </div>
                        <div className={style.u_text}>
                          <a style={{color: '#000',fontSize:'16px',fontWeight:550}} href="#/me">{userInfo.profile.nickname}</a>
                          <a style={{color: '#ccc',fontSize:'16px',fontWeight:500}} href="/">等级:0</a>
                          <button >Đăng ký</button>
                        </div>
                      </div>
                      <div className={style.count}>
                        <div className={style.count_info}>
                          <span>{userInfo.profile.eventCount}</span>
                          <span>Năng động</span>
                        </div>
                        <div className={style.count_info} style={{borderLeft:'1px solid #ccc',borderRight: '1px solid #ccc'}}>
                          <span>{userInfo.profile.follows}</span>
                          <span>Tập Trung</span>
                        </div>
                        <div className={style.count_info}>
                          <span>{userInfo.profile.followeds}</span>
                          <span>粉丝</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                </div>
              <Scroll />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {userInfo: state.userInfo}
}

export default connect(mapStateToProps)(Discover)