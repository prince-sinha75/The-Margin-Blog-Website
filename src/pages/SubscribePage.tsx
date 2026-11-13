import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import SectionLabel from '@/components/SectionLabel';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="bg-paper-50 min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-3xl px-6 py-20 w-full">
        <SectionLabel className="mb-6">The Newsletter</SectionLabel>

        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 leading-[1.02]">
              A weekly letter for slow readers.
            </h1>
            <p className="mt-8 text-lg text-ink-600 leading-relaxed max-w-xl">
              One thoughtful essay each Sunday morning, delivered to your inbox. No
              tracking, no noise, no haste. Just reading worth your time — and the quiet
              to enjoy it in.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-paper-50 border border-rule px-4 py-3.5 text-base text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.72rem] uppercase tracking-label font-medium text-paper-50 bg-ink-900 hover:bg-terracotta-600 transition-colors duration-300"
                >
                  Subscribe <ArrowRight size={15} strokeWidth={1.5} />
                </button>
              </div>
              <p className="mt-4 text-xs text-ink-400">
                Free. Unsubscribe anytime. We never share your address.
              </p>
            </form>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {[
                { label: 'Weekly', body: 'One essay, every Sunday.' },
                { label: 'Ad-free', body: 'No sponsors, no pop-ups.' },
                { label: 'Private', body: 'Your inbox is your own.' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-ink-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-sage-500/15 flex items-center justify-center mb-6">
              <Check size={28} strokeWidth={1.5} className="text-sage-600" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-ink-900 mb-4">
              You're on the list.
            </h1>
            <p className="text-lg text-ink-600 max-w-md mx-auto">
              Welcome to {siteConfig.name}. Watch your inbox on Sunday morning — your
              first letter is on its way.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
