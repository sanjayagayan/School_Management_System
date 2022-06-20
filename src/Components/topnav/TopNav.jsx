import React from 'react'
import './topnav.css'
import {Link} from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/user.jpg'
import user_menu from '../../assets/JsonData/user_menus.json'

const renderNotificationItem = (item,index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}>
        </i>
        <span>
            {item.content}
        </span>
    </div>
)

const curr_user = {
    display_name:'Admin',
    image: user_image
}




const renderUserToggle = (user) => (
    <div className="topnav__user">
        <div className="topnav__user-user__image">
            <img src={user.image} alt=""/>
        </div>
        <div className="topnav__user-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item,index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)



const TopNav = () => {
  return (
    <div className='topnav'>
        <div className="topnav__left">
            <h2>STUDENT MANAGEMENT SYSTEM</h2>
        </div>
        <div className="topnav__right">
                <div className="topnav__search">
                    <input type="text" placeholder='Search here...'/>
                    <i className='bx bx-search'></i>
                </div>
                <div className="topnav_item">
                    <Dropdown/>
                </div>
                <div className="topnav_item">
                    <Dropdown
                     customToggle={() => renderUserToggle(curr_user)}
                     contentData={user_menu}
                     renderItems={(item,index) => renderUserMenu(item,index)}
                    />
                </div>
        </div>
        
    </div>
  )
}

export default TopNav