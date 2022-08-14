import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/logo-white.png";
import {Link} from "react-router-dom";
import {ImBlog} from "react-icons/im";
import {AiOutlineFundProjectionScreen, AiOutlineHome,} from "react-icons/ai";

import {CgFileDocument} from "react-icons/cg";
import {ARTICLES_PATH, BLOG_PATH, TRANSLATIONS_PATH} from "../../FileWithConstants";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand"/>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}}/> Главная
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to={ARTICLES_PATH}
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{marginBottom: "2px"}}
                                />{" "}
                                Заметки
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to={TRANSLATIONS_PATH}
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{marginBottom: "2px"}}/> Переводы
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to={BLOG_PATH}
                                onClick={() => updateExpanded(false)}
                            >
                                <ImBlog
                                    style={{marginBottom: "2px"}}
                                />{" "}
                                Блог
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;