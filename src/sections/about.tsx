import React from 'react';
import { User, MapPin, GraduationCap, Heart, Code, Zap } from 'lucide-react';
import './about.css';

const AboutSection: React.FC = () => {
    const highlights = [
        {
            icon: <GraduationCap className="text-blue-400" size={24} />,
            title: "Education",
            description: "Third-year ICT student at DA-IICT, Gandhinagar"
        },
        {
            icon: <Code className="text-green-400" size={24} />,
            title: "Passion",
            description: "Building scalable applications with modern technologies"
        },
        {
            icon: <Heart className="text-red-400" size={24} />,
            title: "Focus",
            description: "Continuous learning and knowledge sharing"
        },
        {
            icon: <Zap className="text-yellow-400" size={24} />,
            title: "Drive",
            description: "Solving real-world problems through code"
        }
    ];

    return (
        <section id="about" className="min-h-screen relative flex flex-col justify-center items-center text-white py-20">
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

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                About Me
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-8"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-lg">
                                <User className="text-green-400" size={24} />
                                <span className="text-2xl font-semibold text-white">Karthik Raman Balamurugan</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="text-blue-400" size={20} />
                                <span>Gandhinagar, Gujarat, India</span>
                            </div>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed">
                            <p className="text-gray-300">
                                I'm a <span className="text-white font-semibold">third-year undergraduate student</span> at
                                <span className="text-green-400 font-semibold"> Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)</span>,
                                pursuing Information and Communication Technology.
                            </p>

                            <p className="text-gray-300">
                                As a <span className="text-blue-400 font-semibold">passionate programmer</span>, I thrive on
                                <span className="text-white font-semibold"> continuous learning</span> and
                                <span className="text-green-400 font-semibold"> knowledge sharing</span>.
                                My journey in technology is driven by curiosity and the desire to create
                                <span className="text-purple-400 font-semibold"> innovative solutions</span> that make a difference.
                            </p>

                            <p className="text-gray-300">
                                I specialize in building <span className="text-white font-semibold">full-stack applications</span> with
                                modern technologies, focusing on <span className="text-green-400 font-semibold">clean architecture</span>,
                                <span className="text-blue-400 font-semibold"> scalable design</span>, and
                                <span className="text-purple-400 font-semibold"> user-centric experiences</span>.
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="pt-8">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                            >
                                Let's Connect
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-8">What Drives Me</h3>
                        <div className="grid gap-6">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;