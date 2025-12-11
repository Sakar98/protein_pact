import { Leaf, Dumbbell, Sliders, Zap } from 'lucide-react';

const features = [
    {
        name: 'Fresh Ingredients',
        description: 'We source locally to ensure the crispest veggies and highest quality proteins.',
        icon: Leaf,
    },
    {
        name: 'High Protein',
        description: 'Every bowl is packed with at least 30g of protein to fuel your gains.',
        icon: Dumbbell,
    },
    {
        name: 'Customizable',
        description: 'Build your own bowl with infinite combinations of bases, proteins, and toppings.',
        icon: Sliders,
    },
    {
        name: 'Quick & Easy',
        description: 'Order online and pick up in minutes. Healthy eating made convenient.',
        icon: Zap,
    },
];

export default function FeatureSection() {
    return (
        <div className="py-24 bg-gray-50 dark:bg-zinc-900" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Nutrition Without Compromise
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                        We believe healthy food should taste amazing. Experience the difference quality makes.
                    </p>
                </div>

                <div className="mt-16">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-700">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/30">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-16">
                                    <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">{feature.name}</p>
                                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
