
// import "bootstrap/dist/css/bootstrap.min.css";



// function NavbarComponent () {
// 	return (
//         <>
// 		<Container>
// 			{/* <Content> */}
// 				<Logo>
// 					<a href="/feed">
// 						<img src="/images/home-logo.svg" alt="" />
// 					</a>
// 				</Logo>
// 				<Search>
// 					<div>
// 						<input type="text" placeholder="Search" />
// 					</div>
// 					<SearchIcon>
// 						<img src="/images/search-icon.svg" alt="" />
// 					</SearchIcon>
// 				</Search>
// 				{/* <SignOutMobile onClick={() => props.signOut()}>
// 					<a>Sign Out</a>
// 				</SignOutMobile> */}
// 				<Nav>
// 					<NavListWrap>
// 						<NavList className="active">
// 							<a href="/feed">
// 								<img src="/images/nav-home.svg" alt="" />
// 								<span>Home</span>
// 							</a>
// 						</NavList>
// 						<NavList>
// 							<a href="/feed">
// 								<img src="/images/nav-network.svg" alt="" />
// 								<span>My Network</span>
// 							</a>
// 						</NavList>
// 						<NavList>
// 							<a href="/feed">
// 								<img src="/images/nav-jobs.svg" alt="" />
// 								<span>Jobs</span>
// 							</a>
// 						</NavList>
// 						<NavList>
// 							<a href="/feed">
// 								<img src="/images/nav-messaging.svg" alt="" />
// 								<span>Messaging</span>
// 							</a>
// 						</NavList>
// 						<NavList>
// 							<a href="/feed">
// 								<img src="/images/nav-notifications.svg" alt="" />
// 								<span>Notifications</span>
// 							</a>
// 						</NavList>
// 						<User>
// 							{/* <a>
// 								{props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />}
// 								<span>
// 									Me <img src="/images/down-icon.svg" alt="" />
// 								</span>
// 							</a>
// 							<SignOut onClick={() => props.signOut()}>
// 								<a>Sign Out</a>
// 							</SignOut> */}
// 						</User>
// 						<Work>
// 							<a>
// 								<img src="/images/nav-work.svg" alt="" />
// 								<span>
// 									Work <img src="/images/down-icon.svg" alt="" />
// 								</span>
// 							</a>
// 						</Work>
// 					</NavListWrap>
// 				</Nav>
// 			{/* </Content> */}
// 		</Container>
//         </>
// 	);
// }

// export default NavbarComponent;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/img/LInkedinlogo.png"

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              src={Logo}
              width="80px"
              height="60px"
              className="d-inline-block align-top"
              alt="Logo"
              loading="lazy"
            />
          </Navbar.Brand>
          <Nav.Link href="#search" className="me-2">
                <i className="bi bi-search"></i>
              </Nav.Link>
          <Navbar.Collapse id="basic-navbar-nav" className="mobile-collapse">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">My Network</Nav.Link>
              <Nav.Link href="#film">Jobs</Nav.Link>
              <Nav.Link href="#nuovi-e-popolari">Messaging</Nav.Link>
              <Nav.Link href="#la-mia-lista">Notifications</Nav.Link>
              <NavDropdown
                title={
                  <Image src="./assets/img/avatar.png" width="30" height="30" />
                }
                id="basic-nav-dropdown"
                align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
              >
                <NavDropdown.Item href="#gestioni-profili">
                  Gestione Profili
                </NavDropdown.Item>
                <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-row justify-content-end">
              <Nav.Link href="#business">For business</Nav.Link>
              <Nav.Link href="#notification" className="me-2">
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
