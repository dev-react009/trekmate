import { useState, useEffect, useRef } from 'react';
import { Card, Button, Chip, Avatar } from "@heroui/react";
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mountain Guide',
      location: 'Colorado, USA',
      rating: 5,
      text: 'Trekmate has revolutionized how I guide groups. The offline maps and safety features give me confidence in remote areas, and my clients love the community aspect.',
      avatar: 'SJ',
      trails: 150
    },
    {
      name: 'Marcus Chen',
      role: 'Adventure Photographer',
      location: 'British Columbia',
      rating: 5,
      text: 'As someone who hikes solo frequently, the GPS tracking and emergency features are invaluable. Plus, the photo sharing community is incredibly supportive.',
      avatar: 'MC',
      trails: 89
    },
    {
      name: 'Elena Rodriguez',
      role: 'Weekend Warrior',
      location: 'California, USA',
      rating: 5,
      text: 'I went from being intimidated by hiking to conquering my first 14er! The progressive trail recommendations and supportive community made all the difference.',
      avatar: 'ER',
      trails: 47
    },
    {
      name: 'James Wilson',
      role: 'Hiking Enthusiast',
      location: 'Scotland, UK',
      rating: 5,
      text: 'The detailed topographic maps and weather integration have kept me safe on challenging Scottish Munros. This app is a game-changer for serious hikers.',
      avatar: 'JW',
      trails: 203
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Custom slow smooth scroll
  useEffect(() => {
    const target = cardRefs.current[currentIndex];
    if (target && scrollContainerRef.current) {
      const start = scrollContainerRef.current.scrollLeft;
      const end = target.offsetLeft;
      const duration = 1200; // 1.2 seconds (slow)
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        scrollContainerRef.current!.scrollLeft =
          start + (end - start) * progress;
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [currentIndex]);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Chip variant="bordered" color='success' className="mb-4">
            Testimonials
          </Chip>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Trusted by adventurers worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of hikers who rely on Trekmate for their outdoor adventures
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="relative  flex space-x-8 overflow-x-scroll scrollbar-hide"
          style={{ scrollBehavior: "auto" }} // disabled native smooth scroll
        >
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              ref={(el) => {(cardRefs.current[i] = el)}}
              className="min-w-[90%] p-8 md:p-12 border-0 shadow-xl bg-white relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#38e078]/20" />
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Avatar
                      size="lg"
                      name={testimonial.avatar}
                      className="bg-[#38e078]/10 text-[#38e078]"
                      src={`/avatars/${testimonial.avatar}.jpg`}
                    />
                    <div>
                      <div className="text-gray-900 font-medium">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-[#38e078] mb-2">
                    {testimonial.trails}
                  </div>
                  <div className="text-gray-600">Trails Completed</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="bordered"
            isIconOnly
            onPress={prevTestimonial}
            className="h-12 w-12 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#38e078]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <Button
            variant="faded"
            isIconOnly
            onPress={nextTestimonial}
            className="h-12 w-12 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
