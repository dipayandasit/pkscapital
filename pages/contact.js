import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const offices = [
    {
      city: "Kolkata (HQ)",
      address: "123 Business District, Kolkata 700001, West Bengal, India",
      phone: "+91 98765 43210",
      email: "kolkata@pkscapital.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Mumbai",
      address: "456 Financial Center, Mumbai 400001, Maharashtra, India",
      phone: "+91 98765 43211",
      email: "mumbai@pkscapital.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Lucknow",
      address: "789 Corporate Plaza, Lucknow 226001, Uttar Pradesh, India",
      phone: "+91 98765 43212",
      email: "lucknow@pkscapital.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "United Kingdom",
      address: "321 Business Square, London EC1A 4HD, United Kingdom",
      phone: "+44 20 7123 4567",
      email: "uk@pkscapital.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM"
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us - PKS Capital Advisory LLP</title>
        <meta name="description" content="Get in touch with PKS Capital Advisory LLP. Contact our offices in Kolkata, Mumbai, Lucknow, and UK for investment banking and advisory services." />
        <meta name="keywords" content="contact PKS Capital, investment banking contact, financial advisory contact, office locations" />
        <meta property="og:title" content="Contact Us - PKS Capital Advisory LLP" />
        <meta property="og:description" content="Get in touch with our investment banking and advisory experts across multiple locations." />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-royal-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our expert team for all your investment banking and advisory needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to discuss your business needs? Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">Thank you for your message. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your business needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-royal-blue text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help you achieve your business goals. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-royal-blue bg-opacity-10 rounded-full p-3 flex-shrink-0">
                    <Phone className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-royal-blue bg-opacity-10 rounded-full p-3 flex-shrink-0">
                    <Mail className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@pkscapital.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-royal-blue bg-opacity-10 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-royal-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our strategically located offices across India and the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-royal-blue mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">
                    {office.city}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {office.address}
                  </p>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 text-royal-blue mr-2 flex-shrink-0" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 text-royal-blue mr-2 flex-shrink-0" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 text-royal-blue mr-2 flex-shrink-0" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our headquarters in Kolkata is easily accessible and well-connected
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map</p>
              <p className="text-gray-500 text-sm">123 Business District, Kolkata 700001</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
