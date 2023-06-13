'use client';

import { AboutWrapper } from './About.styles';

import AboutImage from '../AboutImage/AboutImage';
import AboutInfo from '../AboutInfoContainer/AboutInfo';

export default function About() {
  return (
    <AboutWrapper>
      <AboutImage />
      <AboutInfo />
    </AboutWrapper>
  );
}
