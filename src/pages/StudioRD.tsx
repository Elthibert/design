import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFlask, FiPlay, FiLightbulb, FiTarget } from 'react-icons/fi'

const StudioRD: React.FC = () => {
  const [sessionType, setSessionType] = useState<'invention' | 'study' | null>(null)
  const [topic, setTopic] = useState('')

  const startSession = () => {
    console.log('Starting R&D session:', { sessionType, topic })
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FiFlask className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Studio R&D</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explorez de nouveaux territoires créatifs et enrichissez votre UI Lab avec des concepts innovants. 
          Chaque session est une opportunité de repousser les limites du possible.
        </p>
      </motion.div>

      {/* Session Type Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-8 mb-8"
      >
        <h2 className="text-xl font-semibold text-white mb-6">Choisissez votre Type de Session</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSessionType('invention')}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              sessionType === 'invention'
                ? 'border-primary-500 bg-primary-500/10'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FiLightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Quête d'Invention</h3>
                <p className="text-sm text-gray-400">Explorer un domaine pour générer des concepts nouveaux</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Parfait pour découvrir de nouvelles interactions, effets visuels ou patterns d'interface.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSessionType('study')}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              sessionType === 'study'
                ? 'border-primary-500 bg-primary-500/10'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <FiTarget className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mission d'Étude</h3>
                <p className="text-sm text-gray-400">Maîtriser ou transcender un outil existant</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Idéal pour approfondir GSAP, Framer Motion, ou explorer les limites d'une technologie.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Topic Input */}
      {sessionType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-8 mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Définissez votre Sujet</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {sessionType === 'invention' ? 'Domaine à Explorer' : 'Outil ou Technique à Étudier'}
              </label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={
                  sessionType === 'invention'
                    ? 'Ex: "Explorons des micro-interactions de survol de boutons vraiment uniques"'
                    : 'Ex: "Comment pousser une animation GSAP au maximum de ses capacités sur un chemin SVG ?"'
                }
                rows={4}
                className="textarea-field w-full"
              />
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <h4 className="font-medium text-white mb-2">💡 Conseils pour une session productive :</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Soyez spécifique dans votre demande</li>
                <li>• N'hésitez pas à mentionner des références ou inspirations</li>
                <li>• Pensez aux contraintes techniques (React, Tailwind, Framer Motion)</li>
                <li>• Définissez l'émotion ou sensation recherchée</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Start Session */}
      {sessionType && topic && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={startSession}
            className="btn-primary flex items-center space-x-3 mx-auto text-lg px-8 py-4"
          >
            <FiPlay className="w-5 h-5" />
            <span>Lancer la Session R&D</span>
          </button>
          <p className="text-gray-400 text-sm mt-4">
            L'IA va convoquer une équipe d'experts créatifs pour explorer votre sujet
          </p>
        </motion.div>
      )}

      {/* Recent Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-16"
      >
        <h2 className="text-xl font-semibold text-white mb-6">Sessions Récentes</h2>
        
        <div className="space-y-4">
          {[
            { topic: 'Micro-interactions de boutons', type: 'invention', date: '2j', concepts: 3 },
            { topic: 'Animations GSAP avancées', type: 'study', date: '1sem', concepts: 2 },
            { topic: 'Effets de parallaxe créatifs', type: 'invention', date: '2sem', concepts: 4 },
          ].map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-lg p-4 hover:bg-gray-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    session.type === 'invention' ? 'bg-purple-400' : 'bg-blue-400'
                  }`} />
                  <div>
                    <h3 className="font-medium text-white">{session.topic}</h3>
                    <p className="text-sm text-gray-400">
                      {session.type === 'invention' ? 'Quête d\'Invention' : 'Mission d\'Étude'} • il y a {session.date}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {session.concepts} concepts générés
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StudioRD