import React from 'react';

const Greeting: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">인사말</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <img
                src="/images/pastor.jpg"
                alt="담임목사님"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">담임목사님 인사말</h2>
              <div className="prose">
                <p className="text-gray-600 mb-4">
                  무학교회에 오신 것을 환영합니다.
                </p>
                <p className="text-gray-600 mb-4">
                  우리 교회는 예수 그리스도의 복음을 전하고, 하나님의 말씀을 따라 살아가는 성도들의 공동체입니다.
                </p>
                <p className="text-gray-600 mb-4">
                  함께 예배하고, 함께 성장하며, 함께 섬기는 교회가 되기를 소망합니다.
                </p>
                <p className="text-gray-600">
                  담임목사 김현섭
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting; 