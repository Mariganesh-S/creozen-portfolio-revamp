import { LegalLayout } from '../components/layout/LegalLayout';
import { SEO } from '../components/utils/SEO';

export const Privacy = () => {
    return (
        <>
            <SEO 
                title="Privacy Policy | Creozen"
                description="Learn how Creozen collects, uses, and protects your data in compliance with GDPR and global standards for AI and software services."
                canonical="/privacy-policy"
            />
            <LegalLayout 
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your data."
                lastUpdated="May 19, 2026"
            >
                <section className="space-y-4">
                    <h2 className="text-2xl text-white">1. Information Collection</h2>
                    <p>
                        We collect information to provide better services to all our users. This includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number provided during account creation or contact.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with our AI models and dashboards.</li>
                        <li><strong>Visual Data:</strong> For Smart Vision clients, video feeds are processed in real-time and are not stored unless explicitly configured for evidence retention.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl text-white">2. Data Usage</h2>
                    <p>
                        We use the collected data to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Develop new AI features and products.</li>
                        <li>Provide customer support and respond to inquiries.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl text-white">3. Data Security</h2>
                    <p>
                        We implement industry-standard security measures, including encryption and strict access controls, to protect your data from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl text-white">4. Third-Party Sharing</h2>
                    <p>
                        We do not sell your personal data. We may share data with trusted third-party service providers (e.g., cloud hosting) solely for the purpose of operating our services, under strict confidentiality agreements.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl text-white">
                        5. Your Rights & Data Deletion (Meta/Instagram Compliance)
                    </h2>

                    <p>
                        Depending on your location, you have rights to access, correct, or delete your personal data.
                    </p>

                    <p>
                        Because our application interacts with the Meta Graph API to manage your Instagram account,
                        we strictly respect your data control privileges regarding Meta Platform Data. You can
                        exercise your rights and request the deletion of your data through the following methods:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Direct App Revocation:</strong> You can remove our application’s access to your
                            data at any time. Go to your Instagram or Facebook profile’s{" "}
                            <strong>Settings &amp; Privacy &gt; Apps and Websites</strong>, locate our application,
                            and click <strong>Remove</strong>.
                        </li>

                        <li>
                            <strong>Manual Deletion Request:</strong> You can request the permanent removal of all
                            stored Instagram/Meta platform data from our databases by emailing us directly at{" "}
                            <a
                                href="mailto:privacy@creozen.ai"
                                className="text-primary hover:underline"
                            >
                                privacy@creozen.ai
                            </a>
                            . Please use the subject line{" "}
                            <strong>"Instagram Data Deletion Request"</strong> and include your account details.
                            We will process and confirm your data deletion within 30 days.
                        </li>
                    </ul>
                </section>
            </LegalLayout>
        </>
    );
};