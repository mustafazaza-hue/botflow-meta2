'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved, faDownload, faClock, faGlobe,
  faFileLines, faQuestionCircle, faHeadset,
  faArrowRight, faChevronRight, faHistory,
  faFileAlt, faGavel, faCookieBite, faUserShield
} from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  const policyVersions = [
    {
      version: "3.1.0",
      date: "January 15, 2024",
      description: "Updated to include enhanced data protection measures and compliance with latest international privacy regulations.",
      isLatest: true,
      gradientFrom: "#6366F1",
      gradientTo: "#8B5CF6"
    },
    {
      version: "3.0.2",
      date: "November 8, 2023",
      description: "Minor updates to clarify data retention policies and third-party integrations.",
      isLatest: false,
      gradientFrom: "#8B5CF6",
      gradientTo: "#EC4899"
    },
    {
      version: "3.0.0",
      date: "August 22, 2023",
      description: "Major revision to align with GDPR and CCPA requirements, including new user rights sections.",
      isLatest: false,
      gradientFrom: "#EC4899",
      gradientTo: "#6366F1"
    },
    {
      version: "2.5.1",
      date: "April 12, 2023",
      description: "Updates to cookie policy and tracking technologies disclosure.",
      isLatest: false,
      gradientFrom: "#6366F1",
      gradientTo: "#8B5CF6"
    },
    {
      version: "2.0.0",
      date: "January 5, 2023",
      description: "Complete restructure to improve readability and user understanding of privacy practices.",
      isLatest: false,
      gradientFrom: "#8B5CF6",
      gradientTo: "#EC4899"
    },
    {
      version: "1.8.5",
      date: "September 18, 2022",
      description: "Initial public release with comprehensive privacy framework.",
      isLatest: false,
      gradientFrom: "#EC4899",
      gradientTo: "#6366F1"
    }
  ]

  const legalDocs = [
    {
      title: "Privacy Policy",
      icon: faShieldHalved,
      active: true
    },
    {
      title: "Terms of Service",
      icon: faGavel,
      active: false
    },
    {
      title: "Cookie Policy",
      icon: faCookieBite,
      active: false
    },
    {
      title: "GDPR",
      icon: faUserShield,
      active: false
    }
  ]

  const filters = [
    { label: "United States", icon: faGlobe, active: true },
    { label: "English", icon: faFileLines, active: true },
    { label: "All Years", icon: faHistory, active: true }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="privacy-hero" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#6366F1] font-semibold text-sm">
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />Privacy First
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Document History & Versions — Transparency and commitment to protecting your data
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="filters" className="py-8 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-lg"
                >
                  <FontAwesomeIcon icon={filter.icon} className="text-[#6366F1] text-sm" />
                  <span className="text-[#0F172A] font-medium">{filter.label}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Latest Version Highlight */}
      <section id="latest-version" className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl p-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <div className="inline-block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-4 py-1 rounded-full text-white text-sm font-semibold mb-4">
                    LATEST VERSION
                  </div>
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-2">Privacy Policy</h2>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold gradient-text mr-3">Version 3.1.0</span>
                    <span className="text-gray-500 flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      January 15, 2024
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg max-w-3xl mb-6">
                    Updated to include enhanced data protection measures and compliance with latest international privacy regulations.
                  </p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version History */}
      <section id="version-history" className="py-16 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A]">Version History</h2>
            <span className="text-gray-500">Items per page: 6</span>
          </div>
          
          <div className="space-y-6">
            {policyVersions.map((version, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-[#0F172A]">Privacy Policy</h3>
                      <span 
                        className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                        style={{
                          background: `linear-gradient(135deg, ${version.gradientFrom} 0%, ${version.gradientTo} 100%)`
                        }}
                      >
                        Version {version.version}
                      </span>
                      {version.isLatest && (
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Latest
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500 mb-3">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      {version.date}
                    </div>
                    <p className="text-gray-600">{version.description}</p>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[#6366F1] hover:text-[#8B5CF6] font-semibold transition"
                  >
                    Download PDF 
                    <FontAwesomeIcon icon={faDownload} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicator */}
          <div className="mt-12 flex justify-center">
            <span className="text-gray-500">Showing 1-6 of 6 versions</span>
          </div>
        </div>
      </section>

      {/* Legal Documents Navigation */}
      <section id="legal-docs" className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {legalDocs.map((doc, index) => (
              <a
                key={index}
                href="#"
                className={`p-6 rounded-xl transition ${
                  doc.active 
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg' 
                    : 'bg-gray-50 text-[#0F172A] hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={doc.icon} className="text-2xl" />
                  <span className="font-semibold">{doc.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-white text-4xl" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
              Have Questions About Our Privacy Policy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help you understand how we protect your data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition"
              >
                <FontAwesomeIcon icon={faHeadset} className="mr-2" />
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center bg-white text-[#6366F1] border-2 border-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6366F1] hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                View All Legal Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation Preview */}


      <Footer />
    </main>
  )
}