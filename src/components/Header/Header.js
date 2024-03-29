import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header(){
  return (
    <Container>
    <Div1>
      <Link href="https://josephvasc.github.io/resume/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>JV</span>
        </a>
      </Link>
    </Div1>
      <Div3>
        <SocialIcons href="https://github.com/JosephVasc">
          <AiFillGithub size="5rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/joseph-vasconcelos-62b962187">
          <AiFillLinkedin size="5rem" />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCc1PHiYNlQfmlWmqBcDL2NQ">
          <AiFillYoutube size="5rem" />
        </SocialIcons>
      </Div3>
    </Container>

  )
}