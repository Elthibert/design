import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiEdit3, FiCode, FiEye } from 'react-icons/fi'

const BlockWorkflow: React.FC = () => {
  const { projectId, sectionId, blockId } = useParams()
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { id: 'brief', name: 'Brief du Bloc', icon: FiEdit3, description: 'Définir le rôle et objectif' },
    { id: 'brainstorm', name: 'Brainstorming', icon: FiEdit3, description: 'Explorer les concepts créatifs' },
    { id: 'roast', name: 'Roasting Session', icon: FiEdit3, description: 'Challenger et améliorer' },
    { id: 'specs', name: 'Spécifications', icon: FiCode, description: 'Définir les specs techniques' },
    { id: 'component', name: 'Composant', icon: FiCode, description: 'Générer le code final' },
  ]

  const [formData, setFormData] = useState({
    brief: {
      role: '',
      content: '',
      constraints: ''
    },
    brainstorm: {
      input: '',
      selectedConcept: ''
    },
    roast: {
      improvements: []
    },
    specs: {
      description: '',
      structure: '',
      props: '',
      styling: '',
      animation: ''
    }
  })

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'brief':
        return <BriefStep formData={formData} setFormData={setFormData} />
      case 'brainstorm':
        return <BrainstormStep formData={formData} setFormData={setFormData} />
      case 'roast':
        return <RoastStep formData={formData} setFormData={setFormData} />
      case 'specs':
        return <SpecsStep formData={formData} setFormData={setFormData} />
      case 'component':
        return <ComponentStep formData={formData} />
      default:
        return null
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
            to={`/project/${projectId}`}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
          >
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Bloc: {blockId}</h1>
            <p className="text-gray-400">Section {sectionId} • Workflow créatif en 5 étapes</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-primary-500 border-primary-500 text-white'
                    : 'border-gray-600 text-gray-400'
                }`}
              >
                {index < currentStep ? (
                  <FiCheck className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-0.5 mx-4 transition-all duration-300 ${
                    index < currentStep ? 'bg-primary-500' : 'bg-gray-600'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-white">{steps[currentStep].name}</h3>
          <p className="text-gray-400">{steps[currentStep].description}</p>
        </div>
      </motion.div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-effect rounded-xl p-6 mb-8"
        >
          {renderStepContent()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>
        
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <FiEye className="w-4 h-4" />
            <span>Prévisualiser</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// Step Components
const BriefStep: React.FC<any> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-white mb-4">Brief du Bloc</h2>
    
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Rôle et Objectif Fondamental
      </label>
      <textarea
        value={formData.brief.role}
        onChange={(e) => setFormData({
          ...formData,
          brief: { ...formData.brief, role: e.target.value }
        })}
        placeholder="Quelle est la seule et unique raison d'être de ce bloc ?"
        rows={3}
        className="textarea-field w-full"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Contenu & Messages Clés
      </label>
      <textarea
        value={formData.brief.content}
        onChange={(e) => setFormData({
          ...formData,
          brief: { ...formData.brief, content: e.target.value }
        })}
        placeholder="Listez toutes les informations que ce bloc doit afficher..."
        rows={4}
        className="textarea-field w-full"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Contraintes Spécifiques
      </label>
      <textarea
        value={formData.brief.constraints}
        onChange={(e) => setFormData({
          ...formData,
          brief: { ...formData.brief, constraints: e.target.value }
        })}
        placeholder="Contraintes techniques, de performance, d'accessibilité..."
        rows={3}
        className="textarea-field w-full"
      />
    </div>
  </div>
)

const BrainstormStep: React.FC<any> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-white mb-4">Brainstorming Créatif</h2>
    
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Votre Input Créatif
      </label>
      <textarea
        value={formData.brainstorm.input}
        onChange={(e) => setFormData({
          ...formData,
          brainstorm: { ...formData.brainstorm, input: e.target.value }
        })}
        placeholder="Fournissez une direction, un problème à résoudre ou une inspiration..."
        rows={4}
        className="textarea-field w-full"
      />
    </div>

    <button className="btn-primary">
      Générer les Concepts IA
    </button>

    {/* Ici s'afficheraient les concepts générés par l'IA */}
    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
      <p className="text-gray-400 text-center py-8">
        Les concepts IA apparaîtront ici après génération
      </p>
    </div>
  </div>
)

const RoastStep: React.FC<any> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-white mb-4">Roasting Session</h2>
    
    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
      <p className="text-gray-400 text-center py-8">
        Le débat des experts IA apparaîtra ici
      </p>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Vos Décisions d'Amélioration
      </label>
      <textarea
        placeholder="Listez les améliorations que vous souhaitez apporter..."
        rows={4}
        className="textarea-field w-full"
      />
    </div>
  </div>
)

const SpecsStep: React.FC<any> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-white mb-4">Spécifications Techniques</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description Fonctionnelle
        </label>
        <textarea
          rows={3}
          className="textarea-field w-full"
          placeholder="Description du comportement du composant..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Structure HTML/JSX
        </label>
        <textarea
          rows={3}
          className="textarea-field w-full"
          placeholder="Structure sémantique des éléments..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Props & State
        </label>
        <textarea
          rows={3}
          className="textarea-field w-full"
          placeholder="Props et états nécessaires..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Styling (Tailwind)
        </label>
        <textarea
          rows={3}
          className="textarea-field w-full"
          placeholder="Classes Tailwind essentielles..."
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Animation & Interaction
      </label>
      <textarea
        rows={4}
        className="textarea-field w-full"
        placeholder="Séquence d'animation détaillée..."
      />
    </div>
  </div>
)

const ComponentStep: React.FC<any> = ({ formData }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-white mb-4">Composant Généré</h2>
    
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{`// Composant généré automatiquement
import React from 'react';
import { motion } from 'framer-motion';

const TitrePrincipal = ({ text, className }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={\`text-4xl font-bold text-white \${className}\`}
    >
      {text}
    </motion.h1>
  );
};

export default TitrePrincipal;`}</code>
      </pre>
    </div>

    <div className="flex items-center space-x-4">
      <button className="btn-primary">
        Télécharger React
      </button>
      <button className="btn-secondary">
        Télécharger Framer
      </button>
    </div>
  </div>
)

export default BlockWorkflow