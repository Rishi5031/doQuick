import { Camera, Hammer, Lightbulb, PaintBucket, GraduationCap, Droplet, Scissors, Car } from 'lucide-react';

const Services = () => {
    const services = [
        { icon: <Hammer size={32} />, name: 'Carpentry', count: '450+ providers' },
        { icon: <Lightbulb size={32} />, name: 'Electricians', count: '620+ providers' },
        { icon: <Droplet size={32} />, name: 'Plumbing', count: '580+ providers' },
        { icon: <PaintBucket size={32} />, name: 'Painting', count: '380+ providers' },
        { icon: <Camera size={32} />, name: 'Photography', count: '720+ providers' },
        { icon: <GraduationCap size={32} />, name: 'Tutoring', count: '890+ providers' },
        { icon: <Scissors size={32} />, name: 'Beauty & Salon', count: '540+ providers' },
        { icon: <Car size={32} />, name: 'Auto Repair', count: '410+ providers' },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Popular Service Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From home repairs to personal services, find the perfect professional for any job.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-transparent hover:border-blue-200"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                            <p className="text-sm text-gray-600">{service.count}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#services"
                        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                    >
                        View All Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
