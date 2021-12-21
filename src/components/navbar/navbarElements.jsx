import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  padding: 0.5rem 5rem;
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${props => props.main ? '#fff' : "#15cdfc"};
  }
  ${props => props.main && {fontSize: "1.8em", fontWeight: "500", letterSpacing: '2px'}}


  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.8rem;
    color: #bdbbbb;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    display: ${open => open ? "none" : "block"};
    /* background-color: #23394d;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease; */
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    background-color: ${({ open }) => (!open ? "rgba(0, 0, 0, .1)" : "rgba(0, 0, 0, .9)")};
    position: absolute;
    top: 5rem;;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 40vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.8s all ease;
    padding: 1rem 1rem 2.5rem 1rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 50%;
    text-align: center;
    margin-top: 1rem;
  }
  
`;

export const NavBtnLinkA = styled.a`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 50%;
    text-align: center;
    margin-top: 1rem;
  }
  
`;