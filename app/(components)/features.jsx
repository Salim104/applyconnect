const Features = () => {
  const features = [
    {
      icon: '/truck.svg',
      title: 'Free Shipping',
      description: 'From all orders over K1000'
    },
    {
      icon: '/trophy.svg',
      title: 'Affordable Prices',
      description: 'Get factory direct prices'
    },
    {
      icon: '/customer-service.svg',
      title: 'Dedicated support',
      description: 'Get all the support you need'
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 md:gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features