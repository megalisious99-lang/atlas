import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock3, House, MapPin, Sparkles, SquarePen, Building2 } from 'lucide-react';

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Thoughtful service for apartments, townhouses, and family homes with room-by-room care.'
  },
  {
    title: 'Office Cleaning',
    description: 'Reliable upkeep for daily operations, reception areas, and shared workspaces.'
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description: 'A precise reset for turnovers, inspections, and handoff days.'
  },
  {
    title: 'Recurring Cleaning',
    description: 'A dependable routine that keeps your space orderly without disruption.'
  },
  {
    title: 'Deep Cleaning',
    description: 'A full-service detail for seasonal resets, post-event care, and refreshes.'
  }
];

const standards = [
  'Clear communication from booking through completion.',
  'Respect for your home, office, and daily rhythm.',
  'Careful attention to detail in the spaces that matter most.'
];

const process = [
  'Share your address, preferred date, and service type.',
  'We confirm availability and outline the visit.',
  'We arrive prepared and leave the space carefully restored.'
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-atlas-linen text-atlas-ink">
      <header className="sticky top-0 z-50 border-b border-atlas-mist/70 bg-[linear-gradient(180deg,rgba(176,204,191,0.38)_0%,rgba(238,232,223,0.96)_100%)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-5 lg:px-8">
          <Link href="#top" className="text-center">
            <span className="block font-serif text-[1.5rem] font-semibold leading-none tracking-[0.36em] text-atlas-ink sm:text-[1.8rem]">
              ATLAS
            </span>
            <span className="mt-1 block text-[0.74rem] font-semibold uppercase tracking-[0.38em] text-atlas-smoke sm:text-[0.8rem]">
              Cleaning Services
            </span>
          </Link>
          <nav className="mt-4 flex items-center justify-center gap-10 text-[0.78rem] font-medium uppercase tracking-[0.34em] text-atlas-smoke sm:gap-14 sm:text-[0.84rem]">
            <Link href="#about" className="transition hover:text-atlas-ink">About</Link>
            <Link href="#services" className="transition hover:text-atlas-ink">Services</Link>
            <Link href="#book" className="transition hover:text-atlas-ink">Book</Link>
            <Link href="#contact" className="transition hover:text-atlas-ink">Contact</Link>
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 scroll-mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm uppercase tracking-[0.32em] text-atlas-smoke">New York City • Tri-State Area</p>
          <h1 className="font-serif text-4xl leading-[0.95] sm:text-5xl lg:text-7xl">
            Cleaning done properly.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-atlas-smoke">
            Atlas offers calm, meticulous cleaning for homes and offices that deserve a steadier standard.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#book" className="inline-flex items-center gap-2 rounded-full bg-atlas-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-atlas-accent">
              Book a Visit <ArrowRight size={16} />
            </Link>
            <Link href="#services" className="inline-flex items-center gap-2 rounded-full border border-atlas-ink/20 px-6 py-3 text-sm font-medium text-atlas-ink transition hover:bg-white">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-atlas-mist bg-white/80 p-8 shadow-soft">
          <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-atlas-smoke">
            <Sparkles size={16} />
            A quiet standard
          </div>
          <div className="space-y-5 text-sm leading-7 text-atlas-smoke">
            <p>
              We are a company built around clear communication, dependable scheduling, and a respect for the spaces we enter.
            </p>
            <div className="grid gap-4 border-t border-atlas-mist pt-5 sm:grid-cols-2">
              <div>
                <p className="font-medium text-atlas-ink">Service areas</p>
                <p className="mt-1">Manhattan, Brooklyn, Queens, Nassau, Westchester, and nearby Tri-State neighborhoods.</p>
              </div>
              <div>
                <p className="font-medium text-atlas-ink">Availability</p>
                <p className="mt-1">Flexible scheduling for one-time visits and recurring care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24 lg:px-8 lg:py-12">
        <div className="grid gap-8 border-t border-atlas-mist pt-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-atlas-smoke">Who we are</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">A careful approach to spaces that matter.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-atlas-smoke">
            <p>
              Atlas was founded to bring a steadier, more thoughtful standard to cleaning in New York. We believe the work should feel precise, calm, and dependable from the first message to the final detail.
            </p>
            <p>
              Our work is not loud. It is deliberate. We focus on the details that shape how a home or office feels to live and work in.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-24 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-atlas-smoke">Services</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Cleaning for homes, offices, and transitions.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="rounded-[1.5rem] border border-atlas-mist bg-white/70 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-atlas-stone text-atlas-ink">
                  {index === 0 ? <House size={18} /> : index === 1 ? <Building2 size={18} /> : index === 2 ? <SquarePen size={18} /> : index === 3 ? <Clock3 size={18} /> : <Sparkles size={18} />}
                </div>
                <h3 className="font-serif text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-atlas-smoke">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 scroll-mt-24 lg:px-8 lg:py-16">
        <div className="grid gap-8 rounded-[2rem] border border-atlas-mist bg-white/80 p-8 shadow-soft lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-atlas-smoke">Our Standards</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">The kind of care you can expect.</h2>
            <div className="mt-8 space-y-4">
              {standards.map((item) => (
                <div key={item} className="flex gap-3 text-atlas-smoke">
                  <BadgeCheck className="mt-1 shrink-0 text-atlas-accent" size={18} />
                  <p className="text-base leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-atlas-mist bg-atlas-linen p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-atlas-smoke">How Atlas works</p>
            <div className="mt-6 space-y-6">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-atlas-ink/20 text-sm font-medium text-atlas-ink">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-atlas-smoke">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 scroll-mt-24 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-atlas-mist bg-atlas-stone p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-atlas-smoke">Service Area</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Serving New York City and the surrounding neighborhoods.</h2>
            <div className="mt-8 flex items-start gap-3 text-atlas-smoke">
              <MapPin className="mt-1 shrink-0" size={18} />
              <p className="text-base leading-7">
                Atlas serves Manhattan, Brooklyn, Queens, Nassau, Westchester, and selected Tri-State locations. If you are nearby and unsure whether we cover your address, reach out and we will confirm it directly.
              </p>
            </div>
          </div>
          <div id="book" className="scroll-mt-24 rounded-[2rem] border border-atlas-mist bg-white/90 p-8 shadow-soft lg:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-atlas-smoke">Book</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Request a cleaning visit.</h2>
            <form className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-atlas-smoke">
                  Name
                  <input className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
                </label>
                <label className="text-sm text-atlas-smoke">
                  Phone
                  <input className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-atlas-smoke">
                  Email
                  <input type="email" className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
                </label>
                <label className="text-sm text-atlas-smoke">
                  Address
                  <input className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-atlas-smoke">
                  Service Type
                  <select className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none">
                    <option>Residential Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Move-In / Move-Out Cleaning</option>
                    <option>Recurring Cleaning</option>
                    <option>Deep Cleaning</option>
                  </select>
                </label>
                <label className="text-sm text-atlas-smoke">
                  Preferred Date
                  <input type="date" className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
                </label>
              </div>
              <label className="text-sm text-atlas-smoke">
                Preferred Time
                <input className="mt-2 w-full rounded-full border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
              </label>
              <label className="text-sm text-atlas-smoke">
                Message
                <textarea rows={4} className="mt-2 w-full rounded-[1.5rem] border border-atlas-mist bg-atlas-linen px-4 py-3 text-atlas-ink outline-none" />
              </label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-atlas-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-atlas-accent">
                Send Request <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 border-t border-atlas-mist bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-atlas-smoke lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-serif text-xl text-atlas-ink">Atlas Cleaning Services</p>
            <p className="mt-2">Professional cleaning for homes and offices across New York City and the Tri-State Area.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="mailto:hello@atlas-cleaning.com" className="transition hover:text-atlas-ink">hello@atlas-cleaning.com</a>
            <a href="tel:+12125550199" className="transition hover:text-atlas-ink">(212) 555-0199</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
