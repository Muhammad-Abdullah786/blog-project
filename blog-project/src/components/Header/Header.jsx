import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container, LogOutBtn, Logo } from "../index";
import { useSelector } from "react-redux";

function Header() {
  // to check the status the authentication we will use useSelector because it will go to the store and tell me that is there any use there
  const authStatus = useSelector((state) => state.auth.status);
  const nevigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      url: "/",
      status: true,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      status: authStatus,
    },
    {
      name: "Add Post",
      url: "/add-post",
      status: authStatus,
    },
    {
      name: "Log In",
      url: "/login",
      status: !authStatus,
    },
    {
      name: "Log Out",
      url: "/logout",
      status: authStatus,
    },
    {
      name: "Sign Up",
      url: "/signup",
      status: !authStatus,
    },
  ];
  return (
    <>
      <header>
        <Container>
          <nav>
            <div>
              <Link to="/">
                <Logo width="100px"></Logo>
              </Link>
            </div>
            {/* //  now i will loop all my navitems */}
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button className="" onClick={nevigate(item.url)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn></LogOutBtn>
              </li>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}
export default Header;
