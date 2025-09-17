import { Building2, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-xl font-bold font-montserrat">PKS Capital</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your Growth Partner in Investment Banking & Advisory. 
              Empowering businesses through strategic financial solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/sectors" className="text-gray-300 hover:text-white transition-colors">Core Sectors</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Mergers & Acquisitions</span></li>
              <li><span className="text-gray-300">Capital Raising</span></li>
              <li><span className="text-gray-300">Strategic Advisory</span></li>
              <li><span className="text-gray-300">Venture Capital Services</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-royal-blue mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">Kolkata HQ</p>
                  <p>123 Business District, Kolkata 700001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-royal-blue flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-royal-blue flex-shrink-0" />
                <span className="text-sm text-gray-300">info@pkscapital.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PKS Capital Advisory LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
