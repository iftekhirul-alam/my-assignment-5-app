import React,{use} from 'react';
import type { TechType } from '../types/technologyType';

interface TechnologyProps {
    technologyPromise: Promise<TechType[]>
}

const Technology = ({technologyPromise} : TechnologyProps) => {
    const technology = use(technologyPromise);
    console.log(technology, 'technology');
    return (
        <div>
            
        </div>
    );
};

export default Technology;