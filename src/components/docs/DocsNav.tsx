import React from 'react';

// Define a simple structure for a learning concept
export interface LearningConcept {
  id: string;
  title: string;
  // Add content later, possibly with simple/technical versions
  // content: string;
}

interface DocsNavProps {
  concepts: LearningConcept[];
  activeConcept: string;
  setActiveConcept: (id: string) => void;
}

const DocsNav: React.FC<DocsNavProps> = ({ 
  concepts, 
  activeConcept, 
  setActiveConcept 
}) => {
  return (
    <nav className="whitepaper-nav bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 shadow-xl transition-all duration-300 hover:shadow-blue-900/20">
      <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {concepts.map((concept) => (
          <li key={concept.id} className="transition-all duration-200">
            <button
              onClick={() => setActiveConcept(concept.id)}
              className={`text-left w-full px-3 py-2 rounded-md transition-all duration-200 flex items-center ${
                activeConcept === concept.id
                  ? 'bg-blue-600/40 text-white font-medium shadow-inner border border-blue-500/30'
                  : 'hover:bg-gray-700/50 text-gray-300 hover:translate-x-1'
              }`}
            >
              <span className={`inline-block w-2 h-2 rounded-full mr-2 transition-all duration-300 ${
                activeConcept === concept.id ? 'bg-blue-400 ring-2 ring-blue-400/30' : 'bg-gray-500'
              }`}></span>
              {concept.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DocsNav; 