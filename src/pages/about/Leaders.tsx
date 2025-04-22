import React from 'react';

const Leaders: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">섬기는 사람들</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-8">
            {/* 담임목사 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">담임목사</h2>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">김현섭 목사</p>
              </div>
            </div>

            {/* 원로목사 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">원로목사</h2>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">김현섭 원로목사</p>
              </div>
            </div>

            {/* 부목사 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">부목사</h2>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">김현섭 부목사</p>
              </div>
            </div>

            {/* 전도사 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">전도사</h2>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">김현섭 전도사</p>
              </div>
            </div>

            {/* 장로 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">장로</h2>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">김현섭 장로</p>
                <p className="text-gray-600">김현섭 장로</p>
                <p className="text-gray-600">김현섭 장로</p>
              </div>
            </div>

            {/* 은퇴장로 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">은퇴장로</h2>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">김현섭 은퇴장로</p>
                <p className="text-gray-600">김현섭 은퇴장로</p>
                <p className="text-gray-600">김현섭 은퇴장로</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders; 