import React, { useState } from 'react';
import { LearningConceptWithContent } from '@/types/docs';

interface DocsSectionProps {
  concept: LearningConceptWithContent;
}

const DocsSection: React.FC<DocsSectionProps> = ({ concept }) => {
  const [showTechnical, setShowTechnical] = useState(false);

  return (
    <section id={concept.id} className="docs-section mb-16 last:mb-0">
      <div className="relative">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-6 text-white flex items-center group">
          <span className="absolute -left-4 w-1 h-8 bg-blue-500 rounded-r transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
          {concept.title}
        </h2>

        {/* Content Toggle */}
        {concept.technicalContent && (
          <div className="mb-6 flex items-center space-x-4">
            <button
              onClick={() => setShowTechnical(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !showTechnical
                  ? 'bg-blue-600/40 text-white border border-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Simple Explanation
            </button>
            <button
              onClick={() => setShowTechnical(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                showTechnical
                  ? 'bg-blue-600/40 text-white border border-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Technical Details
            </button>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className={`transition-opacity duration-300 ${showTechnical ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            <p className="text-gray-300 leading-relaxed">{concept.simpleContent}</p>
          </div>
          {concept.technicalContent && (
            <div className={`transition-opacity duration-300 ${!showTechnical ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              <p className="text-gray-300 leading-relaxed">{concept.technicalContent}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocsSection; 