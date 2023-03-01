import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

export default function Hero(props){ 
  return (
    <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Joseph Vasconcelos
        </SectionTitle>
        <SectionText>
          I'm a software engineer with a passion for building web applications. Click below to learn more about me!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
  )
  }
