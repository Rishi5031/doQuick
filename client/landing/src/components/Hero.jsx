import { Search, UserCircle, Wrench } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-16 bg-linear-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Connect with Local{' '}
                            <span className="text-blue-600">Service Experts</span> in Minutes
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Find trusted professionals for any service you need, or grow your business by reaching thousands of customers looking for your expertise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#services"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                            >
                                <Search size={20} />
                                Find a Service
                            </a>
                            <a
                                href="#pricing"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold"
                            >
                                <Wrench size={20} />
                                Become a Provider
                            </a>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-blue-600">5000+</div>
                                <div className="text-sm text-gray-600 mt-1">Active Providers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">50K+</div>
                                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">100+</div>
                                <div className="text-sm text-gray-600 mt-1">Service Categories</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-3xl shadow-2xl flex items-center justify-center">
                            <UserCircle size={200} className="text-blue-600 opacity-20" />
                            <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Wrench size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Quick Booking</div>
                                        <div className="text-sm text-gray-600">In seconds</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                                        ✓
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Verified Experts</div>
                                        <div className="text-sm text-gray-600">Trusted & rated</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
