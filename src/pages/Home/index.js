import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Slider from './Slider';
import SectionPlan from './SectionPlan';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function Home() {
  return (
    <Container>
      <Header hasNavigation />
      <Slider />
      <SectionPlan />
      <Testimonials />
      <Contact />
      <Footer />
    </Container>
  );
}
