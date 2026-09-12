import React from 'react';
import { type TechType } from '../types/technologyType';
import TechnologyCard from './TechnologyCard';

const AvailableTech = ({ technology } : {technology : TechType[]}) => {
    return (
        <div className='grid grid-cols-3 grid-rows-1 gap-6'>
            {
                technology.map((tech: TechType) => {
                    return (
                        <TechnologyCard key={tech.id} tech={tech}></TechnologyCard>
                    );
                })
            }
        </div>
    );
};

export default AvailableTech;