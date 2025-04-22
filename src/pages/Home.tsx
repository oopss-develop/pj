import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const slides = [
    {
      image: '/images/slider/slide1.jpg',
      title: '교회 소식',
      description: '최신 교회 소식을 확인하세요',
    },
    {
      image: '/images/slider/slide2.jpg',
      title: '특별 행사',
      description: '다가오는 특별 행사에 참여하세요',
    },
    {
      image: '/images/slider/slide3.jpg',
      title: '선교 소식',
      description: '교회의 선교 활동을 소개합니다',
    },
  ];

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Slides Container */}
        <div className="relative z-10 h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-transform duration-500 ${
                index === currentSlide
                  ? 'translate-x-0'
                  : index < currentSlide
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white">
                  {slide.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => {
                setSlideDirection(index > currentSlide ? 'right' : 'left');
                setCurrentSlide(index);
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          onClick={prevSlide}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          onClick={nextSlide}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* Worship Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">예배 시간</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">주일 예배</h3>
              <p className="text-gray-600">오전 11:00</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">수요 예배</h3>
              <p className="text-gray-600">오후 7:30</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">새벽 기도</h3>
              <p className="text-gray-600">오전 5:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">최근 설교</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sermon cards will be added here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">연락하기</h2>
            <p className="text-gray-600 mb-8">
              교회에 대해 궁금하신 점이 있으시면 언제든지 연락주세요.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 