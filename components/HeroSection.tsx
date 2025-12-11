import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-white dark:bg-black pt-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    {/* Angle shape for decoration */}
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-black transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Taste the Gains.</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 xl:inline">We've Got Your Protein Goal Covered.</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                New Year, New Goals? We help you complete your protein diet goal, with taste uncompromised. Fresh ingredients and bold flavors in every bowl.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                                <div className="rounded-md shadow">
                                    <Link href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg transition-transform hover:scale-105 shadow-emerald-500/25 shadow-lg">
                                        Order Now <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0">
                                    {/* <Link href="#menu" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg transition-colors">
                                        View Menu
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
                    <Image
                        src="/hero-bowl.png"
                        alt="Delicious Protein Bowl"
                        fill
                        className="object-cover"
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    );
}
