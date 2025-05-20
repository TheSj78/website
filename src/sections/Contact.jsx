import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faUser,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const contactDetails = [
        {
            icon: faUser,
            label: 'Name',
            value: 'Shubham Jain',
            href: null
        },
        {
            icon: faEnvelope,
            label: 'Personal Email',
            value: 'zoom2shubham@gmail.com',
            href: 'mailto:zoom2shubham@gmail.com'
        },
        {
            icon: faEnvelope,
            label: 'Academic Email',
            value: 'jain618@purdue.edu',
            href: 'mailto:jain618@purdue.edu'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: faGithub,
            url: 'https://github.com/TheSj78',
            color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
            textColor: 'text-white'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/shubhamjain2005',
            color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600',
            textColor: 'text-white'
        },
        {
            name: 'Resume',
            icon: faFileAlt,
            url: '/resume/Shubham_Jain_Resume.pdf',
            color: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600',
            textColor: 'text-white',
            target: '_blank'
        }
    ];

    return (
        <section
            id="contact"
            className="w-full min-h-screen pt-16 px-6 py-20 bg-white dark:bg-gray-900 flex items-center justify-center"
        >
            <div className="max-w-3xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch!</h2>
                </div>

                {/* Contact Card */}
                <div className="mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-blue-500 p-6 text-white">
                            <h3 className="text-2xl font-bold">Contact Details</h3>
                            <p className="text-blue-100 mt-1">Feel free to reach out through any of these channels</p>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4 mb-8">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mr-4">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-800 dark:text-gray-200">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">Connect With Me</h4>
                            <div className="grid grid-cols-3 gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${social.color} ${social.textColor} rounded-lg py-2 px-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;