'use client';

import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function LeadForm() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phoneNumber }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Welcome to the pact! We will be in touch.');
                setName('');
                setPhoneNumber('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to connect. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 dark:from-emerald-900/20 to-transparent pointer-events-none"></div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                    <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-4">Join the Pact</h3>
                        <p className="text-emerald-100 mb-6">
                            Sign up to receive exclusive offers, new menu alerts, and invitation to our grand opening events.
                        </p>
                        <ul className="space-y-3 text-emerald-50 text-sm">
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> First bowl 50% off</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Birthday rewards</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Skip the line ordering</li>
                        </ul>
                    </div>
                    <div className="p-8 md:p-12">
                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                                    <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Success!</h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{message}</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-emerald-600 font-medium hover:text-emerald-500">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-zinc-800 dark:text-white sm:text-sm transition-shadow"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your Name"
                                        autoComplete="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-zinc-800 dark:text-white sm:text-sm transition-shadow"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="+91 9149032877"
                                        autoComplete="tel"
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Error</h3>
                                                <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                                                    <p>{message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            'Sign Up'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
