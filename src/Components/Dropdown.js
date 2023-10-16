import React, { useState } from "react";
import { serviceDropdown } from "./NavBarItems";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Container>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

const Container =styled.div`
   .services-submenu {
  width: 10rem;
  position: absolute;
  top: 67px;
  list-style: none;
  text-align: start;
  display: block;
}

.services-submenu li {
  
  cursor: pointer;
}

.services-submenu li a:hover {
 display: block;
 position: absolute;
}

.services-submenu.clicked {
  display: none;
}

.submenu-item {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  padding: 16px;
}
`; 
export default Dropdown;