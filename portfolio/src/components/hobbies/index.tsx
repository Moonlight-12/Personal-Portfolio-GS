// components/HobbiesSection.tsx
import React from 'react';
import { HobbiesSectionProps } from '../../types/portfolio';
import HobbyCard from './hobby-card';

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ hobbies }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Hobbies & Interests</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default HobbiesSection;