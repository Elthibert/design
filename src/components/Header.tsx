import React from 'react'
import { motion } from 'framer-motion'
import { FiBell, FiUser, FiSearch } from 'react-icons/fi'

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-gray-900/30 backdrop-blur-xl border-b border-gray-800/50 flex items-center justify-between px-6">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 max-w-md"
      >
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Rechercher un projet, bloc..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
          />
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center space-x-4"
      >
        <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50">
          <FiBell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
          <FiUser className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </header>
  )
}

export default Header