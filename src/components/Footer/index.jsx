import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './styles.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        Desenvolvido por <strong> Gabriel Luciano </strong>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/gabrielluciano/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="20"  color="#065687"/>
          </a>
          <a href="https://www.github.com/glucianog/" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size="20"  color="#065687"/>
          </a>
        </div>  
      </div>         
    </footer>
  )
}

export default Footer;