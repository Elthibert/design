import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiSave, FiEye, FiPlus, FiTrash2 } from 'react-icons/fi'

interface Section {
  id: string
  name: string
  intention: string
  blocks: Block[]
}

interface Block {
  id: string
  name: string
}

const ProjectSetup: React.FC = () => {
  const navigate = useNavigate()
  const [projectName, setProjectName] = useState('')
  const [objective, setObjective] = useState('')
  const [targetPsychology, setTargetPsychology] = useState('')
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      name: 'Hero',
      intention: 'Capter l\'attention et communiquer la proposition de valeur principale',
      blocks: [
        { id: '1', name: 'titre-principal' },
        { id: '2', name: 'sous-titre' },
        { id: '3', name: 'cta-principal' }
      ]
    }
  ])

  const addSection = () => {
    const newSection: Section = {
      id: Date.now().toString(),
      name: '',
      intention: '',
      blocks: []
    }
    setSections([...sections, newSection])
  }

  const updateSection = (id: string, field: keyof Section, value: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ))
  }

  const removeSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id))
  }

  const addBlock = (sectionId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            blocks: [...section.blocks, { id: Date.now().toString(), name: '' }]
          }
        : section
    ))
  }

  const updateBlock = (sectionId: string, blockId: string, name: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            blocks: section.blocks.map(block => 
              block.id === blockId ? { ...block, name } : block
            )
          }
        : section
    ))
  }

  const removeBlock = (sectionId: string, blockId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            blocks: section.blocks.filter(block => block.id !== blockId)
          }
        : section
    ))
  }

  const handleSave = () => {
    // Ici on sauvegarderait le projet et on générerait l'arborescence
    console.log('Saving project:', { projectName, objective, targetPsychology, sections })
    navigate(`/project/${projectName.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">Nouveau Projet</h1>
            <p className="text-gray-400">Configurez votre brief global et l'architecture</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <FiEye className="w-4 h-4" />
            <span>Prévisualiser</span>
          </button>
          <button onClick={handleSave} className="btn-primary flex items-center space-x-2">
            <FiSave className="w-4 h-4" />
            <span>Créer le Projet</span>
          </button>
        </div>
      </motion.div>

      <div className="space-y-8">
        {/* Informations Générales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Informations Générales</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nom du Projet
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Ex: Landing Page SaaS"
                className="input-field w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Objectif Principal
              </label>
              <textarea
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                placeholder="Quelle est la finalité de ce projet ? Quel est le job-to-be-done pour l'utilisateur et pour le business ?"
                rows={3}
                className="textarea-field w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Psychologie de la Cible
              </label>
              <textarea
                value={targetPsychology}
                onChange={(e) => setTargetPsychology(e.target.value)}
                placeholder="Décrivez précisément l'utilisateur ciblé. Qui sont-ils ? Quelles sont leurs attentes, leurs peurs, leurs motivations ?"
                rows={4}
                className="textarea-field w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Architecture & Wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Architecture & Wireframe</h2>
            <button
              onClick={addSection}
              className="btn-secondary flex items-center space-x-2 text-sm"
            >
              <FiPlus className="w-4 h-4" />
              <span>Ajouter Section</span>
            </button>
          </div>

          <div className="space-y-6">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Section {sectionIndex + 1}
                  </h3>
                  {sections.length > 1 && (
                    <button
                      onClick={() => removeSection(section.id)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors rounded-lg hover:bg-red-500/10"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom de la Section
                      </label>
                      <input
                        type="text"
                        value={section.name}
                        onChange={(e) => updateSection(section.id, 'name', e.target.value)}
                        placeholder="Ex: Hero, Problème, Solution..."
                        className="input-field w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Intention
                      </label>
                      <input
                        type="text"
                        value={section.intention}
                        onChange={(e) => updateSection(section.id, 'intention', e.target.value)}
                        placeholder="Objectif de cette section..."
                        className="input-field w-full"
                      />
                    </div>
                  </div>

                  {/* Blocs */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-medium text-gray-300">
                        Blocs de la Section
                      </label>
                      <button
                        onClick={() => addBlock(section.id)}
                        className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center space-x-1"
                      >
                        <FiPlus className="w-3 h-3" />
                        <span>Ajouter Bloc</span>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {section.blocks.map((block, blockIndex) => (
                        <div key={block.id} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={block.name}
                            onChange={(e) => updateBlock(section.id, block.id, e.target.value)}
                            placeholder={`bloc-${blockIndex + 1}`}
                            className="input-field flex-1 text-sm"
                          />
                          {section.blocks.length > 1 && (
                            <button
                              onClick={() => removeBlock(section.id, block.id)}
                              className="p-2 text-red-400 hover:text-red-300 transition-colors"
                            >
                              <FiTrash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectSetup