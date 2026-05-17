import Image from "next/image";

// Simple nav wiring for this one-page prototype (WordPress-style section anchors).
const navItems = [
  { label: "Home", href: "#top" },
  { label: "Listings", href: "#listings" },
  { label: "Map", href: "#map" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Advertise", href: "#advertise" },
  {
    label: "Community Home",
    href: "https://smokyfans.com",
    external: true,
  },
];

// Category chips stay lightweight: they route visitors to listings with a demo category hint.
const categories = [
  "Accommodations",
  "Cabins",
  "Local Artists",
  "Services",
  "Weddings",
  "Attractions",
  "Dining",
  "Outdoor Activities",
  "Shopping",
];

// Featured business data for PASS 4 using verified public SmokyFans directory listings.
const featuredBusinesses = [
  {
    name: "Tennessee Bible Museum",
    category: "Attractions / Religious",
    location: "Pigeon Forge, TN",
    description: "Bible museum and faith-based attraction in Pigeon Forge featuring historic exhibits and museum experiences.",
    website: "https://tnbiblemuseum.com/",
    buttonLabel: "Visit Website",
  },
  {
    name: "Pigeon Forge Snow",
    category: "Attractions",
    location: "Pigeon Forge, TN",
    description: "Indoor snow tubing attraction offering year-round snow play in Pigeon Forge.",
    website: "https://pigeonforgesnow.com/",
    buttonLabel: "View Website",
  },
  {
    name: "Preachers Smokehouse",
    category: "Dining",
    location: "Sevierville, TN",
    description: "Local smokehouse serving barbecue and comfort food in the Smoky Mountains.",
    website: "https://preacherssmokehouse.com/",
    buttonLabel: "Visit Website",
  },
  {
    name: "Rocky Top Mountain Coaster",
    category: "Attractions / Outdoor Activities",
    location: "Pigeon Forge, TN",
    description: "Mountain coaster attraction in Pigeon Forge with outdoor Smoky Mountain adventure appeal.",
    website: "https://www.rockytopcoaster.com/",
    buttonLabel: "View Website",
  },
  {
    name: "Sevier Lash Envy",
    category: "Services",
    location: "Sevierville, TN",
    description: "Beauty and lash service business serving Sevierville and the surrounding Smoky Mountain area.",
    website: "https://linktr.ee/SevierLashEnvyLLC",
    buttonLabel: "Visit Website",
  },
  {
    name: "Appalachian Septic and Pumping – ASAP",
    category: "Services",
    location: "Sevierville, TN",
    description: "Septic pumping and service provider serving Sevier County and nearby Smoky Mountain communities.",
    website: "https://www.appalachianseptic.com/",
    buttonLabel: "View Website",
  },
  {
    name: "Bear Mountain Weddings",
    category: "Weddings",
    location: "Sevierville, TN",
    description: "Smoky Mountain wedding service offering local wedding experiences in the Sevierville area.",
    website: "https://bearmountainweddings.com",
    buttonLabel: "Visit Website",
  },
  {
    name: "Right Angle Technology",
    category: "Services",
    location: "Sevierville, TN",
    description: "Local technology and IT service provider serving Smoky Mountain businesses and communities.",
    website: "https://rightangletechnology.com",
    buttonLabel: "View Website",
  },
];

export default function Home() {
  return (
    <main id="top" className="everything-smokies-page-bg min-h-screen text-white">
      <section className="relative isolate overflow-hidden">
        <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <Image src="/everything-smokies-logo.png" alt="Everything Smokies logo" width={44} height={44} className="rounded-full" />
            <div>
              <p className="font-semibold text-white">Everything Smokies</p>
              <p className="text-xs text-white/80">A SmokyFans business directory experience</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-white/90">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 hover:border-electric/70 hover:text-electric"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 md:px-8 md:pb-28 md:pt-24">
          <p className="inline-block rounded-full border border-ember/70 bg-ember/15 px-4 py-1 text-xs font-medium uppercase tracking-wide text-amber-200">
            Business Directory in the Smoky Mountains
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Everything Smokies</h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Welcome to a modern way to discover trusted local businesses, attractions, shops, cabins, dining, services,
            and hidden gems throughout the Smoky Mountains.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#listings" className="rounded-full bg-electric px-6 py-3 font-semibold text-black shadow-glow transition hover:brightness-110">Explore Listings</a>
            <a
              href="https://smokyfans.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 bg-black/30 px-6 py-3 font-semibold text-white hover:border-ember hover:text-amber-200"
            >
              Visit SmokyFans Community
            </a>
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Find Your Perfect Smokies Spot</h2>
          <p className="mt-2 text-sm text-white/80">Browse categories and discover businesses that make your mountain trip unforgettable.</p>
          <p className="mt-2 text-xs text-amber-200/90">Demo note: category browsing is wired for navigation in this prototype; full category pages are coming soon.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category}
                href="#listings"
                className="rounded-xl border border-white/15 bg-[#0d1833]/80 p-4 transition hover:border-electric/70 hover:shadow-glow"
                aria-label={`Browse ${category} listings (demo)`}
                title={`${category} listings (demo path)`}
              >
                <p className="font-medium">{category}</p>
                <p className="mt-1 text-xs text-white/70">Category demo path</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-8 md:py-8">
        <h2 className="text-2xl font-semibold">Featured Businesses</h2>
        <p className="mt-2 text-sm text-white/80">
          Featured listings below are based on public SmokyFans business directory entries.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredBusinesses.map((business) => (
            <article key={business.name} className="glass-card p-5">
              <p className="text-xs uppercase tracking-wide text-electric">{business.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{business.name}</h3>
              <p className="mt-1 text-sm text-amber-200">{business.location}</p>
              <p className="mt-3 text-sm text-white/85">{business.description}</p>
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-electric/50 px-4 py-2 text-sm font-medium text-electric transition hover:border-electric hover:text-cyan-200"
              >
                {business.buttonLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="map" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Smokies Map</h2>
          <p className="mt-3 text-white/85">Interactive Smokies map coming soon.</p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4 text-sm text-white/85">
            <div>
              <p className="font-semibold text-white">Is this a live directory?</p>
              <p>This page is a demo wiring prototype that shows how Everything Smokies navigation and sections will connect.</p>
            </div>
            <div>
              <p className="font-semibold text-white">How are businesses selected?</p>
              <p>Featured businesses in this demo are sample entries representing trusted local categories.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Can I browse by category?</p>
              <p>Yes—category buttons are wired for demo navigation now, with deeper category experiences planned for later phases.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Built on Local Trust</h2>
          <p className="mt-3 text-white/85">
            Everything Smokies helps visitors and locals discover trusted Smoky Mountain businesses through a community-guided lens.
            From weekend getaways to hometown favorites, this directory highlights places people genuinely recommend and return to.
          </p>
        </div>
      </section>

      <section id="advertise" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-12 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Advertise / Get Listed</h2>
          <p className="mt-3 text-white/85">
            Local Smoky Mountain businesses will be able to request featured placement and directory listings in a future release.
          </p>
          <a href="#advertise" className="mt-5 inline-block rounded-full border border-ember/70 bg-ember/15 px-5 py-2 text-sm font-medium text-amber-200">
            Join Waitlist (Demo)
          </a>
          {/* TODO: Replace demo CTA with verified SmokyFans business onboarding destination when approved. */}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-semibold">Everything Smokies</p>
            <p className="text-white/70">Business Directory in the Smoky Mountains</p>
          </div>
          <div className="flex flex-wrap gap-4 text-white/85">
            <a href="https://smokyfans.com" target="_blank" rel="noopener noreferrer" className="hover:text-electric">SmokyFans Community</a>
            <a href="#listings" className="hover:text-electric">Listings</a>
            <a href="#advertise" className="hover:text-electric">Advertise</a>
            <a href="#faq" className="hover:text-electric">FAQ</a>
            <a href="/admin" className="text-white/70 hover:text-electric">Admin Demo</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
