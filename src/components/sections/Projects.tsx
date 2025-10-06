'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Play,
  Sparkles,
  Filter,
  CheckCircle,
  Clock,
  Calendar,
  Target,
  Lightbulb,
  TrendingUp,
  Award
} from 'lucide-react'
import { projects } from '@/data'
import { Project } from '@/types'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ai-agent', name: 'AI Agents', count: projects.filter(p => p.category === 'ai-agent').length },
    { id: 'medical', name: 'Healthcare', count: projects.filter(p => p.category === 'medical').length },
    { id: 'automation', name: 'Automation', count: projects.filter(p => p.category === 'automation').length },
    { id: 'hr', name: 'HR Systems', count: projects.filter(p => p.category === 'hr').length },
    { id: 'travel', name: 'Travel', count: projects.filter(p => p.category === 'travel').length },
    { id: 'social', name: 'Social Media', count: projects.filter(p => p.category === 'social').length },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-400" />
      case 'planned':
        return <Calendar className="w-4 h-4 text-blue-400" />
      default:
        return <CheckCircle className="w-4 h-4 text-green-400" />
    }
  }

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'planned':
        return 'Planned'
      default:
        return 'Completed'
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
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
              Our Portfolio
            </span>
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured AI Projects</span>
          </h2>
          
          <p className="text-xl text-grey-700 max-w-3xl mx-auto">
            Explore our cutting-edge AI projects that showcase the power of intelligent automation, 
            machine learning, and innovative problem-solving across diverse industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-brown-600 border-brown-500 text-white'
                  : 'bg-white border-brown-200 text-grey-700 hover:border-brown-300 hover:text-grey-900'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-xs bg-brown-100 px-1.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-brown-200 rounded-2xl overflow-hidden hover:border-brown-300 transition-all duration-300 card-hover shadow-sm"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      {getStatusIcon(project.status)}
                      <span className="text-xs font-medium text-grey-900">
                        {getStatusText(project.status)}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-2 py-1 bg-brown-100 backdrop-blur-sm text-brown-700 text-xs font-medium rounded-full capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center"
                      >
                        <div className="flex space-x-4">
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-brown-600 hover:bg-brown-700 text-white px-4 py-2 rounded-lg transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Play className="w-4 h-4" />
                              <span>Demo</span>
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-grey-900 mb-2 group-hover:text-brown-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-grey-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-brown-50 text-brown-700 text-xs rounded-full border border-brown-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-grey-100 text-grey-600 text-xs rounded-full border border-grey-200">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1 text-brown-600 hover:text-brown-700 font-medium text-sm group/btn"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brown-50 to-grey-50 border border-brown-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-grey-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-grey-700 mb-6 max-w-2xl mx-auto">
              Let's bring your AI vision to life. From concept to deployment, 
              we'll create intelligent solutions that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
              >
                Meet the Founder
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="xl"
      >
        {selectedProject && (
          <div className="space-y-8">
            {/* Detailed Description */}
            <div>
              <h4 className="text-xl font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-brown-400" />
                <span>Project Overview</span>
              </h4>
              <p className="text-grey-700 leading-relaxed text-lg">
                {selectedProject.detailedDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-grey-900 mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-grey-100 text-grey-700 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {selectedProject.features && (
              <div>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-grey-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges, Solutions, Results */}
            {selectedProject.challenges && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Challenges */}
                <Card variant="primary">
                  <h4 className="text-lg font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                    <Target className="w-5 h-5 text-red-400" />
                    <span>Challenges</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-grey-700 text-sm leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Solutions */}
                {selectedProject.solutions && (
                  <Card variant="primary">
                    <h4 className="text-lg font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-business-400" />
                      <span>Solutions</span>
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-business-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-grey-700 text-sm leading-relaxed">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {/* Results */}
                {selectedProject.results && (
                  <Card variant="primary">
                    <h4 className="text-lg font-semibold text-grey-900 mb-4 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span>Results</span>
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-grey-700 text-sm leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-brown-100">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="primary"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live Demo</span>
                  </Button>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="secondary"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source Code</span>
                  </Button>
                </a>
              )}
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Projects