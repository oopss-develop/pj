import React from 'react';

interface Event {
  date: string;
  description: string;
}

interface YearData {
  year: string;
  events: Event[];
}

interface DecadeData {
  decade: string;
  years: YearData[];
}

const History: React.FC = () => {
  const decades: DecadeData[] = [
    {
      decade: '2020년대',
      years: [
        {
          year: '2024',
          events: [
            { date: '2024.12.29', description: '임용우 장로, 김용균 장로 은퇴식' },
            { date: '2024.01.01', description: '김현섭목사 무학교회 담임목사로 부임' },
            { date: '2023.12.10', description: '김관송목사 은퇴 및 원로,공로 목사 추대 및 김현섭목사 위임 및 항존직 은퇴예식' }
          ]
        }
      ]
    },
    {
      decade: '2010년대',
      years: [
        {
          year: '2018',
          events: [
            { date: '2018.07.24', description: '2차 라오스 단기선교' },
            { date: '2018.05.06', description: '세례식' },
            { date: '2018.04.02', description: '라오스해외교회 건축현지답사' },
            { date: '2018.03.04', description: '교회 창립 30주년기념(기념사봉헌,은퇴,임직예배)' },
            { date: '2018.01.07', description: '박세우전도사 전임전도사로 부임, 정철이전도사 부임' }
          ]
        },
        {
          year: '2017',
          events: [
            { date: '2017.10.29', description: '붕어빵전도 (강사:박복남장로)' },
            { date: '2017.10.18', description: '강청명전도사 목사안수 및 부목사로 부임' },
            { date: '2017.09.17', description: '봉사장학금 전달' },
            { date: '2017.09.03', description: '박세우전도사 부임(소년부)' }
          ]
        }
      ]
    },
    {
      decade: '2000년대',
      years: [
        {
          year: '2007',
          events: [
            { date: '2007.10.27', description: '헌당식 및 임직식' },
            { date: '2007.07.15', description: '새성전 입당예배(1314평 건축)' }
          ]
        }
      ]
    },
    {
      decade: '1990년대',
      years: [
        {
          year: '1994',
          events: [
            { date: '1994.12.10', description: '성전헌당식 위임식 임직식' },
            { date: '1994.04.03', description: '성전증축기공예배' }
          ]
        }
      ]
    },
    {
      decade: '1980년대',
      years: [
        {
          year: '1988',
          events: [
            { date: '1988.05.27', description: '성전기공 및 헌당 예배(42평)' },
            { date: '1988.03.28', description: '무안읍 성동리 628-8.9.16 대지 239평을 구입' },
            { date: '1988.03.06', description: '무안무학교회 창립예배' }
          ]
        },
        {
          year: '1987',
          events: [
            { date: '1987.11.15', description: '이사후 최초의 예배' },
            { date: '1987.11.10', description: '김관송 목사 무안읍에 이사 (성동리 715)' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h2 className="text-4xl font-light text-center mb-12 text-gray-800 tracking-wide">교회 연혁</h2>
      <div className="space-y-16">
        {decades.map((decade, decadeIndex) => (
          <div key={decadeIndex} className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gray-200"></div>
            <div className="ml-4">
              <h3 className="text-2xl font-light text-gray-700 mb-8 pl-4 border-l-4 border-gray-300">{decade.decade}</h3>
              <div className="space-y-12">
                {decade.years.map((yearData, yearIndex) => (
                  <div key={yearIndex} className="pl-8">
                    <h4 className="text-xl font-medium text-gray-600 mb-6">{yearData.year}년</h4>
                    <div className="space-y-6">
                      {yearData.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 group-hover:bg-gray-400 transition-colors duration-300"></div>
                          <div className="pl-4">
                            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                            <p className="text-gray-700 leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History; 