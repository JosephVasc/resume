import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call or Text</LinkTitle>
          <LinkItem href="tel:781-243-1009">781-243-1009</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:joseph.vasconcelos97@gmail.com">
            joseph.vasconcelos97@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Checkout my YouTube, Linkedin and GitHub: </LinkTitle>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/JosephVasc">
            <AiFillGithub size="5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/joseph-vasconcelos-62b962187">
            <AiFillLinkedin size="5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCc1PHiYNlQfmlWmqBcDL2NQ">
            <AiFillYoutube size="5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;