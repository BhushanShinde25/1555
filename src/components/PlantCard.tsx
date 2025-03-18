import { motion } from "framer-motion";

type PlantCardProps = {
  name: string;
  description: string;
  image: string;
  onClose: () => void;
};

const PlantCard = ({ name, description, image, onClose }: PlantCardProps) => {
  return (
    <motion.div
      className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded" onClick={onClose}>
        Close
      </button>
    </motion.div>
  );
};

export default PlantCard;
