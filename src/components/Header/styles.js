import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  display: block;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  padding: 5px 20px 0;
  height: 80px;
`;

export const Brand = styled(Link)`
  font-size: 2em;
  font-weight: 300;
  color: #222;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export const NavAuth = styled.div`
  @media (min-width: 768px) {
    order: 10;
  }

  a {
    font-size: 12px;
    text-transform: uppercase;
    color: #444;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    @media (min-width: 1010px) {
      font-size: 14px;
    }
  }
`;

export const HireBtn = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  padding: 8px;
  margin: 0 0 0 15px;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: #fff !important;
  background-color: #0f0;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;

  @media (min-width: 768px) {
    width: 300px;
    justify-content: space-around;
  }

  @media (min-width: 1010px) {
    max-width: 600px;
    justify-content: space-around;
  }
`;

export const NavLink = styled.button`
  font-size: 11px;
  text-transform: uppercase;
  color: #444;

  border: none;
  background: transparent;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 1010px) {
    font-size: 14px;
  }
`;
