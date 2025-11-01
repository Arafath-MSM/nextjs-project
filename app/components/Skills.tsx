export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-zinc-600 dark:text-zinc-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}