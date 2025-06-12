import React, { useState } from 'react';
import { Mail, Send, MessageCircle, User, FileText, Github, Linkedin, Code } from 'lucide-react';
import * as emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize EmailJS with your public key
    emailjs.init('6vvN_EH4sYAqTX9hx'); // Replace this with your actual EmailJS public key

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            await emailjs.send(
                'service_2g6c8xt', // Your service ID
                'template_ut71uji', // Your template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }
            );

            alert('Form submitted successfully! Check the browser console for details.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "k.raman.b30@gmail.com",
            href: "mailto:k.raman.b30@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/karthikraman30",
            color: "hover:text-gray-400",
            bg: "hover:bg-gray-800"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/karthikramanbalamurugan",
            color: "hover:text-blue-400",
            bg: "hover:bg-blue-900/20"
        },
        {
            icon: Code,
            label: "Codeforces",
            href: "https://codeforces.com/profile/karthik300106",
            color: "hover:text-red-400",
            bg: "hover:bg-red-900/20"
        }
    ];

    return (
        <section id="contact" className="min-h-screen relative py-20 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
                <div className="absolute inset-0 opacity-10 grid-pattern"></div>
                <div className="absolute inset-0 opacity-20 dot-pattern"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed"></div>
                    <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                </div>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <p className="text-green-400 text-lg md:text-xl font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
                            Get In Touch
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto animate-expand"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x">
                            Let's Work Together
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                        <br />Let's create something amazing together!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="animate-fade-in-up">
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                                    <MessageCircle size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Send Message</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <FileText size={20} className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                                    />
                                </div>

                                <div className="relative">
                                    <MessageCircle size={20} className="absolute left-3 top-3 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        required
                                        rows={5}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-center gap-4 group">
                                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <info.icon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-white font-medium hover:text-green-400 transition-colors duration-300">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/50 ${social.bg} ${social.color} hover:scale-110 transition-all duration-300 group`}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} className="transition-colors duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 pt-8 border-t border-gray-700/50 animate-fade-in-up">
                    <p className="text-gray-400">
                        © 2025 Karthik Raman. Built with React & Tailwind CSS.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Designed with ❤️ for connecting great minds
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;