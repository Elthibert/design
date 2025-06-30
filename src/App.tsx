import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ProjectSetup from './pages/ProjectSetup'
import ProjectWorkflow from './pages/ProjectWorkflow'
import BlockWorkflow from './pages/BlockWorkflow'
import UILab from './pages/UILab'
import StudioRD from './pages/StudioRD'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/setup" element={<ProjectSetup />} />
            <Route path="/project/:projectId" element={<ProjectWorkflow />} />
            <Route path="/project/:projectId/section/:sectionId/block/:blockId" element={<BlockWorkflow />} />
            <Route path="/ui-lab" element={<UILab />} />
            <Route path="/studio-rd" element={<StudioRD />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  )
}

export default App