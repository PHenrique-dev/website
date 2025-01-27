import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/435762163_2822109891280408_7450111231118052636_n-removebg-preview.ico'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Empresa</li>
        <li>Produtos</li>
        <li>Escritorios</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      <div className="footer-social-icon">
      <a href="https://www.instagram.com/cade_bebe.iga/" target="_blank" rel="noopener noreferrer"><InstagramIcon /> </a>
        <a href="https://www.facebook.com/edinalvapereiradasilva.pereiradasilva/" target="_blank" rel="noopener noreferrer"><FacebookIcon /> </a>
        <a href="https://wa.me/5577991054828" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
      </div>
      <div className="footer-copyrigth">
        <hr/>
        <p>&copy; Copyrigth @ 2025 - Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
