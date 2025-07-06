import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alif Sarker",
    role: "Founder & Project Manager",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    name: "Fatima Noor",
    role: "Event Coordinator",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    name: "Jahid Hasan",
    role: "Tech Lead",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

const values = [
  {
    title: "Compassion",
    desc: "We believe in uplifting those in need with care and kindness.",
  },
  {
    title: "Integrity",
    desc: "Transparency and honesty are at the heart of everything we do.",
  },
  {
    title: "Empowerment",
    desc: "We work to create opportunities that make a lasting impact.",
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Our Mission</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-7">
            We are a passionate group of volunteers committed to making the world a better place—one act of kindness at a time.
            Since our founding in 2020, we've hosted more than 150+ events, from food drives to education programs, helping over 10,000 lives.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          🌟 Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          👥 Meet Our Team
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
