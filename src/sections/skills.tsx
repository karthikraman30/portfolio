import React from 'react';
import { Code, Database, Wrench, Trophy, Github, ExternalLink } from 'lucide-react';

const SkillsSection: React.FC = () => {
    const skillCategories = [
        {
            icon: Code,
            title: "Programming Languages",
            skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Wrench,
            title: "Frameworks & Libraries",
            skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Node.js"],
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Database,
            title: "Databases & Tools",
            skills: ["MySQL", "PostgreSQL", "Git", "GitHub", "VS Code", "WebStorm", "Matlab"],
            color: "from-purple-500 to-violet-500"
        }
    ];

    const handles = [
        {
            platform: "Codeforces",
            username: "karthik300106",
            url: "https://codeforces.com/profile/karthik300106",
            color: "from-red-500 to-orange-500"
        },
        {
            platform: "LeetCode",
            username: "kart2006",
            url: "https://leetcode.com/u/kart2006/",
            color: "from-yellow-500 to-amber-500"
        },
        {
            platform: "GitHub",
            username: "karthikraman30",
            url: "https://github.com/karthikraman30",
            color: "from-gray-600 to-gray-700"
        },
        {
            platform: "LinkedIn",
            username: "karthikraman",
            url: "https://www.linkedin.com/in/karthikramanbalamurugan",
            color: "from-blue-600 to-blue-700"
        }
    ];

    return (
        <section id="skills" className="min-h-screen relative py-20 text-white">
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

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Skills Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <p className="text-green-400 text-lg md:text-xl font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
                            Technical Expertise
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto animate-expand"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x">
                            Technical Skills
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
                        A comprehensive toolkit of modern technologies and frameworks for building scalable applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {skillCategories.map((category, index) => (
                        <div key={category.title}
                            className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-green-400 transition-colors duration-300">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skill}
                                        className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium text-gray-300 border border-gray-600/50 hover:border-green-400/50 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300 transform hover:scale-105"
                                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.05)}s` }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Competitive Programming Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <p className="text-green-400 text-lg md:text-xl font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
                            Competitive Programming
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto animate-expand"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                            Platform Profiles
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
                        Active on various competitive programming platforms, solving algorithmic challenges
                    </p>
                </div>

                {/* Handles Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {handles.map((handle, index) => (
                        <a key={handle.platform}
                            href={handle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 animate-fade-in-up flex items-center justify-between"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${handle.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {handle.platform === 'GitHub' ? (
                                        <Github size={24} className="text-white" />
                                    ) : (
                                        <Trophy size={24} className="text-white" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                                        {handle.platform}
                                    </h3>
                                    <p className="text-gray-400 font-medium">
                                        @{handle.username}
                                    </p>
                                </div>
                            </div>
                            <ExternalLink size={20} className="text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;