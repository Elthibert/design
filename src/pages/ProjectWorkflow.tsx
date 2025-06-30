import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiClock, FiPlay } from 'react-icons/fi'

const ProjectWorkflow: React.FC = () => {
  const { projectId } = useParams()

  // Mock data - en réalité, cela viendrait d'un store ou API
  const project = {
    name: 'Landing Page SaaS',
    sections: [
      {
        id: 'hero',
        name: 'Hero',
        blocks: [
          { id: 'titre-principal', name: 'Titre Principal', status: 'completed' },
          { id: 'sous-titre', name: 'Sous-titre', status: 'in-progress' },
          { id: 'cta-principal', name: 'CTA Principal', status: 'pending' },
        ]
      },
      {
        id: 'probleme',
        name: 'Problème',
        blocks: [
          { id: 'description-probleme', name: 'Description Problème', status: 'pending' },
          { id: 'pain-points', name: 'Pain Points', status: 'pending' },
        ]
      },
      {
        id: 'solution',
        name: 'Solution',
        blocks: [
          { id: 'presentation-solution', name: 'Présentation Solution', status: 'pending' },
          { id: 'benefices', name: 'Bénéfices', status: 'pending' },
          { id: 'demo', name: 'Démo', status: 'pending' },
        ]
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'in-progress':
        return 'bg-primary-500/20 text-primary-400 border-primary-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FiCheck className="w-4 h-4" />
      case 'in-progress':
        return <FiPlay className="w-4 h-4" />
      default:
        return <FiClock className="w-4 h-4" />
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
          >
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">{project.name}</h1>
            <p className="text-gray-400">Workflow de création par blocs</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Progression Globale</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-500 to-purple-500 w-1/4 transition-all duration-500" />
          </div>
          <span className="text-sm text-gray-400">2/8 blocs terminés</span>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-8">
        {project.sections.map((section, sectionIndex) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + sectionIndex * 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Section: {section.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.blocks.map((block, blockIndex) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + blockIndex * 0.05 }}
                >
                  <Link
                    to={`/project/${projectId}/section/${section.id}/block/${block.id}`}
                    className="block p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-white group-hover:text-primary-400 transition-colors">
                        {block.name}
                      </h4>
                      <div className={`px-2 py-1 rounded-full text-xs border flex items-center space-x-1 ${getStatusColor(block.status)}`}>
                        {getStatusIcon(block.status)}
                        <span className="capitalize">
                          {block.status === 'in-progress' ? 'En cours' : 
                           block.status === 'completed' ? 'Terminé' : 'En attente'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      {block.status === 'completed' && 'Bloc terminé et prêt'}
                      {block.status === 'in-progress' && 'Travail en cours...'}
                      {block.status === 'pending' && 'Cliquez pour commencer'}
                    </div>

                    {/* Progress steps preview */}
                    <div className="flex items-center space-x-2 mt-4">
                      {['Brief', 'Brainstorm', 'Roast', 'Specs', 'Code'].map((step, index) => (
                        <div
                          key={step}
                          className={`w-2 h-2 rounded-full ${
                            block.status === 'completed' ? 'bg-green-400' :
                            block.status === 'in-progress' && index < 2 ? 'bg-primary-400' :
                            'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectWorkflow