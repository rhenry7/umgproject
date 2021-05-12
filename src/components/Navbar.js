import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="mb-5" dark expand="md">
        <NavbarBrand className="navFont" href="/">JOE THE ARTIST</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navFont" href="#" >Tour</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navFont" href="https://github.com/reactstrap/reactstrap">Videos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="navFont">
              <DropdownToggle nav caret>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Merch
                </DropdownItem>
                <DropdownItem>
                  Albums
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Follow
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
