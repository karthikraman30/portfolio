import React from 'react';
import { Calendar, Database, Globe, Star, Code, Github } from 'lucide-react';

const ProjectSection: React.FC = () => {
    const projects = [
        {
            title: "House Price Prediction Model",
            year: "2024",
            description: "A machine learning project that predicts real estate prices for apartments and villas based on location preferences, amenities, and nearby facilities like schools, hospitals, and highways.",
            technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
            githubUrl: "https://github.com/karthikraman30/house-price-prediction",
            category: "Machine Learning",
            featured: true,
            icon: <Database className="text-green-400" size={24} />
        },
        {
            title: "Online Competitive Coding Platform Database",
            year: "2024",
            description: "A comprehensive database management system designed for competitive programming platforms, managing user profiles, problem sets, submissions, and performance analytics.",
            technologies: ["Database Design", "SQL", "System Architecture"],
            category: "Database",
            featured: true,
            icon: <Code className="text-blue-400" size={24} />
        },
        {
            title: "Code Snippet Manager",
            year: "2023",
            description: "A C++ application with tree-based storage for managing commonly used code snippets. Features fast retrieval and VSCode integration for quick POJO and algorithm implementation.",
            technologies: ["C++", "Data Structures", "VSCode Extension", "Tree Algorithms"],
            category: "Desktop App",
            featured: true,
            icon: <Globe className="text-purple-400" size={24} />
        },
        {
            title: "Algorithm Web Applications",
            year: "2023",
            description: "Collection of web applications implementing useful algorithms including Roman Numeral Converter, Palindrome Checker, and other utility tools built during learning phase.",
            technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
            category: "Web Development",
            featured: false,
            icon: <Star className="text-yellow-400" size={24} />
        }
    ];

    return (
        <section id="projects" className="min-h-screen relative flex flex-col justify-center items-center text-white py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
                <div className="absolute inset-0 opacity-10 grid-pattern"></div>
                <div className="absolute inset-0 opacity-20 dot-pattern"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed"></div>
                    <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                </div>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills in various technologies
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {projects.filter(p => p.featured).map((project, index) => (
                        <div key={index} className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                                            <Calendar size={16} />
                                            <span>{project.year}</span>
                                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                            <span className="text-sm px-2 py-1 bg-gray-700/50 rounded-full">{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                                {project.description}
                            </p>

                            {/* GitHub Link */}
                            {project.githubUrl && (
                                <div className="mt-4">
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-400/10 hover:bg-green-400/20 transition-all duration-300 text-green-400 hover:text-white border border-green-400/20 hover:border-green-400/40"
                                    >
                                        <Github size={20} />
                                        <span>View on GitHub</span>
                                    </a>
                                </div>
                            )}

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium border border-green-500/20 hover:bg-green-500/20 transition-colors duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Other Projects */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Other Notable Projects</h3>
                    <div className="grid gap-6">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <div key={index} className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-green-400/30 transition-all duration-300 hover:bg-gray-800/30">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-gray-700/50 rounded-lg">
                                        {project.icon}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                                        <p className="text-gray-400 text-sm">{project.year} • {project.category}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;