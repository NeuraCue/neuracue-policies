import type {Metadata} from 'next';
import Image from 'next/image';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
    title: 'About - NeuraCue',
    description: 'Learn about NeuraCue - location reminder app that actually works.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: "About - NeuraCue",
        description: "Learn about NeuraCue - location reminder app that actually works.",
        url: "/about",
        siteName: "NeuraCue",
        type: "website",
        images: [
            {
                url: "/assets/images/og-about.png",
                width: 1200,
                height: 630,
                alt: "NeuraCue - About",
            },
        ],
    },
};

export default function AboutPage() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h1 className="mb-8">About NeuraCue</h1>
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <Image
                            src="/assets/images/logo_orange_256.png"
                            alt="NeuraCue Logo"
                            width={120}
                            height={120}
                            unoptimized
                            className="rounded-2xl shadow-lg shadow-neuracue-link/20"
                        />
                    </div>
                </div>
                <p className="text-gray-300 text-lg">
                    Smart location reminders that trigger when it matters.
                </p>
            </div>

            <article className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 id="what-is-neuracue" className="text-center">
                        What is NeuraCue?
                    </h2>
                    <p>
                        NeuraCue is an Android app that helps you remember the right things at the right places.
                        Create location-based reminders (“cues”) that trigger automatically when you arrive at or leave a location.
                    </p>
                    <p className="mt-4">
                        Whether it&apos;s remembering to buy milk when you&apos;re near the
                        grocery store, calling someone when you leave work, or picking up dry
                        cleaning on your way home, NeuraCue ensures you never forget
                        location-specific tasks again.
                    </p>
                    <p className="mt-4">
                        NeuraCue is designed for busy individuals who need reliable
                        location-based reminders, including parents coordinating family
                        schedules, people who benefit from contextual, location-based cues (including ADHD users),
                        travelers who need offline functionality, and anyone who wants to
                        offload mental tasks to their phone.
                    </p>
                </section>

                { /* TODO: "How it works" visual (diagram) */ }

                <section className="mb-12">
                    <h2 id="test-internal-track" className="text-center">
                        Test Internal Track
                    </h2>
                    <div className="bg-white/5 rounded-lg p-6">
                        <p className="mb-4">
                            NeuraCue is currently in internal testing. We&apos;re looking for early testers
                            to help us ensure rock-solid reliability before a wider release.
                        </p>
                        <p className="mb-4">
                            If you&apos;re interested in becoming an internal tester and getting early access
                            to NeuraCue, please reach out to us.
                        </p>
                        <p className="mb-4">
                            No spam. No commitment. Android only.
                        </p>
                        <div className="text-center">
                            <a
                                href="mailto:support@neuracue.com?subject=Internal Test Track Tester Request"
                                className="inline-block bg-neuracue-link hover:bg-neuracue-link/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                            >
                                Request Internal Access
                            </a>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 id="why-neuracue" className="text-center">
                        Why NeuraCue?
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-white/5 rounded-lg p-6">
                            <h3 className="text-neuracue-link mt-0">Reliable ⏱️ / 📍</h3>
                            <p className="mb-0">
                                Built with reliability-first architecture. Battery-optimized
                                geofencing that actually triggers when you need it, with
                                offline-first functionality so it works even without internet.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                            <h3 className="text-neuracue-link mt-0">Private 🔒</h3>
                            <p className="mb-0">
                                Your location data stays on your device. No account required for
                                basic use, and all data is stored locally by default. Privacy-first
                                design means your personal information remains private.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                            <h3 className="text-neuracue-link mt-0">Smart 🧠 (Coming Soon...)</h3>
                            <p className="mb-0">
                                AI-powered features learn from your patterns and help you create
                                smarter location cues. Future updates will include predictive
                                reminders based on your routines and natural language input.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 id="core-features" className="text-center">
                        Core Features
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <strong className="text-neuracue-link">Location-based cues:</strong>{' '}
                            Set reminders that trigger when you arrive at or leave specific places
                        </li>
                        <li>
                            <strong className="text-neuracue-link">Offline-first:</strong>{' '}
                            All your cues work without an internet connection
                        </li>
                        <li>
                            <strong className="text-neuracue-link">Battery optimized:</strong>{' '}
                            Smart background processing minimizes battery drain
                        </li>
                        <li>
                            <strong className="text-neuracue-link">Interactive maps:</strong>{' '}
                            Use Google Maps integration to easily select and visualize your cue
                            locations
                        </li>
                        <li>
                            <strong className="text-neuracue-link">Clean interface:</strong>{' '}
                            Built with Jetpack Compose for a modern, intuitive user experience
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 id="development-phases" className="text-center">
                        Development Phases
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-lg p-6 text-left">
                            <h3 className="text-neuracue-link text-2xl font-bold mb-2">Phase 1: Core</h3>
                            <p className="text-xl mb-0">Offline-first strategy (local cache)</p>
                            <p className="text-xl mb-0">Battery-optimized background service</p>
                            <p className="text-xl mb-0">Google Maps integration for location selection</p>
                            <p className="text-xl mb-0">Coherent, user-friendly permission flow</p>
                            <p className="text-xl mb-0">Reliable geofencing implementation</p>
                            <p className="text-xl mb-0">Notification system that actually works</p>
                            <p className="text-xl mb-0">Core Cue CRUD</p>
                            <p className="text-xl mb-0">Basic Cue Management UI</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-6 text-center">
                            <h3 className="text-neuracue-link text-2xl font-bold mb-2">Phase 2: Auth</h3>
                            <p className="text-xl mb-0">Passwordless sign-in (optional)</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-6 text-center">
                            <h3 className="text-neuracue-link text-2xl font-bold mb-2">Phase 3: AI</h3>
                            <p className="text-xl mb-0">Coming Soon...</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-6 text-center">
                            <h3 className="text-neuracue-link text-2xl font-bold mb-2">Phase 4: Share</h3>
                            <p className="text-xl mb-0">Coming Soon...</p>
                        </div>
                    </div>
                </section>

                <Contact />

            </article>
        </div>
    );
}