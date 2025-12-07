import { Shield, TrendingUp, Users } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Shield size={32} />,
            title: 'Verified Professionals',
            description: 'Every service provider is thoroughly vetted and background-checked for your safety and peace of mind.',
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Grow Your Business',
            description: 'Service providers can reach thousands of potential customers and manage their bookings efficiently.',
        },
        {
            icon: <Users size={32} />,
            title: 'Trusted Community',
            description: 'Join a thriving community with real reviews and ratings from verified customers.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Bridging the Gap Between Services and Customers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're solving the challenge of local service providers lacking digital presence while helping customers find reliable, trusted professionals with ease.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
