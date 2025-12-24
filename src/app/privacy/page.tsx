import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Privacy Policy - NeuraCue',
  description:
    "NeuraCue's privacy policy for the Android app on Google Play, covering location data, analytics, crash reports, user controls, and contact information.",
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - NeuraCue',
    description: 'How NeuraCue collects and uses data.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4">Privacy Policy</h1>
        <p className="text-gray-300">
          <strong>Effective Date:</strong> 01 JAN 2026
        </p>
      </div>

      <article className="prose prose-invert prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-center">Who we are</h2>
          <p>
            NeuraCue provides an Android app that lets you create AI-assisted, geofenced reminders.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Scope</h2>
          <p>
            This policy covers the NeuraCue Android app distributed via Google Play and this website
            (neuracue.com).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Data we collect</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p className="mb-2">
                <strong className="text-neuracue-link">
                  Location data (optional, permission-based)
                </strong>
              </p>
              <p className="text-sm sm:text-base">
                <em>Types:</em> approximate or precise, foreground and (if enabled) background.
                <br />
                <em>Use:</em> trigger reminders, show your current location on the map, and improve
                geofence accuracy.
                <br />
                <em>Control:</em> you can deny or revoke in Android Settings at any time. <br />
                <em>Background:</em> location access is used only to trigger reminders reliably when
                you arrive at or leave a place, even when the app is not actively open.
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Device &amp; app info</strong> (OS version,
                app version/code, device model) for diagnostics and compatibility.
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Analytics</strong> (anonymous/aggregated
                event data such as feature usage, session info) to improve reliability and UX.
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Crash reports</strong> (e.g., stack traces,
                device state at crash) to fix stability issues.
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Contact data you provide</strong> when you
                email us (email address, message contents).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-center">How we use data</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Provide core features (geofenced reminders, map, search).</li>
            <li>Operate, protect, and improve the app (performance, debugging, analytics).</li>
            <li>Communicate support responses you request.</li>
            <li>Comply with legal obligations and platform policies.</li>
            <li>
              Analytics and crash reporting may be provided by services such as Google Firebase
              (Analytics and Crashlytics).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Processing &amp; sharing</h2>
          <p>
            We process data as described above. We do <strong>not</strong> sell personal data. We
            may share data with service providers strictly to operate the app (e.g., Google Play
            services, mapping SDKs, analytics/crash tooling) under appropriate agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Security</h2>
          <p>
            We take reasonable administrative, technical, and organizational measures to protect
            personal data against unauthorized access, loss, misuse, or alteration. However, no
            method of transmission or storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Retention</h2>
          <p>
            We retain data only as long as necessary for the purposes described or as required by
            law or platform rules. Crash and analytics data is retained according to the respective
            provider&apos;s policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Your choices &amp; controls</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Permissions:</strong> Grant or revoke
                Location (precise/approximate; foreground/background) in Android Settings → Apps →
                NeuraCue → Permissions.
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Data deletion:</strong> You can request
                deletion of support email threads by contacting us. App-side data (e.g., locally
                stored reminders) can be deleted by uninstalling the app; cloud-synced data (if
                enabled) can be removed via request.
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 sm:p-6">
              <p>
                <strong className="text-neuracue-link">Opt-out of analytics:</strong> Contact us to
                request opt-out instructions where supported, or use system-level ad/analytics
                controls.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Children</h2>
          <p>
            NeuraCue is not directed to children under 13. If you believe a child provided data,
            contact us to remove it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Regional rights</h2>
          <p>
            Depending on your region (e.g., EEA/UK under GDPR, California under CCPA/CPRA), you may
            have rights to access, correct, delete, or restrict processing of your personal data.
            Contact us to exercise these rights; we will verify and respond as required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-center">Changes to this policy</h2>
          <p>
            We may update this policy to reflect changes in the app, services, or laws. We will post
            the new version here with a new effective date. Significant changes may also be
            highlighted in-app.
          </p>
        </section>

        <Contact />
      </article>
    </div>
  );
}
