import React from 'react'
import LoginTop from '../../components/LoginTop/LoginTop.js'

export default class Login extends React.Component{
    render(){
        return(
            <div>
                <LoginTop username={"Vui lòng nhập tên người dùng"} password={"Xin vui lòng nhập mật khẩu"} />
            </div>
        )
    }
}