'use client';

import { useState, FormEvent } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your email to confirm.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Notified When We Launch</h2>
        <p className="text-lg text-gray-400 mb-8">
          Be the first to know when Cassa goes live
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="flex-1 px-6 py-4 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'loading' ? 'Subscribing...' : 'Notify Me'}
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 px-4 py-3 rounded-lg ${
              status === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
}

