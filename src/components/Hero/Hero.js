import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido a <br />
          Terra Brasilis
        </SectionTitle>
        <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tortor eleifend eros egestas dictum. Donec sed mauris mollis, cursus purus ut, porttitor turpis. Pellentesque posuere ipsum et.         </SectionText>
        <Button onClick={props.handleClick}>Aprende más</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;