import React from 'react'
import { NavbarContainer, NavbarItems, Logo } from './styles'
import Logos from '../../assets'
import { Link } from 'react-router-dom'

export const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src={Logos.UFPE} alt="Logo" />
      </Logo>
      <NavbarItems>
        <ul>
            <li className='Options'><a href="#container-acao">Compra/Venda</a></li>
            <li className='Options'><a href="#container-consulta">Consulta</a></li>
        </ul>
      </NavbarItems>
    </NavbarContainer>
  )
}
