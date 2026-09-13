import React from 'react';
import { type TechType } from '../types/technologyType';

interface StockProps {
    selectedTechs: TechType[];
    onRemove: (tech: TechType) => void
    onRemoveAll : () => void;
}

const Stack = ({ selectedTechs, onRemove, onRemoveAll }: StockProps) => {
    return (
        <div className="p-5 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f0f0f0] font-sans box-border sticky top-6">
            <h2 className="text-2xl font-bold text-[#0d1117] mb-1">Your Stack</h2>
            <p className="text-[15px] leading-relaxed text-[#868e96] m-0 mb-5">
                {selectedTechs.length} Technology Selected
            </p>

            <div className="space-y-3">
                {
                selectedTechs.length === 0 ? (
                    <p className="flex justify-center bg-gray-100 px-6 py-3 rounded-2xl text-gray-400 border-2 border-dashed">Your stack is empty</p>
                ) : (  
                    
                    selectedTechs.map((tech) => (
                        <div key={tech.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div>
                                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                </div>
                                <div>
                                <p className="text-1xl font-semibold text-slate-800">{tech.name}</p>
                                <p className='text-sm text-gray-500'>{tech.category}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => onRemove(tech)}
                                className="text-xs text-gray-400 hover:text-red-700 font-medium px-2 py-1"
                            >
                                X
                            </button>
                        </div>
                    ))
                )}
            </div>
            {selectedTechs.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-colors duration-200 cursor-pointer"
                >
                Remove All
                </button>
            )}
        </div>
    );
};

export default Stack;