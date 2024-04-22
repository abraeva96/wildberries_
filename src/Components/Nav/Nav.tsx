import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/images/Wildberries_Logo.png';
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import {  IRootState, setOpen } from '../../store/slice';
import { LuShoppingCart } from "react-icons/lu";



const Nav: FC = () => {
  const open = useSelector((state: IRootState) => state.product.open); 
  const dispatch = useDispatch();

  const changeMenu = () => {
    dispatch(setOpen(!open)); 
  };

  return (
    <div className='nav'>
      <div className="container">
        <Link to='/'>
          <img className='nav__logo' src={logo} alt="" />
        </Link>
      
        <ul className={`nav__list ${open ? 'open' : ''}`} > 
          <NavLink className='nav__list-link' to='/'>Products</NavLink>
          <NavLink className='nav__list-link' to='/about'>About</NavLink>
          <NavLink className='nav__list-link' to='/contact'>Contact</NavLink>
        </ul>
       <Link to='/basket'>
       <LuShoppingCart className='nav__basket'/>
       </Link>
       {open ? 
          <IoMdClose className={`close visible`} onClick={changeMenu} />
        : 
          <HiMenu className='nav__menu' onClick={changeMenu} />
        }
      
      </div>
    </div>
  );
}  

export default Nav;
