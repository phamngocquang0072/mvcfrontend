import React, { Component } from 'react';
import style from './index.module.scss'
import { FolderAddOutlined, PlayCircleOutlined,YoutubeOutlined} from '@ant-design/icons'

import {formatDuration} from '../../utils/format'

import bus from '../../utils/bus'
class index extends Component {

  playMuisc = (data) => {
    console.log(data);
    bus.emit('playMusic', {
      ownList : [data],
      type: 'ownList',
      id: data.id
    })
  }
  render() {
    const {playList} = this.props
    return (
      <div>
        <div className={style.container}>
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th colSpan ="2">Tên bài hát</th>
                    <th>Khoảng thời gian</th>
                    <th>Ca Sĩ</th>
                    <th>Album</th>
                  </tr>
                  {/* <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr> */}
                  {
                    playList.map((item,index)=>(
                      <tr key={item.id}>
                        <td>
                          <div className={style.num}>
                            <span>{index+1}</span>
                            <div>
                              <PlayCircleOutlined 
                                title="Phát" 
                                onClick={()=>{this.playMuisc(item)}}
                              />
                              <FolderAddOutlined  title="Sưu Tầm"/>
                            </div>
                          </div>
                        </td>
                        <td colSpan ="2" className={style.name}>
                          <p>
                            {
                              item.mv ? <a href={`#/mv?id=${item.mv}`}><YoutubeOutlined style={{color:"hotpink",marginRight:'10px',current:'pointer'}} title="Phát MV"/></a> : ''
                            }
                            {item.name}
                          </p>
                        </td>
                        <td><p>{formatDuration(item.dt)}</p></td>
                        <td><p>{item.ar[0].name}</p></td>
                        <td><p>{item.al.name}</p></td>
                      </tr>
                    ))
                  }
                  
                  
                </tbody>
              </table>
            </div>
      </div>
    );
  }
}

export default index;