import React from "react";

const ProjectExperience = () => {
  const experiences = [
    {
      percentage: 85,
      color: "bg-gradient-to-r from-pink-500 to-red-400",
      role: "Work with Animals",
      description:
        "Assisted in the care, feeding, and rehabilitation of rescued animals, ensuring their well-being and supporting adoption efforts.",
    },
    {
      percentage: 90,
      color: "bg-gradient-to-r from-green-500 to-lime-400",
      role: "Community Projects",
      description:
        "Organized and participated in community clean-up drives, cultural events, and public awareness campaigns.",
    },
    {
      percentage: 75,
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
      role: "Sports Volunteering",
      description:
        "Helped manage sports tournaments, coached young athletes, and encouraged active lifestyles in local communities.",
    },
    {
      percentage: 80,
      color: "bg-gradient-to-r from-purple-500 to-pink-400",
      role: "Volunteering in Hospitals",
      description:
        "Provided support to hospital staff, assisted patients, and helped organize medical camps and blood donation drives.",
    },
    {
      percentage: 70,
      color: "bg-gradient-to-r from-teal-500 to-green-400",
      role: "Green Volunteering",
      description:
        "Participated in tree plantation drives, promoted sustainable living, and engaged in environmental education.",
    },
    {
      percentage: 65,
      color: "bg-gradient-to-r from-orange-500 to-yellow-400",
      role: "Disaster Volunteering",
      description:
        "Assisted in disaster relief operations, distributed essential supplies, and provided emotional support to victims.",
    },
  ];

  return (
    <section className="py-16 mb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl  md:text-4xl font-bold text-center mb-12">
          Check Out <span className="text-blue-500">Spectrum of Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center border border-gray-300  rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              {/* Left side percentage */}
              <div className="flex-shrink-0 mr-6">
                <div
                  className={`w-20 h-20 flex items-center justify-center text-white font-bold text-xl rounded-full ${exp.color}`}
                >
                  {exp.percentage}%
                </div>
              </div>

              {/* Right side role + description */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
