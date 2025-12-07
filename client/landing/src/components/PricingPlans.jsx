import { Check } from 'lucide-react';

const PricingPlans = () => {
    const plans = [
        {
            name: 'Basic',
            price: '$0',
            period: 'Free Forever',
            description: 'Perfect for getting started',
            features: [
                'Create professional profile',
                'Receive up to 10 bookings/month',
                'Basic analytics dashboard',
                'Email support',
                '5% commission per booking',
            ],
            highlighted: false,
        },
        {
            name: 'Professional',
            price: '$29',
            period: 'per month',
            description: 'Most popular for growing businesses',
            features: [
                'Everything in Basic',
                'Unlimited bookings',
                'Advanced analytics & insights',
                'Priority support',
                'Featured profile listing',
                'Custom booking page',
                '3% commission per booking',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: 'per month',
            description: 'For established service businesses',
            features: [
                'Everything in Professional',
                'Multi-location support',
                'Team management tools',
                'API access',
                'Dedicated account manager',
                'Custom integrations',
                '1% commission per booking',
            ],
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-linear-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Flexible Pricing Plans
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that fits your business needs. Start free and upgrade as you grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 ${plan.highlighted
                                    ? 'ring-2 ring-blue-600 shadow-2xl scale-105'
                                    : 'border border-gray-200 shadow-lg'
                                } hover:shadow-xl transition-all duration-300`}
                        >
                            {plan.highlighted && (
                                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gray-900">
                                    {plan.price}
                                </span>
                                <span className="text-gray-600 ml-2">{plan.period}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <div className="shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#login"
                                className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${plan.highlighted
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        For customers, ServiceHub is completely free to use!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
