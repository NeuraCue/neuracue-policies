import CurrentDate from '@/components/CurrentDate';

export default function Contact() {
    return (
        <section className="mb-8">
            <h2 id="contact" className="text-center">
                Contact
            </h2>
            <div className="space-y-3 bg-white/5 rounded-lg p-4 sm:p-6">
                <p>
                    <strong>Support:</strong>{' '}
                    <a href="mailto:support@neuracue.com" className="break-all">
                        support@neuracue.com
                    </a>
                </p>
                <p>
                    <strong>Privacy:</strong>{' '}
                    <a href="mailto:privacy@neuracue.com" className="break-all">
                        privacy@neuracue.com
                    </a>
                </p>
            </div>
            <p className="text-sm text-gray-400 mt-6">
                Last updated: <CurrentDate/>
            </p>
        </section>
    );
}