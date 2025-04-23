import React from 'react';

const Worship: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">예배</h1>
      
      <div className="max-w-3xl mx-auto">
        {/* 주말예배 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">주말예배</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">토요예배</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">오후 5시</p>
                <p className="text-sm text-gray-500">시온성전(2F)</p>
                <p className="text-sm text-gray-500 mt-1">모이고 흩어지는 In & Out 실천을 위한 예배</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">주일예배</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">오전 9:50</p>
                <p className="text-sm text-gray-500">시온성전(2F)</p>
                <p className="text-sm text-gray-500 mt-1">부활이 우리에게 말하는 것!</p>
              </div>
            </div>
          </div>
        </div>

        {/* 주중예배 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">주중예배</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">매일기도회</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">오전 5:30</p>
                <p className="text-sm text-gray-500">다니엘홀(B1)</p>
                <p className="text-sm text-gray-500 mt-1">매일 아침, 특별한 새벽기도회</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">은하수</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">수요일 오전 10:30</p>
                <p className="text-sm text-gray-500">시온성전(2F)</p>
                <p className="text-sm text-gray-500 mt-1">은혜로 하나님을 경험하는 수요말씀기도회</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">목요찬양집회</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">목요일 저녁 8시</p>
                <p className="text-sm text-gray-500">시온성전(2F)</p>
                <p className="text-sm text-gray-500 mt-1">뜨거운 찬양과 기도가 넘치는 차세대 예배</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">매일기도회</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">저녁 9시</p>
                <p className="text-sm text-gray-500">다니엘홀(B1)</p>
                <p className="text-sm text-gray-500 mt-1">매일 저녁, 특별한 기도회</p>
              </div>
            </div>
          </div>
        </div>

        {/* 장애인 예배 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">장애인 예배</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">소망부(온라인&오프라인)</h3>
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-600">주일 오전 9:50, 오전 11:50</p>
                <p className="text-sm text-gray-500">소망홀(1F)</p>
                <p className="text-sm text-gray-500 mt-1">장애인과 함께 드리는 아름다운 예배</p>
              </div>
            </div>
          </div>
        </div>

        {/* 온라인 예배 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">온라인 예배</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              교회 유튜브 채널을 통해 실시간으로 예배에 참여하실 수 있습니다.
            </p>
            <a
              href="https://www.youtube.com/@%EB%AC%B4%EC%95%88%EB%AC%B4%ED%95%99%EA%B5%90%ED%9A%8C-w3z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              유튜브 채널 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worship; 