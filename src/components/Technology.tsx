import React, { use } from 'react';
import type { TechType } from '../types/technologyType';
import AvailableTech from './AvailableTech';
import Stack from './Stack';

interface TechnologyProps {
    technologyPromise: Promise<TechType[]>
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
    const technology = use(technologyPromise);
    return (
        <div className='container mx-auto'>
            <div>
                <p className="text-2xl font-bold leading-tight text-slate-900 mt-16">Explore the
                    <span className="p-2 bg-linear-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                        Technologies</span></p>
                <p className="mt-3 max-w-lg text-gray-500">Pick one technology per category to build your ideal stack</p>
            </div>

            <div className='flex justify-between'>
                <div className='w-[75%]'>
                    <AvailableTech technology={technology}></AvailableTech>
                </div>
                <div className='w-[22%]'>
                    <Stack></Stack>
                </div>
            </div>

        </div>
    );
};

export default Technology;