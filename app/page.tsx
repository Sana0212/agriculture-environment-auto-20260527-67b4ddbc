
import Image from 'next/image'
import Link from 'next/link'
import {
  about,
  brand,
  contact,
  footer,
  hero,
  nav,
  process,
  services,
  testimonials,
} from '@/lib/siteContent'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1c2b1c]">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[#1c2b1c]/10 bg-[#f4f1ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#" className="text-lg font-semibold tracking-tight">
            {brand.name}
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#3d6b4f]">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-[#2d5a3d] px-4 py-2 text-sm font-medium text-white hover:bg-[#234a31]"
          >
            {hero.cta}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-[#3d6b4f]">{hero.eyebrow}</p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            {hero.headlineLine1}{' '}
            <span className="italic text-[#3d6b4f]">{hero.headlineLine2}</span>
            <br />
            {hero.headlineLine3}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#1c2b1c]/80">{hero.subheadline}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wide text-[#3d6b4f]">
            {hero.credentials.map((c) => (
              <li key={c} className="rounded-full border border-[#3d6b4f]/30 px-3 py-1">
                {c}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md bg-[#2d5a3d] px-6 py-3 text-sm font-medium text-white hover:bg-[#234a31]"
          >
            {hero.cta}
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
          <Image
            src={hero.imageUrl}
            alt={hero.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#1c2b1c] py-20 text-[#f4f1ea]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-widest text-[#8fbc8f]">{services.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">{services.headline}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.items.map((item) => (
              <article key={item.number} className="border-t border-[#f4f1ea]/20 pt-6">
                <span className="text-sm text-[#8fbc8f]">{item.number}</span>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f4f1ea]/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-[#3d6b4f]">{about.eyebrow}</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">{about.headline}</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-[#1c2b1c]/80">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#1c2b1c]/10 pt-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-[#2d5a3d]">{s.value}</div>
                  <div className="mt-1 text-xs text-[#1c2b1c]/60">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {about.certifications.map((c) => (
                <span
                  key={c}
                  className="rounded border border-[#1c2b1c]/20 px-2 py-1 text-xs font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src={about.imageUrl}
              alt={about.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-widest text-[#3d6b4f]">{process.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">{process.headline}</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <li key={step.number}>
                <span className="text-3xl font-light text-[#3d6b4f]/40">{step.number}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1c2b1c]/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-[#3d6b4f]">{testimonials.eyebrow}</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">{testimonials.headline}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-lg border border-[#1c2b1c]/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed italic text-[#1c2b1c]/80">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-medium">
                {t.author}
                <span className="mt-1 block text-xs font-normal text-[#1c2b1c]/60">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#2d5a3d] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-widest text-[#8fbc8f]">{contact.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">{contact.headline}</h2>
          <p className="mt-4 max-w-xl text-white/80">{contact.body}</p>
          <p className="mt-6 text-sm">
            {contact.emailLabel}:{' '}
            <a href={`mailto:${contact.email}`} className="underline">
              {contact.email}
            </a>
          </p>
          <form
            className="mt-10 grid max-w-lg gap-4"
            action={`mailto:${contact.email}`}
            method="POST"
            encType="text/plain"
          >
            <label className="block text-sm">
              {contact.formFields.name.label}
              <input
                name="name"
                placeholder={contact.formFields.name.placeholder}
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50"
              />
            </label>
            <label className="block text-sm">
              {contact.formFields.email.label}
              <input
                name="email"
                type="email"
                placeholder={contact.formFields.email.placeholder}
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50"
              />
            </label>
            <label className="block text-sm">
              {contact.formFields.landSize.label}
              <input
                name="landSize"
                placeholder={contact.formFields.landSize.placeholder}
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50"
              />
            </label>
            <label className="block text-sm">
              {contact.formFields.message.label}
              <textarea
                name="message"
                rows={4}
                placeholder={contact.formFields.message.placeholder}
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50"
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-[#f4f1ea] px-6 py-3 text-sm font-medium text-[#1c2b1c] hover:bg-white"
            >
              {contact.formFields.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1c2b1c]/10 py-8 text-center text-sm text-[#1c2b1c]/60">
        {footer.copyright}
      </footer>
    </div>
  )
}
