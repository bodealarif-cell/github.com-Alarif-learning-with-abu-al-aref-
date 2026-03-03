import { motion } from 'framer-motion';

const MissionCards = ({ missions, selectedId, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-8">
      {missions.map((mission) => (
        <motion.div
          key={mission.id}
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          className={`glass-3d rounded-2xl p-4 cursor-pointer text-center transition-colors ${
            selectedId === mission.id ? 'ring-2 ring-amber-400' : ''
          }`}
          onClick={() => onSelect(mission)}
        >
          <span className="text-sm text-amber-300">المهمة {mission.id}</span>
          <p className="mt-1 text-xs text-gray-300">{mission.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionCards;
