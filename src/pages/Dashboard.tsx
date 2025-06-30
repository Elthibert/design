import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPlus, FiFolder, FiClock, FiTrendingUp, FiLayers, FiFlask } from 'react-icons/fi'

const Dashboard: React.FC = () => {
  const recentProjects = [
    { id: '1', name: 'Landing Page SaaS', status: 'En cours', progress: 65, lastModified: '2h' },
    { id: '2', name: 'Portfolio Designer', status: 'Terminé', progress: 100, lastModified: '1j' },
    { id: '3', name: 'E-commerce Fashion', status: 'En cours', progress: 30, lastModified: '3h' },
  ]

  const stats = [
    { label: 'Projets Actifs', value: '3', icon: FiFolder, color: 'text-primary-400' },
    { label: 'Blocs Créés', value: '47', icon: FiLayers, color: 'text-green-400' },
    { label: 'Concepts UI Lab', value: '12', icon: FiFlask, color: 'text-purple-400' },
    { label: 'Temps Moyen', value: '2.3h', icon: FiClock, color: 'text-orange-400' },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Gérez vos projets créatifs et explorez de nouveaux concepts</p>
        </div>
        <Link
          to="/project/setup"
          className="btn-primary flex items-center space-x-2"
        >
          <FiPlus className="w-4 h-4" />
          <span>Nouveau Projet</span>
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <FiTrendingUp className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Projets Récents</h2>
          <Link to="/projects" className="text-primary-400 hover:text-primary-300 text-sm font-medium">
            Voir tout
          </Link>
        </div>
        
        <div className="space-y-4">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <FiFolder className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{project.name}</h3>
                  <p className="text-sm text-gray-400">Modifié il y a {project.lastModified}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{project.progress}%</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'Terminé' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-primary-500/20 text-primary-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Link to="/ui-lab" className="glass-effect rounded-xl p-6 hover:bg-gray-800/30 transition-colors group">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiLayers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">UI Lab</h3>
              <p className="text-gray-400">Explorez votre catalogue de concepts</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">12 concepts disponibles</p>
        </Link>

        <Link to="/studio-rd" className="glass-effect rounded-xl p-6 hover:bg-gray-800/30 transition-colors group">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiFlask className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Studio R&D</h3>
              <p className="text-gray-400">Innovez et créez de nouveaux concepts</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">Session R&D disponible</p>
        </Link>
      </motion.div>
    </div>
  )
}

export default Dashboard