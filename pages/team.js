import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Linkedin, Mail, Phone, Award, Users, Target, TrendingUp } from 'lucide-react'

export default function Team() {
  const seniorManagement = [
    {
      name: "Somenath Chatterjee",
      designation: "Managing Partner",
      bio: "Over 20 years of experience in investment banking and corporate finance. Expert in M&A transactions and strategic advisory across diverse sectors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "admin@pkscapitaladvisory.com",
      phone: "+91 98765 43210"
    },
    {
      name: "Dr. Purkayastha",
      designation: "Advisor",
      bio: "PhD in Finance with 18 years of expertise in capital markets and venture capital. Specializes in healthcare and technology sector investments.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "admin@pkscapitaladvisory.com",
      phone: "+91 98765 43211"
    },
    {
      name: "Vikram Tiwari",
      designation: "Director",
      bio: "15 years of experience in private equity and strategic advisory. Expert in BFSI sector transactions and operational restructuring.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "admin@pkscapitaladvisory.com",
      phone: "+91 98765 43212"
    },
    {
      name: "Bishakha Dutta",
      designation: "Director",
      bio: "12 years of experience in corporate finance and M&A. Specializes in hospitality and retail sector transactions with focus on growth capital.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "admin@pkscapitaladvisory.com",
      phone: "+91 98765 43213"
    },
    {
      name: "Moumita Ghosh",
      designation: "Director",
      bio: "10 years of experience in venture capital and startup advisory. Expert in early-stage investments and technology sector growth strategies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "admin@pkscapitaladvisory.com",
      phone: "+91 98765 43214"
    },
    {
      name: "Ankita Dey",
      designation: "Strategy",
      bio: "8 years of experience in strategic planning and business development. Expert in market analysis and growth strategy formulation across diverse sectors.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "admin@pkscapitaladvisory.com",
      phone: "+91 98765 43215"
    }
  ]

  const teamStats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Average Experience"
    },
    {
      icon: Target,
      number: "500+",
      label: "Successful Transactions"
    },
    {
      icon: TrendingUp,
      number: "6",
      label: "Core Sectors Served"
    }
  ]

  return (
    <>
      <Head>
        <title>Our Team - PKS Capital Advisory LLP</title>
        <meta name="description" content="Meet our experienced team of investment banking professionals led by senior management with decades of expertise in M&A, capital raising, and strategic advisory." />
        <meta name="keywords" content="PKS Capital team, investment banking professionals, senior management, M&A experts, financial advisors" />
        <meta property="og:title" content="Our Team - PKS Capital Advisory LLP" />
        <meta property="og:description" content="Meet our experienced team of investment banking professionals with decades of expertise." />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-royal-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-10 w-10 text-royal-blue" />
                </div>
                <div className="text-3xl font-bold text-royal-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Senior Management Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in investment banking, 
              corporate finance, and strategic advisory across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seniorManagement.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {member.designation}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail size={16} className="text-royal-blue mr-3 flex-shrink-0" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone size={16} className="text-royal-blue mr-3 flex-shrink-0" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Linkedin size={16} className="text-royal-blue mr-3 flex-shrink-0" />
                      <a href="#" className="text-sm hover:text-royal-blue transition-colors">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Our Team Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values and principles that guide our team and define our work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-royal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of teamwork and collaborative problem-solving to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-royal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in everything we do, maintaining the highest standards of professionalism and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-royal-blue bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-10 w-10 text-royal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace innovation and continuous learning to stay ahead of market trends and provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-royal-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We're always looking for talented professionals who share our passion for excellence 
            and commitment to client success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-royal-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Open Positions
            </a>
            <a 
              href="mailto:admin@pkscapitaladvisory.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors duration-200"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
