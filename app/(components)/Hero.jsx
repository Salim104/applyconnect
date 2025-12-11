"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  )
  const slides = [
    {
      headline: 'Health meets precision.',
      subHeadline: 'Track your fitness, stay connected, and monitor your well being with Apple\'s most advanced watch yet.',
      image: '/slide-1.png',
      bgColor: 'bg-black'
    },
    {
      headline: 'Power reimagined',
      subHeadline: 'The iPhone 17 delivers unmatched performance, a stunning display, and all-day battery — built for the future.',
      image: '/slide-2.png',
      bgColor: 'bg-zinc-900'
    },
    {
      headline: 'Sound that feels alive',
      subHeadline: 'Experience rich, immersive audio with instant pairing and seamless switching across all your devices.',
      image: '/slide-3.png',
      bgColor: 'bg-neutral-100'
    }
  ]
  
  return (
    <div className="relative w-full">
      <Carousel 
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div 
                className={`relative w-full h-[500px] md:h-[600px] overflow-hidden ${slide.bgColor}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Content overlay */}
                <div className="relative z-10 container mx-auto h-full px-6 md:px-12 flex items-center">
                  <div className="max-w-xl space-y-6">
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${index === 1 ? 'text-black' : 'text-white'}`}>
                      {slide.headline}
                    </h1>
                    <p className={`text-base md:text-lg leading-relaxed ${index === 1 ? 'text-gray-700' : 'text-gray-300'}`}>
                      {slide.subHeadline}
                    </p>
                    <div>
                      <button className={`${index === 1 ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'} px-6 py-3 rounded-full font-medium transition-colors`}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 md:right-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>
    </div>
  )
}

export default Hero