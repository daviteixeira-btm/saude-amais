import React from "react";
import Footer from "..";
import { Icon } from "../icons/styles/icons";
import { Container } from '@mui/material';

function FooterContainer() {

  return (
    <Footer>
       <Container maxWidth="xl" >
      <Footer.Wrapper>
        <Footer.ContainerIcon>
          <Footer.IconLink href="#" className="fas fa-home fa-2x" />
          <Footer.IconLink href="#" className="far fa-arrow-alt-circle-up fa-3x" />
        </Footer.ContainerIcon>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Saude A+</Footer.Title>
            <Footer.Link href="#Story">Sobre nós</Footer.Link>
            <Footer.Link href="#Story">Contato</Footer.Link>
            <Footer.Link href="#Story">Carreiras</Footer.Link>
            <Footer.Link href="#Story">Impresa</Footer.Link>
            <Footer.Link href="#Story">Blog</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Unidades</Footer.Title>
            <Footer.Link href="#">Forteleza-CE</Footer.Link>
            <Footer.Link href="#">Tianguá-CE</Footer.Link>
            <Footer.Link href="#">Souza-PE</Footer.Link>
            <Footer.Link href="#">Porto Velho-RO</Footer.Link>
            <Footer.Link href="#">Porto Velho-RO</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Modalidades de Pilates</Footer.Title>
            <Footer.Link href="#">Dores</Footer.Link>
            <Footer.Link href="#">Lesões</Footer.Link>
            <Footer.Link href="#">Postura</Footer.Link>
            <Footer.Link href="#">Respiração</Footer.Link>
            <Footer.Link href="#">Resistência</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://www.facebook.com/atlanticos/"> <Icon className="fab fa-facebook-f" />  Facebook</Footer.Link>
            <Footer.Link href="https://www.instagram.com/iatlantico/"> <Icon className="fab fa-instagram" /> Instagram</Footer.Link>
            <Footer.Link href="https://www.youtube.com/channel/UCjHYt0YPHpznZ-bISEBokLg"> <Icon className="fab fa-youtube" /> YouTube</Footer.Link>
            <Footer.Link href="https://www.linkedin.com/company/instituto-atlantico/mycompany/"> <Icon className="fab fa-linkedin" /> Linkedin</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Copyright>
          Feito com <Icon className="fas fa-heart" />e <Icon className="fas fa-coffee" />pela equipe Shalins do Sertão &copy; 2021
        </Footer.Copyright>
      </Footer.Wrapper>
      </Container>
    </Footer>
  )
}

export default FooterContainer;
