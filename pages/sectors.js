import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, Building2, CreditCard, Users, TrendingUp, Briefcase } from 'lucide-react'

export default function Sectors() {
  const sectors = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Comprehensive financial solutions for healthcare providers, pharmaceutical companies, and medical technology firms",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      services: [
        "Healthcare M&A transactions",
        "Medical device financing",
        "Pharmaceutical partnerships",
        "Healthcare infrastructure funding"
      ]
    },
    {
      icon: Building2,
      title: "Hotels & Hospitality",
      description: "Specialized advisory services for hotel chains, resorts, and hospitality businesses",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      services: [
        "Hotel acquisition and development",
        "Hospitality brand partnerships",
        "Tourism infrastructure funding",
        "Restaurant chain expansion"
      ]
    },
    {
      icon: CreditCard,
      title: "BFSI",
      description: "Financial services expertise for banks, insurance companies, and fintech startups",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      services: [
        "Banking sector consolidation",
        "Insurance company partnerships",
        "Fintech investment opportunities",
        "Regulatory compliance advisory"
      ]
    },
    {
      icon: Users,
      title: "SMEs",
      description: "Tailored financial solutions for small and medium enterprises across various industries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      services: [
        "Growth capital raising",
        "Business expansion funding",
        "Succession planning",
        "Operational efficiency improvement"
      ]
    },
    {
      icon: TrendingUp,
      title: "Venture Capital / Private Equity",
      description: "Investment and advisory services for emerging businesses and growth-stage companies",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      services: [
        "Early-stage investments",
        "Growth capital deployment",
        "Portfolio company management",
        "Exit strategy planning"
      ]
    },
    {
      icon: Briefcase,
      title: "Technology & Innovation",
      description: "Financial advisory for technology companies, startups, and innovation-driven businesses",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      services: [
        "Tech startup funding",
        "Digital transformation advisory",
        "IP monetization strategies",
        "Technology partnerships"
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Core Sectors - PKS Capital Advisory LLP</title>
        <meta name="description" content="PKS Capital serves diverse sectors including healthcare, hospitality, BFSI, SMEs, and venture capital with specialized financial solutions." />
        <meta name="keywords" content="healthcare finance, hospitality advisory, BFSI services, SME funding, venture capital, private equity" />
        <meta property="og:title" content="Core Sectors - PKS Capital Advisory LLP" />
        <meta property="og:description" content="Discover how we serve diverse sectors with specialized financial solutions and industry expertise." />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-royal-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Core Sectors
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Specialized expertise across diverse industries and sectors
          </p>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep sector knowledge enables us to provide tailored financial solutions 
              that address the unique challenges and opportunities in each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-royal-blue bg-opacity-90 rounded-full p-3">
                      <sector.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                      Our Services:
                    </h4>
                    <ul className="space-y-2">
                      {sector.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-royal-blue rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Sector Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record across different sectors speaks to our expertise and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-royal-blue mb-2">150+</div>
              <div className="text-gray-600">Healthcare Transactions</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-royal-blue mb-2">100+</div>
              <div className="text-gray-600">Hospitality Projects</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-royal-blue mb-2">200+</div>
              <div className="text-gray-600">SME Engagements</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-royal-blue mb-2">50+</div>
              <div className="text-gray-600">VC/PE Deals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Why Choose PKS Capital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sector-specific expertise sets us apart in the investment banking landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Years of Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep industry knowledge accumulated over years of successful transactions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Core Sectors</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized expertise across diverse industries and market segments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-royal-blue">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Successful Deals</h3>
              <p className="text-gray-600 leading-relaxed">
                Proven track record of delivering value across all sectors we serve
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our sector experts help you navigate the complexities of your industry 
            and achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-royal-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Sector-Specific Advice
            </a>
            <a 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
