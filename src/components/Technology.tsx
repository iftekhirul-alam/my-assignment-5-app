import React, { use, useState } from 'react';
import type { TechType } from '../types/technologyType';
import AvailableTech from './AvailableTech';
import Stack from './Stack';
import { toast } from 'react-toastify';

interface TechnologyProps {
    technologyPromise: Promise<TechType[]>
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
    const technology = use(technologyPromise);
    const [selectedTechs, setSelectedTechs] = useState<TechType[]>([]);

    const handleToggleSelect = (tech: TechType) => {
        const exists = selectedTechs.some((item) => item.id === tech.id);
        if (exists) return;

        setSelectedTechs((prev) => [...prev, tech]);
        toast.success(`${tech.name} is added successfully`, {
            position: "bottom-right",
            autoClose: 2000,
        });
    };

    const handleRemove = (tech: TechType) => {
        setSelectedTechs((prev) => prev.filter(item => item.id !== tech.id));
        toast.info(`${tech.name} removed successfully`, {
            position: "bottom-right",
            autoClose: 2000,
        });
    };

    const handleRemoveAll = () => {
        setSelectedTechs([]);
        toast.error("All technologies removed from stack", {
            position: "bottom-right",
            autoClose: 2000,
        });
    };

    return (
        <div className='container mx-auto px-4 mb-20'>
            <div>
                <p className="text-2xl font-bold leading-tight text-slate-900 mt-16">Explore the
                    <span className="p-2 bg-linear-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                        Technologies</span></p>
                <p className="mt-3 max-w-lg text-gray-500">Pick one technology per category to build your ideal stack</p>
            </div>

            <div className='flex lg:flex-row justify-between gap-8 mt-8'>
                <div className='w-full lg:w-[73%]'>
                    <AvailableTech technology={technology} selectedTechs={selectedTechs} onToggleSelect={handleToggleSelect}></AvailableTech>
                </div>
                <div className='w-full lg:w-[25%]'>
                    <Stack selectedTechs={selectedTechs} onRemove={handleRemove} onRemoveAll={handleRemoveAll}></Stack>
                </div>
            </div>

        </div>
    );
};

export default Technology;