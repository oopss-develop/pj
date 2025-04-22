import React from 'react';

const Ministries: React.FC = () => {
  const ministries = [
    {
      title: '청소년부',
      description: '중고등학생들을 위한 예배와 모임',
      time: '주일 오후 2:00',
    },
    {
      title: '대학청년부',
      description: '대학생들을 위한 예배와 소그룹 모임',
      time: '주일 오후 4:00',
    },
    {
      title: '장년부',
      description: '장년들을 위한 예배와 모임',
      time: '주일 오전 11:00',
    },
    {
      title: '선교부',
      description: '해외 선교와 지역사회 봉사',
      time: '매월 첫째 주 토요일',
    },
    {
      title: '찬양팀',
      description: '예배 찬양을 섬기는 팀',
      time: '매주 수요일 오후 7:00',
    },
    {
      title: '기도팀',
      description: '교회를 위한 중보기도',
      time: '매일 새벽 5:00',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">사역</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{ministry.title}</h2>
            <p className="text-gray-600 mb-4">{ministry.description}</p>
            <p className="text-gray-500">
              <span className="font-semibold">시간:</span> {ministry.time}
            </p>
            <button className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
              자세히 보기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries; 