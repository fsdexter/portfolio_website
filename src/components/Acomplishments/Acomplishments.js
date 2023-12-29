import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 500, text: 'seguidores en instagram'},
  { number: 200, text: 'miembros', },
  { number: 10, text: 'vídeos en youtube', },
  { number: 50, text: 'Lorem Ipsum', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Logros de la organización</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;