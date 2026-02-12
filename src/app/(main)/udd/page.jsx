'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashCan, faShieldHalved, faEnvelope, faClock,
  faFileLines, faQuestionCircle, faHeadset, faCircleCheck,
  faArrowRight, faChevronRight, faTriangleExclamation,
  faFileAlt, faGavel, faCookieBite, faUserShield,
  faCheckCircle, faEnvelopeCircleCheck, faDatabase,
  faKey, faUserClock, faBell, faDownload
} from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function UserDataDeletionPage() {
  const deletionMethods = [
    {
      id: "method-1",
      title: "Request via Email",
      description: "Send a deletion request directly to our privacy team. We'll process your request within 30 days.",
      action: "privacy@botflow.com",
      icon: faEnvelope,
      gradientFrom: "#6366F1",
      gradientTo: "#8B5CF6",
      buttonText: "Send Email Request"
    },
    {
      id: "method-2",
      title: "In-App Deletion",
      description: "Delete your data directly from your account settings. Instant removal of your personal information.",
      action: "Settings → Privacy → Delete Data",
      icon: faTrashCan,
      gradientFrom: "#8B5CF6",
      gradientTo: "#EC4899",
      buttonText: "Go to Settings"
    },
    {
      id: "method-3",
      title: "Contact Support",
      description: "Our support team can assist you with the data deletion process and answer any questions.",
      action: "24/7 Live Support Available",
      icon: faHeadset,
      gradientFrom: "#EC4899",
      gradientTo: "#6366F1",
      buttonText: "Contact Support"
    }
  ]

  const dataCategories = [
    {
      category: "Account Information",
      items: ["Name and email address", "Profile information", "Account preferences"],
      retention: "Deleted within 30 days"
    },
    {
      category: "Usage Data",
      items: ["Conversation history", "Bot interactions", "Feature usage"],
      retention: "Anonymized after 90 days"
    },
    {
      category: "Payment Information",
      items: ["Transaction history", "Billing address", "Payment method"],
      retention: "Retained for 7 years (legal requirement)"
    },
    {
      category: "Communications",
      items: ["Support tickets", "Email correspondence", "Feedback submissions"],
      retention: "Deleted within 60 days"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Submit Request",
      description: "Choose your preferred deletion method and submit your request with necessary verification.",
      icon: faEnvelopeCircleCheck,
      color: "#6366F1"
    },
    {
      number: "02",
      title: "Identity Verification",
      description: "We'll verify your identity to ensure the security of your data and prevent unauthorized deletions.",
      icon: faShieldHalved,
      color: "#8B5CF6"
    },
    {
      number: "03",
      title: "Data Processing",
      description: "Our system begins the secure deletion process across all our databases and backup systems.",
      icon: faDatabase,
      color: "#EC4899"
    },
    {
      number: "04",
      title: "Confirmation",
      description: "You'll receive a confirmation email once your data has been permanently deleted.",
      icon: faCheckCircle,
      color: "#6366F1"
    }
  ]

  const faqs = [
    {
      question: "How long does it take to delete my data?",
      answer: "We process deletion requests within 30 days, though most requests are completed within 7-10 business days. You'll receive email updates throughout the process."
    },
    {
      question: "Is data deletion really permanent?",
      answer: "Yes, once your deletion request is processed, your personal data is permanently erased from our active databases and will be removed from backups within 90 days."
    },
    {
      question: "What data can't be deleted immediately?",
      answer: "Some data may be retained for legal compliance (e.g., financial records for 7 years) or legitimate business purposes, but will be anonymized where possible."
    },
    {
      question: "Will deleting my data cancel my subscription?",
      answer: "Data deletion requests do not automatically cancel your subscription. Please manage your billing separately or contact support for assistance."
    }
  ]

  const legalDocs = [
    {
      title: "Privacy Policy",
      icon: faShieldHalved,
      active: false
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
      active: true
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="data-deletion-hero" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#6366F1] font-semibold text-sm">
              <FontAwesomeIcon icon={faTrashCan} className="mr-2" />Data Privacy
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
            User Data <span className="gradient-text">Deletion</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your data belongs to you. Learn how to request complete deletion of your personal information from our systems.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section id="important-notice" className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-2xl shadow-md">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-500 text-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Important: Data Deletion is Permanent</h2>
                <p className="text-gray-700 text-lg mb-3">
                  Once you request data deletion, all your personal information, conversation history, and account settings will be permanently erased. This action cannot be undone.
                </p>
                <p className="text-gray-600">
                  ⏱️ Processing time: 7-30 days • 📧 Confirmation email required • 🔒 Secure verification process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deletion Methods */}
      <section id="deletion-methods" className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Choose Your Deletion Method</h2>
            <p className="text-xl text-gray-600">Multiple ways to request data deletion, all secure and private</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deletionMethods.map((method) => (
              <div 
                key={method.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${method.gradientFrom} 0%, ${method.gradientTo} 100%)`
                  }}
                >
                  <FontAwesomeIcon icon={method.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <span className="text-sm text-gray-500 block mb-1">Action required:</span>
                  <span className="font-semibold text-[#0F172A]">{method.action}</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition"
                >
                  {method.buttonText} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deletion Process */}
      <section id="deletion-process" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent process for data deletion</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] opacity-30"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}40 100%)`,
                      border: `2px solid ${step.color}`
                    }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="text-3xl" style={{ color: step.color }} />
                  </div>
                  <span className="text-sm font-bold mb-2" style={{ color: step.color }}>{step.number}</span>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Categories & Retention */}
      <section id="data-retention" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Data Categories & Retention</h2>
            <p className="text-xl text-gray-600">What data we delete and how long it takes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{category.category}</h3>
                <ul className="space-y-3 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3 text-sm" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">Retention period:</span>
                  <span className="font-semibold text-[#6366F1]">{category.retention}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about data deletion</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 flex items-start">
                  <span className="text-[#6366F1] mr-3">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 flex items-start">
                  <span className="text-[#8B5CF6] mr-3 font-bold">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section id="verification" className="py-16 px-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <FontAwesomeIcon icon={faShieldHalved} className="text-5xl mb-6 opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Identity Verification Required</h2>
          <p className="text-xl mb-8 opacity-90">
            To protect your account, all deletion requests require identity verification. 
            We never process deletion requests without proper authentication.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <span>Email verification</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <FontAwesomeIcon icon={faKey} className="mr-3" />
              <span>Account password</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <FontAwesomeIcon icon={faUserClock} className="mr-3" />
              <span>2FA if enabled</span>
            </div>
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
              Need Help With Data Deletion?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our privacy team is ready to assist you with any questions about deleting your data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Privacy Team
              </a>
              <a 
                href="#" 
                className="inline-flex items-center bg-white text-[#6366F1] border-2 border-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6366F1] hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                View Privacy Policy
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