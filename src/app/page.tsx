import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NeuraCue',
  description:
    'Policy and compliance pages for the NeuraCue Android app on Google Play. AI-powered geofenced reminders.',
  openGraph: {
    images: [
      {
        url: 'https://neuracue.com/assets/images/logo.png',
        width: 800,
        height: 600,
        alt: 'NeuraCue Logo',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <h1 className="mb-6">Welcome to NeuraCue</h1>
      <Image
        src="/assets/images/logo_orange_768.png"
        alt="NeuraCue logo"
        width={180}
        height={180}
        className="mx-auto my-4 block h-auto w-36 rounded-2xl sm:w-44"
        unoptimized
      />
      <p className="mb-4 mt-4 max-w-2xl text-lg sm:text-xl">
        AI-powered geo-fenced reminders for Android on Google Play Store.
      </p>
      <p className="mb-8 max-w-xl text-sm text-gray-300 sm:text-base">
        This site hosts required policy and compliance pages for the NeuraCue Android app on Google
        Play.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Link
          href="/about"
          className="text-lg font-medium text-neuracue-link transition-colors hover:underline"
        >
          About
        </Link>
        <Link
          href="/privacy"
          className="text-lg font-medium text-neuracue-link transition-colors hover:underline"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-lg font-medium text-neuracue-link transition-colors hover:underline"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
}
