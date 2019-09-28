import React from 'react';

// import { Container } from './styles';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import SectionPlan from '../../components/SectionPlan';

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <SectionPlan />
    </div>
  );
}
