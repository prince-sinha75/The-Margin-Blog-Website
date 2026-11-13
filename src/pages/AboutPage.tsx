import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { articles } from '@/data/articles';
import SectionLabel from '@/components/SectionLabel';

export default function AboutPage() {
  const authors = articles.reduce<Record<string, { role: string; count: number }>>((acc, a) => {
    if (!acc[a.author.name]) {
      acc[a.author.name] = { role: a.author.role, count: 0 };
    }
    acc[a.author.name].count++;
    return acc;
  }, {});

  return (
    <div className="bg-paper-50">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-12 lg:pt-20 pb-10 text-center">
        <SectionLabel className="mb-6 justify-center">About the Journal</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 leading-[1.02]"
        >
          A quiet space for writing that takes its time.
        </motion.h1>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="border-t border-rule pt-10">
          <p className="font-display text-2xl sm:text-3xl text-ink-900 leading-relaxed">
            {siteConfig.name} is an independent digital journal devoted to thoughtful
            writing on design, craft, culture, and the quieter currents of modern life.
          </p>
          <div className="mt-8 space-y-5 text-ink-600 leading-relaxed">
            <p>
              We publish essays that reward patience — pieces that ask you to slow down,
              to read with attention, to sit with an idea long enough for it to find its
              shape. In a culture that treats speed as a virtue and brevity as a virtue,
              we are interested in the opposite: in writing that unfolds, that takes its
              time, that trusts the reader to stay.
            </p>
            <p>
              The journal was founded in {siteConfig.foundedYear} by a small group of
              writers and editors who believed there was still room for a publication
              that treated its readers as adults — capable of sustained attention, worthy
              of careful prose, and uninterested in being shouted at. We publish weekly,
              on Sunday mornings, because that is when the reading is slowest and the
              light is best.
            </p>
            <p>
              We have no advertisers. We have no investors. We are supported by our
              readers, and we answer to them alone. This is not a marketing position. It
              is a practical one: the only way to publish the kind of writing we believe
              in is to be free of the pressures that make most publishing faster, louder,
              and thinner than it ought to be.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper-200 py-20 my-8">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel className="mb-6">What We Believe</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-900 mb-12">Three commitments.</h2>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                title: 'Attention',
                body: 'We write for readers who are willing to give their attention to a piece long enough for it to deserve it. We do not write for scrollers. We do not write for skimmers. We write for people who read.',
              },
              {
                title: 'Craft',
                body: 'Every essay is edited, re-edited, and edited again. We believe prose is a craft, not a container — that how something is written is inseparable from what is being said.',
              },
              {
                title: 'Independence',
                body: 'No sponsors, no affiliates, no sponsored content. The only relationship that matters is the one between the writing and the reader. We protect it fiercely.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="font-display text-5xl text-terracotta-500/30 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl text-ink-900 mt-4 mb-3">{value.title}</h3>
                <p className="text-ink-600 leading-relaxed">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionLabel className="mb-6">The Voices</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl text-ink-900 mb-12">Our contributors.</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(authors).map(([name, info]) => (
            <div key={name} className="flex items-center gap-4 border-t border-rule pt-5">
              <div className="w-12 h-12 rounded-full bg-terracotta-500/15 flex items-center justify-center font-display text-xl text-terracotta-600 shrink-0">
                {name.charAt(0)}
              </div>
              <div>
                <h3 className="font-display text-xl text-ink-900">{name}</h3>
                <p className="text-xs text-ink-500 mt-0.5">
                  {info.role} · {info.count} {info.count === 1 ? 'essay' : 'essays'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-display text-3xl sm:text-4xl italic text-ink-900 leading-snug">
          "Read quietly, and the world becomes noisier only to those who are not reading."
        </p>
        <p className="mt-6 text-[0.7rem] uppercase tracking-label text-ink-500 font-medium">
          — {siteConfig.editor}, {siteConfig.name}
        </p>
      </section>
    </div>
  );
}
