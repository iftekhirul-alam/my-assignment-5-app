import React from 'react';
import { type TechType } from '../types/technologyType';

const TechnologyCard = ({tech}: {tech : TechType}) => {
    return (
        <div>
            <div className="width: 360px; bg-white border-radius: 24px; p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f0f0f0] font-sans box-border">

                            <div className="flex justify-between items-center mb-6">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <img src={tech.icon} alt="icon" />
                                </div>

                                <span className="bg-[#edf7fe] text-[#0091ff] text-sm font-semibold px-4 py-1.5 rounded-full">
                                    {tech.badge}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-[#0d1117] m-0 mb-3">
                                {tech.name}
                            </h2>
                            <p className="text-[15px] leading-relaxed text-[#868e96] m-0 mb-7">
                                {tech.description}
                            </p>

                            <div className="flex items-center gap-4 mb-7">
                                <span className="bg-[#f1f3f5] text-[#495057] text-sm font-medium px-3.5 py-1.5 border-radius: 6px;">
                                    {tech.category}
                                </span>
                                <span className="text-[#868e96] text-sm font-medium">
                                    {tech.difficulty}
                                </span>
                                <div className="flex items-center gap-1 ml-auto">
                                    <span className="text-[#ffc107] text-base">★</span>
                                    <span className="text-[#212529] text-sm font-semibold">{tech.rating}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#0d1117] text-white text-[15px] font-semibold border-none rounded-xl py-3.5 cursor-pointer transition-colors duration-200 hover:bg-[#161b22]">
                                Add to Stack
                            </button>

                        </div>
        </div>
    );
};

export default TechnologyCard;