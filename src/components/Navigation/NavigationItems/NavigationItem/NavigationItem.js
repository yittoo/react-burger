import React from "react";

import classes from "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      {/* <a 
        href={props.link} 
        className={props.active ? classes.active : null}
        >{props.children}
      </a> */}
      <NavLink
        to={{
          pathname: props.link
        }}
        exact
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
