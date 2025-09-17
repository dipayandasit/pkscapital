import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Building, TrendingUp, Target, Users, DollarSign, BarChart3, Users2, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Building,
      title: "Mergers & Acquisitions",
      description: "Strategic M&A advisory for growth and consolidation opportunities",
      features: [
        "Deal structuring and valuation",
        "Due diligence and risk assessment",
        "Negotiation and transaction management",
        "Post-merger integration support"
      ]
    },
    {
      icon: TrendingUp,
      title: "Capital Raising",
      description: "Access to diverse funding sources and capital markets",
      features: [
        "Equity and debt financing",
        "Private placement and public offerings",
        "Strategic investor identification",
        "Capital structure optimization"
      ]
    },
    {
      icon: Target,
      title: "Strategic Advisory",
      description: "Expert guidance for strategic business decisions and planning",
      features: [
        "Business strategy development",
        "Market analysis and positioning",
        "Operational efficiency improvement",
        "Growth strategy implementation"
      ]
    },
    {
      icon: Users,
      title: "Venture Capital Services",
      description: "Investment and advisory services for emerging businesses",
      features: [
        "Early-stage investment opportunities",
        "Portfolio company management",
        "Exit strategy planning",
        "Startup advisory and mentoring"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: DollarSign,
      title: "Financial Modeling",
      description: "Comprehensive financial models for decision making and valuation"
    },
    {
      icon: BarChart3,
      title: "Market Research",
      description: "In-depth market analysis and competitive intelligence"
    },
    {
      icon: Users2,
      title: "Partnership Development",
      description: "Strategic partnership identification and relationship building"
    },
    {
      icon: Lightbulb,
      title: "Innovation Advisory",
      description: "Guidance on digital transformation and innovation strategies"
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services - PKS Capital Advisory LLP</title>
        <meta name="description" content="Comprehensive investment banking and advisory services including M&A, capital raising, strategic advisory, and venture capital services." />
        <meta name="keywords" content="investment banking services, M&A advisory, capital raising, strategic advisory, venture capital" />
        <meta property="og:title" content="Our Services - PKS Capital Advisory LLP" />
        <meta property="og:description" content="Discover our comprehensive range of investment banking and advisory services designed to help your business grow." />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-royal-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our primary service offerings designed to drive your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="bg-royal-blue bg-opacity-10 rounded-full p-4 flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-royal-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-royal-blue rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting services to complement your core business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-royal-blue bg-opacity-10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-royal-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your business objectives and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">Analysis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive market and financial analysis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Developing tailored strategies and solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">Execution</h3>
              <p className="text-gray-600 text-sm">
                Implementing solutions with ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our expert team help you achieve your business objectives through 
            our comprehensive range of services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-royal-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
            </a>
            <a 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
