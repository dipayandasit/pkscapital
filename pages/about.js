import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Target, Users, Award, TrendingUp, Shield } from 'lucide-react'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - PKS Capital Advisory LLP</title>
        <meta name="description" content="Learn about PKS Capital Advisory LLP's mission, vision, and commitment to providing exceptional investment banking and advisory services." />
        <meta name="keywords" content="about PKS Capital, investment banking team, financial advisory, company history" />
        <meta property="og:title" content="About Us - PKS Capital Advisory LLP" />
        <meta property="og:description" content="Discover our mission, vision, and commitment to excellence in investment banking and advisory services." />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-royal-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            About PKS Capital Advisory LLP
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in investment banking and advisory services
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src="/images/logo/companylogo.svg"
                  alt="PKS Capital Logo"
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                  Company Overview
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PKS Capital Advisory LLP is a leading investment banking and advisory firm 
                  dedicated to empowering businesses across diverse sectors. With our headquarters 
                  in Kolkata and offices in Mumbai, Lucknow, and the UK, we provide comprehensive 
                  financial solutions to clients worldwide.
                </p>
                <p>
                  Our team of experienced professionals brings together deep industry expertise 
                  and innovative thinking to deliver exceptional results. We specialize in 
                  mergers & acquisitions, capital raising, strategic advisory, and venture 
                  capital services, helping businesses achieve their growth objectives.
                </p>
                <p>
                  Since our inception, we have successfully completed over numerous marquee deals, 
                  working with companies ranging from emerging startups to established 
                  enterprises across healthcare, hospitality, BFSI, and SME sectors.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="PKS Capital Office"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <Target className="h-16 w-16 text-royal-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                To be the leading investment banking and advisory firm that empowers businesses 
                to achieve their growth potential through innovative financial solutions and 
                strategic partnerships. We envision a future where every business has access 
                to world-class financial expertise and guidance.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <TrendingUp className="h-16 w-16 text-royal-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                To provide exceptional investment banking and advisory services that create 
                sustainable value for our clients, partners, and stakeholders while maintaining 
                the highest standards of integrity, professionalism, and innovation in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Understanding</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We begin by thoroughly understanding your business, goals, and challenges to develop tailored solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts develop comprehensive strategies aligned with your objectives and market conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We execute with precision, leveraging our network and expertise to achieve optimal results.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide ongoing support and monitoring to ensure long-term success and value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <Shield className="h-16 w-16 text-royal-blue mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest ethical standards in all our interactions and transactions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <Award className="h-16 w-16 text-royal-blue mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every project, delivering exceptional results for our clients.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <Users className="h-16 w-16 text-royal-blue mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our clients as partners, fostering long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
