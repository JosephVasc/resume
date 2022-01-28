import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Bachelor\'s Degree in Computer Science From Bridgewater State University' },
  { number: 1000, text: 'Made Deans list every semester of BSU', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accolades and Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;