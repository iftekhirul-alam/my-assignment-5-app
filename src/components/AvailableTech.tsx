import React from 'react';
import { type TechType } from '../types/technologyType';
import TechnologyCard from './TechnologyCard';

interface AvailableTechProps {
    technology: TechType[];
    selectedTechs: TechType[];
    onToggleSelect: (tech: TechType) => void;
}

const AvailableTech = ({ technology, selectedTechs, onToggleSelect} : AvailableTechProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                technology.map((tech: TechType) => {
                    const isSelected = selectedTechs.some((item) => item.id ===tech.id);
                    return (
                        <TechnologyCard key={tech.id} tech={tech} isSelected = {isSelected} onToggleSelect={onToggleSelect}></TechnologyCard>
                    );
                })
            }
        </div>
    );
};

export default AvailableTech;