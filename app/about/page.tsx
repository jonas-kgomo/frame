import * as React from "react";

export const metadata = {
  title: "About Us",
  description: "Learn more about our team and projects.",
};

const TeamMembers = () => {
  const team = [
    { name: "Jonas Kgomo", role: "Project Manager" },
    { name: "Naome Smith", role: "Lead Developer" },
    { name: "Charlie Brown", role: "UI/UX Designer" },
  ];

  return (
    <div className="grid grid-cols-2 ">
      {team.map((member, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Project Evals",
      description:
        "A comprehensive evaluation platform designed to assess and improve the effectiveness of various programs and initiatives. It utilizes advanced analytics and data visualization tools to provide actionable insights. This project is similar to the tools we use in our blog to manage and format content efficiently.",
    },
    {
      name: "Project Benchmark",
      description:
        "A novel social impact assessment tool that benchmarks the performance of social programs against industry standards. It offers detailed reports and recommendations to enhance program outcomes. This project reflects the same attention to detail and performance optimization as seen in our blog posts and navigation components.",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg">{project.name}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8">About Us</h1>

      <div>
        <h2 className="font-semibold text-xl mb-4">Our Projects</h2>
        <Projects />
      </div>
      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">Our Team</h2>
        <TeamMembers />{" "}
      </div>
    </section>
  );
}
