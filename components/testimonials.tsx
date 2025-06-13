'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'SARAH WILLIAMS',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    timeAgo: 'a year ago',
    content: 'I bought 2 reborn dolls for my daughters. When they arrived they surprised me because they were beautiful! They have a very good finish. It shows that they are made with great care. They came very well packaged, always meeting the expected delivery time. The treatment was always very pleasant and attentive. I will trust Rebecca\'s Reborns again without a doubt in the near future.'
  },
  {
    id: 2,
    name: 'MARIA GONZALEZ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    timeAgo: '3 years ago',
    content: 'My daughter is very happy with her reborn doll. It\'s a sweetness. It is certainly a pleasure to hold this doll in your arms. It\'s more than just a toy. Rebecca has guided me very well during the purchasing process. She has been very kind. A complete success.'
  },
  {
    id: 3,
    name: 'JENNIFER SMITH',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    timeAgo: 'a month ago',
    content: 'Super recommended, the best reborn babies, seeing them in photos is not the same as having them in your arms, a unique experience for our little ones. I bought one for my three-year-old princess and she just said to me, mom, thank you very much for this beautiful surprise, I really like my baby, she is too precious. These baby beauties inspire tenderness and delicacy.'
  },
  {
    id: 4,
    name: 'ASHLEY JOHNSON',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    timeAgo: '4 weeks ago',
    content: 'The attention to detail is incredible. Every feature is so lifelike and the quality is outstanding. My reborn baby has brought so much joy to our family. The customer service was exceptional throughout the entire process.'
  }
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-satoshi text-4xl font-bold text-[var(--color-primary)] mb-4 sm:text-5xl">
            Opinions with feeling
          </h2>
          <p className="font-body text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            See what our customers have to say about their Rebecca's Reborn experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-satoshi text-lg font-semibold text-[var(--color-primary)]">
                    {testimonial.name}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-text-light)]">
                    {testimonial.timeAgo}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="font-body text-[var(--color-text)] leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}

          {/* Highlight card */}
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 text-white lg:col-span-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-satoshi text-2xl font-bold mb-4">
                Join Our Happy Families
              </h3>
              <p className="font-body text-white/90 mb-6">
                Thousands of families have found their perfect reborn baby with us. Be the next to experience the magic.
              </p>
              <button className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-satoshi font-semibold hover:bg-gray-100 transition-colors">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
