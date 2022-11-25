import React, { Component } from 'react'
import style from './index.module.scss'
import { PlayCircleOutlined,FolderAddOutlined,PlusOutlined,DoubleRightOutlined } from '@ant-design/icons';
import {topDetail} from '../../../../api/home'
// 事件总线
import bus from '../../../../utils/bus'
export default class Topitem extends Component {

  playList = (top) => {
    topDetail({id: top.id}).then(res => {
      bus.emit('playMusic', {
        topList: res.data.playlist.tracks,
        type: 'topList',
        id: top.id
      })
    })
  }
  playOwn = (item) => {
    bus.emit('playMusic', {
      ownList : [item],
      type: 'ownList',
      id: item.id
    })
  }
  toTop =(id) => {
    this.props.history.push(`/index/toplist?id=${id}`)
  }
  render() {
    const {topList,musicList} = this.props
    // const track = musicList.tracks.slice(0,10)
    // console.log(musicList['tracks']);

    return (
      <div className={style.top_item}>
        <div className={style.title}>
          <img className={style.logo} src={topList.coverImgUrl} alt=""/>
          <div className={style.right}>
            <div className={style.text}>{topList.name}</div>
            <div className={style.icons}>
              <PlayCircleOutlined 
                onClick={()=>{this.playList(topList)}} 
                title="Play" 
                style={{fontSize: '24px'}}
              />
              <FolderAddOutlined title="Sưu tầm" style={{fontSize: '26px'}}/>
            </div>
          </div>
        </div>

        <div className={style.music_list}>
          {
            musicList && musicList.tracks.slice(0,10).map((item,index)=>(
              <div key={index} className={style.music}>
                <div className={style.num}>{index + 1}</div>
                <div className={style.name}>{item.name}</div>
                <div className={style.icons}>
                  <PlayCircleOutlined 
                    title="Play" 
                    onClick= {()=> this.playOwn(item)}
                  />
                  <PlusOutlined title="Thêm vào danh sách phát" />
                  <FolderAddOutlined  title="Sưu tầm"/>
                </div>
              </div>
            ))
          }
          
          <div className={style.bottom_more}>
            <span onClick={()=>this.toTop(topList.id)}>Xem tất cả<DoubleRightOutlined /></span>
          </div>
          
        </div>
      </div>
    )
  }
}
