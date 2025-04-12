"use client";

import { useState } from 'react';

interface QuestionCardProps {
  question: string;
  answer: string;
}

const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-[#1a0f2e]/50 backdrop-blur-sm rounded-[24px] overflow-hidden cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">
            {question}
          </h3>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-6 h-6 text-[#6B17ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div 
          className={`mt-4 text-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
