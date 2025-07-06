import { motion } from "framer-motion";

const galleryImages = [
  "https://i.ibb.co/d45SyVSf/sig1.jpg",
  "https://i.ibb.co/V091MvLJ/sog2.jpg",
  "https://i.ibb.co/LDFVxqz0/sig3.jpg",
  "https://i.ibb.co/rGxjm43r/sig4.jpg",
  "https://i.ibb.co/hQbzgH3/sig5.jpg",
  "https://i.ibb.co/DH7SfjF1/sig6.jpg",
];

const GallerySection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4">📸 Volunteer Moments</h2>
      <p className="text-center text-gray-600 mb-12">Snapshots of our mission, moments, and memories</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 40, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={img}
              alt={`Gallery ${index }`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
