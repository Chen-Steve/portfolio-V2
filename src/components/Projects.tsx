const PROJECTS = [
    { title: "Project 1", description: "Description" },
    { title: "Project 2", description: "Description" },
    { title: "Project 3", description: "Description" },
];

const Projects: React.FC = () => {
    return (
        <div className="flex-1 space-y-8">
            {PROJECTS.map(project => (
                <div key={project.title} className="bg-white p-6 rounded-lg shadow-md w-80 h-40 lg:w-96 lg:h-56">
                    <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;