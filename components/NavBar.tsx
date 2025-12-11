import Link from 'next/link';
import { Menu, MapPin, Phone } from 'lucide-react';

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                            ProteinPact
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#menu" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Menu
                            </Link>
                            <Link href="#locations" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Locations
                            </Link>
                            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        {/* Mobile menu button placeholder - can be implemented if needed */}
                        <button className="text-gray-700 dark:text-gray-300 p-2" aria-label="Open main menu">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden md:flex items-center">
                        <Link href="#order" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-lg shadow-emerald-500/30">
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
