import React from 'react'
import {
  FooterContainer,
  CreditosContainer,
  RedesSociaisContainer,
  Line,
  Icons,
} from './styles'
import Logos from '../../assets'

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <RedesSociaisContainer>
        <Icons>
          <li>
            <a
              href="https://www.instagram.com/jv.soares30/"
              target="_blank"
            >
              <img src={Logos.Instagram} alt=""></img>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5581996433898" target="_blank">
              <img src={Logos.Whatsapp} alt=""></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-victor-25b434235/"
              target="_blank"
            >
              <img src={Logos.Linkedin} alt=""></img>
            </a>
          </li>
          <li>
            <a href="mailto:jvsf@cin.ufpe.br">
              <img src={Logos.Mail} alt=""></img>
            </a>
          </li>
        </Icons>
      </RedesSociaisContainer>

      <CreditosContainer>
        <p> Site feito por João Victor Soares Ferreira para processo seletivo do RecifePREV
        </p>
      </CreditosContainer>
    </FooterContainer>
  )
}