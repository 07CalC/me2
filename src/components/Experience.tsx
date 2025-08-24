import Image from "next/image";

const experienceData = [
  {
    company: "resumemate.io",
    position: "Frontend Developer Intern",
    url: "https://resumemate.io",
    duration: "August'25 - Present",
    logo: "/resumemateLogo.svg",
    description: `Developing and maintaining the front-end of a resume-building web application using Next.js, ensuring a responsive and user-friendly interface.`,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    company: "Kiran Foundation",
    position: "React Native Intern",
    url: "https://kiran.foundation",
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
        <h1 className="text-4xl font-bold mb-8 ">(Professional) Experience</h1>

        {experienceData.map((exp, index) => (
          <div key={index} className=" gap-x-4 rounded-lg flex flex-col sm:flex-row w-full py-6 px-3 shadow-lg">
            <Image width={1200} height={1200} src={exp.logo} alt={exp.company} className="sm:w-1/4 object-cover rounded-md mb-4" />
            <div className="flex flex-col sm:w-2/3 gap-y-5">
              <div>
                <h2 className="text-3xl font-semibold">{exp.position}</h2>
                <a href={exp.url} className="text-gray-700 dark:text-gray-300 text-xl hover:underline">{exp.company}</a>
                <p className="text-xl text-gray-600 dark:text-gray-400">{exp.duration}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
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
      <div className="border-b border-black dark:border-white w-full my-4" />

    </>
  );
}
