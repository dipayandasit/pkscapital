import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { TrendingUp, Target, Users, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>PKS Capital Advisory LLP - Your Growth Partner in Investment Banking & Advisory</title>
        <meta name="description" content="PKS Capital Advisory LLP provides comprehensive investment banking and advisory services including mergers & acquisitions, capital raising, strategic advisory, and venture capital services." />
        <meta name="keywords" content="investment banking, mergers acquisitions, capital raising, strategic advisory, venture capital, PKS Capital" />
        <meta property="og:title" content="PKS Capital Advisory LLP - Your Growth Partner in Investment Banking & Advisory" />
        <meta property="og:description" content="Empowering businesses through strategic financial solutions across diverse sectors." />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <Hero />

      {/* Vision, Mission, Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and a clear vision for the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <Target className="h-16 w-16 text-royal-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading investment banking and advisory firm that empowers businesses 
                  to achieve their growth potential through innovative financial solutions and 
                  strategic partnerships.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-royal-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional investment banking and advisory services that create 
                  sustainable value for our clients, partners, and stakeholders while maintaining 
                  the highest standards of integrity and professionalism.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <Users className="h-16 w-16 text-royal-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Our Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  We follow a systematic approach: Understanding your needs, developing tailored 
                  strategies, executing with precision, and ensuring long-term success through 
                  continuous support and monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-opacity-20 transition-colors duration-300">
                <Building2 className="h-12 w-12 text-royal-blue mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic M&A advisory for growth and consolidation opportunities
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-opacity-20 transition-colors duration-300">
                <TrendingUp className="h-12 w-12 text-royal-blue mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Capital Raising</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access to diverse funding sources and capital markets
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-opacity-20 transition-colors duration-300">
                <Target className="h-12 w-12 text-royal-blue mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Strategic Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance for strategic business decisions and planning
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-opacity-20 transition-colors duration-300">
                <Users className="h-12 w-12 text-royal-blue mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Venture Capital</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Investment and advisory services for emerging businesses
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center space-x-2 bg-royal-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our expert team help you achieve your financial goals through strategic 
            investment banking and advisory services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-royal-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
