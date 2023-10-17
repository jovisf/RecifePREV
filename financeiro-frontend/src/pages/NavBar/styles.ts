import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 13vh;
  padding-top: 1rem;
  padding-bottom: 1rem;
  

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
    justify-content: center;
    height: 25vh;
  }
`

export const Logo = styled.div`
  img {
    max-width: 60%;
    margin-left: 3rem;
  }

  @media screen and (max-width: 768px) {
    margin-top:30px;
  }
`

export const NavbarItems = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
  font-style: normal;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
    font-size: 20px;
  }

  ul {
    display: flex;
    gap: 2rem;
    font-weight: 700;
    list-style-type: none;
  }

  a{
    color: #ffffff;
    text-decoration: none;
  }

  a:hover{
    color: blue;
  }
  li {
    transition: 0.3s;
    color: white;
  }
  
  .options :hover {
    color: #F102AE;
  }
`