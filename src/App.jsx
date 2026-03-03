import { useState } from 'react';
import Layout from './components/Layout';
import MissionCards from './components/MissionCards';
import Workspace from './components/Workspace';
import { missions } from './data/missions';

function App() {
  const [selectedMission, setSelectedMission] = useState(missions[0]);
  const [userCode, setUserCode] = useState(selectedMission.initialCode);

  const handleSelectMission = (mission) => {
    setSelectedMission(mission);
    setUserCode(mission.initialCode);
  };

  const handleCodeChange = (newCode) => {
    setUserCode(newCode);
  };

  const handleSnippetClick = (snippetCode) => {
    setUserCode((prev) => prev + '\n' + snippetCode);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-l from-amber-400 to-purple-400">
          تعلّم مع أبو العارف
        </h1>
        <MissionCards
          missions={missions}
          selectedId={selectedMission.id}
          onSelect={handleSelectMission}
        />
        <Workspace
          mission={selectedMission}
          userCode={userCode}
          onCodeChange={handleCodeChange}
          onSnippetClick={handleSnippetClick}
        />
      </div>
    </Layout>
  );
}

export default App;
