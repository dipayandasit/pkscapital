import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageModal from '../components/ImageModal'
import { galleryImages } from '../utils/galleryImages'

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>Gallery - PKS Capital Advisory LLP</title>
        <meta name="description" content="Explore our gallery showcasing our office spaces, team activities, and the diverse sectors we serve in investment banking and advisory services." />
        <meta name="keywords" content="PKS Capital gallery, office photos, team photos, investment banking gallery" />
        <meta property="og:title" content="Gallery - PKS Capital Advisory LLP" />
        <meta property="og:description" content="Explore our gallery showcasing our office spaces and team activities." />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-royal-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A glimpse into our world of investment banking and advisory excellence
          </p>
        </div>
      </section>

      {/* PR Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            PR
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our work and achievements
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => openModal(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 mb-1 font-montserrat">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        images={galleryImages}
        currentIndex={selectedImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </>
  )
}
