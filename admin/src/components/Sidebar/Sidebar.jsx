import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink className="sidebar-option" to='/add'>
          <img src={assets.add_icon} alt="Add" />
          <p>Add items</p>
        </NavLink>
        <NavLink className="sidebar-option" to='/list'>
          <img src={assets.order_icon} alt="Order" />
          <p>List items</p>
        </NavLink>
        <NavLink className="sidebar-option" to='/orders'>
          <img src={assets.order_icon} alt="Order" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar;