'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Check, 
  Sparkles,
  Bot,
  Cloud,
  Smartphone,
  MessageSquare,
  Plane,
  BarChart3,
  Eye,
  GraduationCap,
  Target,
  Users,
  Code,
  TrendingUp
} from 'lucide-react'
import { services } from '@/data'
import { Service } from '@/types'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    '🤖': Bot,
    '☁️': Cloud,
    '📱': Smartphone,
    '💬': MessageSquare,
    '✈️': Plane,
    '🍌': Bot, // Using Bot for Nano Banana
    '📊': BarChart3,
    '👁️': Eye,
    '📚': GraduationCap,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-6">
            <Sparkles className="w-4 h-4 text-brown-600" />
            <span className="text-sm text-brown-700 font-medium">
              Our AI Services
            </span>
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive AI Solutions</span>
          </h2>
          
          <p className="text-xl text-grey-700 max-w-3xl mx-auto">
            From intelligent agents to complete SaaS platforms, we deliver cutting-edge AI solutions 
            that transform your business operations and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Bot
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white border border-grey-200 rounded-2xl p-8 hover:border-brown-300 transition-all duration-300 card-hover shadow-sm hover:shadow-md"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brown-100/5 to-grey-100/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brown-100/20 to-grey-100/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-brown-600" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-grey-900 mb-4 group-hover:text-brown-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-grey-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-brown-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-grey-700">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-brown-600 font-medium">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    className="flex items-center space-x-2 text-brown-600 hover:text-brown-700 font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`
                    inline-block px-2 py-1 rounded-full text-xs font-medium capitalize
                    ${service.category === 'ai-agents' ? 'bg-brown-100 text-brown-700' : ''}
                    ${service.category === 'saas' ? 'bg-grey-100 text-grey-700' : ''}
                    ${service.category === 'automation' ? 'bg-brown-50 text-brown-600' : ''}
                    ${service.category === 'education' ? 'bg-grey-200 text-grey-800' : ''}
                    ${service.category === 'analytics' ? 'bg-brown-200 text-brown-800' : ''}
                  `}>
                    {service.category.replace('-', ' ')}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brown-50 to-grey-50 border border-brown-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-grey-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-grey-700 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can revolutionize your operations, 
              boost efficiency, and drive growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        size="xl"
      >
        {selectedService && (
          <div className="space-y-8">
            {/* Detailed Description */}
            <div>
              <h4 className="text-xl font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-brown-400" />
                <span>Service Overview</span>
              </h4>
              <p className="text-grey-700 leading-relaxed text-lg">
                {selectedService.detailedDescription}
              </p>
            </div>

            {/* Grid Layout for Benefits, Use Cases, Tech Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Key Benefits */}
              {selectedService.benefits && (
                <Card variant="primary">
                  <h4 className="text-lg font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span>Key Benefits</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-grey-700 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Use Cases */}
              {selectedService.useCases && (
                <Card variant="primary">
                  <h4 className="text-lg font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                    <Target className="w-5 h-5 text-brown-400" />
                    <span>Use Cases</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-brown-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-grey-700 text-sm leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Technology Stack */}
              {selectedService.techStack && (
                <Card variant="primary">
                  <h4 className="text-lg font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                    <Code className="w-5 h-5 text-grey-400" />
                    <span>Tech Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-grey-500/20 text-grey-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* Core Features */}
            <div>
              <h4 className="text-xl font-semibold text-grey-900 mb-4">Core Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-grey-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-brown-100">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
              >
                <Users className="w-5 h-5" />
                <span>Get Started with This Service</span>
              </Button>
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
              >
                <Eye className="w-5 h-5" />
                <span>View Related Projects</span>
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Services