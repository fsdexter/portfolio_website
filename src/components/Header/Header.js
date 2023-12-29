import Link from 'next/link';
import React from 'react';
import { AiFillCopyrightCircle, AiFillFacebook,  AiFillInstagram,  AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#000000", marginBottom: "20;" }}>
        <i class="fa-brands fa-ubuntu"></i>
        <DiCssdeck size="3rem" /> <span>Terra Brasilis</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
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
