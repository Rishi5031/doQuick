import { Search, UserCheck, Calendar, Star } from 'lucide-react';

const HowItWorks = () => {
    const customerSteps = [
        {
            icon: <Search size={32} />,
            title: 'Search for Services',
            description: 'Browse through our extensive list of verified service providers in your area.',
        },
        {
            icon: <UserCheck size={32} />,
            title: 'Compare & Choose',
            description: 'Review ratings, prices, and profiles to find the perfect match for your needs.',
        },
        {
            icon: <Calendar size={32} />,
            title: 'Book Instantly',
            description: 'Schedule appointments at your convenience with just a few clicks.',
        },
        {
            icon: <Star size={32} />,
            title: 'Rate & Review',
            description: 'Share your experience to help others make informed decisions.',
        },
    ];

    const providerSteps = [
        {
            icon: <UserCheck size={32} />,
            title: 'Create Your Profile',
            description: 'Sign up and showcase your skills, experience, and services offered.',
        },
        {
            icon: <Calendar size={32} />,
            title: 'Receive Bookings',
            description: 'Get notified when customers book your services and manage your schedule.',
        },
        {
            icon: <Star size={32} />,
            title: 'Build Reputation',
            description: 'Earn positive reviews and grow your customer base organically.',
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple, fast, and efficient for both customers and service providers.
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                        For Customers
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {customerSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        {step.icon}
                                    </div>
                                    <div className="absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 -z-10 hidden lg:block last:hidden" />
                                    <h4 className="font-bold text-gray-900 mb-3">{step.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                        For Service Providers
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {providerSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-3">{step.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
