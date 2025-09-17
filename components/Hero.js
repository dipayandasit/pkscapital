import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-blue to-light-blue">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          opacity: 0.1
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat">
            PKS Capital Advisory LLP
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Your Growth Partner in Investment Banking & Advisory
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses through strategic financial solutions, mergers & acquisitions, 
            capital raising, and comprehensive advisory services across diverse sectors.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/services"
              className="bg-white text-royal-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Our Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center slide-in-left">
            <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-200">Successful Transactions</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center fade-in">
            <Users className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-200">Expert Team Members</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center slide-in-right">
            <Target className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
            <p className="text-gray-200">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
