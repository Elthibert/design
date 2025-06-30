import React from 'react'
import { motion } from 'framer-motion'
import { FiLayers, FiSearch, FiPlus, FiBookmark } from 'react-icons/fi'

const UILab: React.FC = () => {
  const concepts = [
    {
      id: '1',
      name: 'Hover Card Magnetic',
      category: 'Interactions',
      description: 'Effet magnétique au survol avec déformation subtile',
      tags: ['hover', 'animation', 'cards'],
      type: 'concept'
    },
    {
      id: '2',
      name: 'Text Reveal Animation',
      category: 'Typography',
      description: 'Animation de révélation de texte par mots',
      tags: ['text', 'reveal', 'framer-motion'],
      type: 'recipe'
    },
    {
      id: '3',
      name: 'Glassmorphism Button',
      category: 'Components',
      description: 'Bouton avec effet de verre et backdrop blur',
      tags: ['button', 'glass', 'modern'],
      type: 'concept'
    },
    {
      id: '4',
      name: 'Parallax Scroll',
      category: 'Scroll Effects',
      description: 'Effet parallaxe fluide avec GSAP ScrollTrigger',
      tags: ['parallax', 'scroll', 'gsap'],
      type: 'recipe'
    }
  ]

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">UI Lab</h1>
          <p className="text-gray-400">Votre catalogue de concepts et recettes créatives</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <FiPlus className="w-4 h-4" />
          <span>Nouveau Concept</span>
        </button>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher un concept, une interaction..."
              className="input-field w-full pl-10"
            />
          </div>
          <select className="input-field">
            <option>Toutes catégories</option>
            <option>Interactions</option>
            <option>Typography</option>
            <option>Components</option>
            <option>Scroll Effects</option>
          </select>
          <select className="input-field">
            <option>Tous types</option>
            <option>Concepts</option>
            <option>Recettes</option>
          </select>
        </div>
      </motion.div>

      {/* Concepts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="glass-effect rounded-xl p-6 hover:bg-gray-800/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                concept.type === 'concept' 
                  ? 'bg-purple-500/20 text-purple-400' 
                  : 'bg-green-500/20 text-green-400'
              }`}>
                {concept.type === 'concept' ? 'Concept Original' : 'Recette Technique'}
              </div>
              <button className="p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <FiBookmark className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {concept.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{concept.description}</p>
              <div className="text-xs text-primary-400 font-medium">{concept.category}</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {concept.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Preview area */}
            <div className="mt-4 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50">
              <FiLayers className="w-6 h-6 text-gray-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">12</div>
          <div className="text-gray-400">Concepts Totaux</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">8</div>
          <div className="text-gray-400">Concepts Originaux</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">4</div>
          <div className="text-gray-400">Recettes Techniques</div>
        </div>
      </motion.div>
    </div>
  )
}

export default UILab