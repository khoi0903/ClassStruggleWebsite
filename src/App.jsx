import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MacContributionsSection } from './components/MacContributionsSection';
import { ClassDefinitionSection } from './components/ClassDefinitionSection';
import { ClassOriginSection } from './components/ClassOriginSection';
import { ClassStruggleSection } from './components/ClassStruggleSection';
import { ProletarianStruggleSection } from './components/ProletarianStruggleSection';
import { VietnamSection } from './components/VietnamSection';
import { InteractiveDiscoverySection } from './components/InteractiveDiscoverySection';
import { MindmapSection } from './components/MindmapSection';
import { FlashcardsSection } from './components/FlashcardsSection';
import { QuizSection } from './components/QuizSection';
import { NodeModal } from './components/NodeModal';
import { Footer } from './components/Footer';

export const App = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="app-root">
      <ProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <MacContributionsSection />
        <ClassDefinitionSection />
        <ClassOriginSection />
        <ClassStruggleSection />
        <ProletarianStruggleSection />
        <VietnamSection />
        <InteractiveDiscoverySection />
        <MindmapSection onSelectNode={setSelectedNode} />
        <FlashcardsSection />
        <QuizSection />
      </main>
      <NodeModal node={selectedNode} onClose={() => setSelectedNode(null)} />
      <Footer />
    </div>
  );
};

export default App;
