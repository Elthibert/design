import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FiHome, 
  FiLayers, 
  FiFlask, 
  FiZap, 
  FiSettings,
  FiPlus
} from 'react-icons/fi'

const navigation = [
  { name: 'Dashboard', href: '/', icon: FiHome },
  { name: 'Nouveau Projet', href: '/project/setup', icon: FiPlus },
  { name: 'UI Lab', href: '/ui-lab', icon: FiLayers },
  { name: 'Studio R&D', href: '/studio-rd', icon: FiFlask },
]

const Sidebar: React.FC = () => {
  const location = useLocation()

  return (
    <div className="w-64 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800/50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-3"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
            <FiZap className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Creative System</h1>
            <p className="text-xs text-gray-400">v4.0</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item, index) => {
          const isActive = location.pathname === item.href
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-400' : 'text-gray-400 group-hover:text-white'}`} />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </motion.div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800/50">
        <div className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
          <FiSettings className="w-5 h-5" />
          <span className="font-medium">Paramètres</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar