import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">ProteinPact</h3>
                        <p className="text-gray-600 dark:text-gray-400">Fueling your ambition with fresh, fast, and nutritious bowls.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Tiktok</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Visit Us</h4>
                        <p className="text-gray-600 dark:text-gray-400"> HSR Layout<br />Bangalore, KA 560100</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 dark:text-gray-500">
                    &copy; {new Date().getFullYear()} ProteinPact. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
