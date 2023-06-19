import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo/planet.png';
import './style/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="left-nav">
        <img src={logo} alt="logo" width={50} height={50} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <div className="right-nav">
        <NavLink to="/">Rocket</NavLink>
        <NavLink to="missions">Missions</NavLink>
        <div className="vertical-line">.</div>
        <NavLink to="profile">My Profile</NavLink>
      </div>
    </div>
  );
}
