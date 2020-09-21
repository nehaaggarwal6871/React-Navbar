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
} from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import  './TopBar.css'
const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <div>
      <Navbar className="main" light expand="md">
        <NavbarBrand href="/">KinderGarden</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem>
              <NavLink href="#!">Home</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Elements
              </DropdownToggle>
              
              <Container>
                  <Row>
                    <Col>
                    <DropdownMenu right>
                <DropdownItem>
                  Element 1
                </DropdownItem>
                <DropdownItem>
                  Element 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  See Elements
                </DropdownItem>
              </DropdownMenu>
                    </Col>
                    <Col>
                    <DropdownMenu right>
                <DropdownItem>
                  Element 1
                </DropdownItem>
                <DropdownItem>
                  Element 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  See Elements
                </DropdownItem>
              </DropdownMenu>
                    </Col>
                  </Row>
              </Container>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  404
                </DropdownItem>
                <DropdownItem>
                  Terms of Use
                </DropdownItem>
                <DropdownItem>
                  Maintenance
                </DropdownItem>
                <DropdownItem>
                  Login/Register
                </DropdownItem>
                <DropdownItem>
                  Search Results
                </DropdownItem>
                <DropdownItem>
                  Apply
                </DropdownItem>

                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                News
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Academic News
                </DropdownItem>
                <DropdownItem>
                  Co-curriculum News
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  History
                </DropdownItem>
                <DropdownItem>
                  People
                </DropdownItem>
                <DropdownItem>
                  Team Member Profile
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#!">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;