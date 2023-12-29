import Link from 'next/link';
import React from 'react';
import { AiFillFacebook,  AiFillInstagram,  AiFillYoutube } from 'react-icons/ai';
import { DiUbuntu } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#000000", marginBottom: "20px" }}>
        <i class="fa-brands fa-ubuntu"></i>
        <DiUbuntu size="3rem" /> <span>Terra Brasilis</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>         */}
      <li>
        <Link href="#about">
          <NavLink>Sobre nosotros</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
