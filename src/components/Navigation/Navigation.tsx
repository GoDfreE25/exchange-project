import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <div className="navigation">
    <nav className="navigation__nav">
      <NavLink
        to="/Rate"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        Currency Rate
      </NavLink>
      {' '}
      |
      {' '}
      <NavLink
        to="/Calculator"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        Currency Calculator
      </NavLink>
    </nav>
  </div>
);