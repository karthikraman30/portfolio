import React, { useState, useEffect } from 'react';
import { Mail, Briefcase, ChevronRight } from 'lucide-react';
import './hero.css';

const HeroSection: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="min-h-screen relative flex flex-col justify-center items-center text-white pt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
                <div className="absolute inset-0 opacity-10 grid-pattern"></div>
                <div className="absolute inset-0 opacity-20 dot-pattern"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed"></div>
                    <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                    {/* Mouse follower effect */}
                    <div
                        className="absolute w-96 h-96 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
                        style={{
                            left: mousePosition.x - 192,
                            top: mousePosition.y - 192,
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="space-y-8">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <p className="text-green-400 text-lg md:text-xl font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
                                Full Stack Developer
                            </p>
                            <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto animate-expand"></div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                            Hey, I am{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x">
                                Karthik Raman
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                            I love building applications that solve real-world problems with modern technologies and creative solutions{' '}
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto animate-expand"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover-glow"
                        >
                            <Mail size={20} />
                            Reach out to me!
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('projects');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="group px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold hover:bg-gray-800/50 hover:border-green-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <Briefcase size={20} />
                            Check out my work!
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;