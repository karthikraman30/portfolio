import React from 'react';
import { Calendar, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    year: string;
    description: string;
    technologies: string[];
    category: string;
    githubUrl?: string;
    icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    year,
    description,
    technologies,
    category,
    githubUrl,
    icon
}) => {
    return (
        <div className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
            {/* Project Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                            <Calendar size={16} />
                            <span>{year}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="text-sm px-2 py-1 bg-gray-700/50 rounded-full">{category}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Description */}
            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, techIndex) => (
                    <span
                        key={techIndex}
                        className="text-sm px-2 py-1 bg-gray-700/50 rounded-full text-gray-300 hover:bg-gray-700/70 hover:text-white transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* GitHub Link */}
            {githubUrl && (
                <div className="mt-4">
                    <a 
                        href={githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-400/10 hover:bg-green-400/20 transition-all duration-300 text-green-400 hover:text-white border border-green-400/20 hover:border-green-400/40"
                    >
                        <Github size={20} />
                        <span>View on GitHub</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
