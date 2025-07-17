
const experienceData = [
  {
    company: "Kiran Foundation",
    position: "React Native Intern",
    duration: "March'25 - April'25",
    logo: "/kiranFoundation.jpeg",
    description: `Implemented real-time chat functionality using React Native and Chat-Stream, enabling seamless user communication
within the app.`,
    techStack: ["React Native", "TypeScript", "Firebase", "Nativewind"]
  },
];

export default function Experience() {
  return (
    <>
      <div className="flex flex-col items-start justify-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Experience</h1>

        {experienceData.map((exp, index) => (
          <div key={index} className=" gap-x-4 rounded-lg flex flex-col sm:flex-row w-full py-6 px-3 shadow-lg">
            <img src={exp.logo} alt={exp.company} className="sm:w-1/3 object-cover rounded-md mb-4" />
            <div className="flex flex-col sm:w-2/3 gap-y-5">
              <div>
                <h2 className="text-3xl font-semibold">{exp.position}</h2>
                <p className="text-gray-300 text-xl">{exp.company}</p>
                <p className="text-xl text-gray-500">{exp.duration}</p>
              </div>
              <p className="text-gray-300">{exp.description}</p>
              <div className="flex flex-wrap gap-x-2">
                {exp.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div >
      <div className="border-b border-white w-full my-4" />

    </>
  );
}
