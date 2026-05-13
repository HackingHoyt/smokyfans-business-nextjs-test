import Image from "next/image";

const navItems = ["Home", "Listings", "Map", "FAQ", "About", "Advertise", "Community Home"];

const categories = [
  "Accommodations",
  "Attractions",
  "Cabins",
  "Dining",
  "Local Artists",
  "Outdoor Activities",
  "Services",
  "Shopping",
  "Weddings",
];

const featuredBusinesses = [
  {
    name: "Mountain Mist Cabins",
    category: "Cabins",
    location: "Gatlinburg, TN",
    description: "Luxury mountain-view cabins with hot tubs and family-friendly amenities.",
    rating: "★★★★☆",
  },
  {
    name: "Smoky Trail Outfitters",
    category: "Outdoor Activities",
    location: "Pigeon Forge, TN",
    description: "Guided hikes, waterfall tours, and adventure rentals for every skill level.",
    rating: "★★★★★",
  },
  {
    name: "Blue Ridge Bistro",
    category: "Dining",
    location: "Sevierville, TN",
    description: "Farm-to-table comfort dishes inspired by Appalachian flavors.",
    rating: "★★★★☆",
  },
  {
    name: "Heritage Craft Collective",
    category: "Local Artists",
    location: "Townsend, TN",
    description: "Handmade art, woodwork, and local gifts curated from Smoky Mountain makers.",
    rating: "★★★★★",
  },
  {
    name: "Evergreen Event Co.",
    category: "Weddings",
    location: "Wears Valley, TN",
    description: "Full-service planning for unforgettable Smoky Mountain wedding weekends.",
    rating: "★★★★☆",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-midnight to-black">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/everything-smokies-hero.png"
          alt="Smoky Mountains landscape"
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-[#061534]/70 to-midnight" />

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
              <a key={item} href="#" className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 hover:border-electric/70 hover:text-electric">
                {item}
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
            <a href="#" className="rounded-full border border-white/40 bg-black/30 px-6 py-3 font-semibold text-white hover:border-ember hover:text-amber-200">Visit SmokyFans Community</a>
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Find Your Perfect Smokies Spot</h2>
          <p className="mt-2 text-sm text-white/80">Browse categories and discover businesses that make your mountain trip unforgettable.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category} className="rounded-xl border border-white/15 bg-[#0d1833]/80 p-4 transition hover:border-electric/70 hover:shadow-glow">
                <p className="font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-8 md:py-8">
        <h2 className="text-2xl font-semibold">Featured Businesses</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredBusinesses.map((business) => (
            <article key={business.name} className="glass-card p-5">
              <p className="text-xs uppercase tracking-wide text-electric">{business.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{business.name}</h3>
              <p className="mt-1 text-sm text-amber-200">{business.location}</p>
              <p className="mt-3 text-sm text-white/85">{business.description}</p>
              <p className="mt-3 text-sm">Rating: <span className="text-amber-300">{business.rating}</span></p>
              <button className="mt-4 rounded-full border border-electric/70 px-4 py-2 text-sm font-medium text-electric hover:bg-electric hover:text-black">View Listing</button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Built on Local Trust</h2>
          <p className="mt-3 text-white/85">
            Everything Smokies helps visitors and locals discover trusted Smoky Mountain businesses through a community-guided lens.
            From weekend getaways to hometown favorites, this directory highlights places people genuinely recommend and return to.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-semibold">Everything Smokies</p>
            <p className="text-white/70">Business Directory in the Smoky Mountains</p>
          </div>
          <div className="flex flex-wrap gap-4 text-white/85">
            <a href="#" className="hover:text-electric">SmokyFans Community</a>
            <a href="#listings" className="hover:text-electric">Listings</a>
            <a href="#" className="hover:text-electric">Advertise</a>
            <a href="#" className="hover:text-electric">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
