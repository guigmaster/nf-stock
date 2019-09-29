import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import SectionPlan from '../../components/SectionPlan';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

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
