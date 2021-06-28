const skillsets = [
  { name: "Languages", skills: ["JavaScript(ES6)"] },
  {
    name: "Libraries / Frameworks",
    skills: [
      "React",
      "NextJS",
      "Rest API",
      "Redux",
      "Redux Saga",
      "Redux Thunk",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
  { name: "Others", skills: ["SCSS", "Git"] },
  { name: "Learning", skills: ["Gatsby", "TypeScript", "GSAP", "Strapi"] },
];

const SkillsetSection = () => {
  return (
    <section className="py-10 border border-b md:border-none border-gray-100 text-gray-600 md:py-20 container">
      <h1 className="text-gray-900 text-1.3xl md:text-4.5xl font-semibold mb-8">
        Skillset
      </h1>
      <div className="text-gray-800 space-y-8">
        {skillsets.map((skillset) => {
          return (
            <div key={skillset.name} className="">
              <h2 className="font-medium text-base md:text-2.5xl mb-2">
                {skillset.name}
              </h2>
              <h3 className="text-pink-600 text-base md:text-2.5xl">
                {skillset.skills.map((skill, i) => {
                  return (
                    <span key={skill}>
                      {skill}
                      {i + 1 !== skillset.skills.length && ", "}
                    </span>
                  );
                })}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsetSection;
