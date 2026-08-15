import { LegalLayout } from '../components/layout/LegalLayout';
import { SEO } from '../components/utils/SEO';

export const Terms = () => {
    return (
        <>
            <SEO 
                title="Terms of Service | Creozen"
                description="Read the Terms of Service for using Creozen's AI software, assessment platforms, and consulting services."
                canonical="/terms"
            />
            <LegalLayout 
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services."
                lastUpdated="December 1, 2024"
                
            >
               <section className=" space-y-5 rounded-2xl border border-(--guide-color) bg-(--bg-primary) p-6 md:p-8 transition-all duration-300 hover:border-white/20">
    <h2 className="text-2xl md:text-3xl  font-semibold tracking-tight text-white">
        1. Acceptance of Terms
    </h2>
                    <p className="text-sm md:text-base text-(--color-gray-500) leading-7">
                        By accessing and using the services provided by Creozen ("we," "us," or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

               <section className="space-y-5 rounded-2xl border border-(--guide-color) bg-(--bg-primary) p-6 md:p-8 transition-all duration-300 hover:border-white/20">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
        2. Use of Services
    </h2>
                    <p>
                        You agree to use our AI and software solutions only for lawful purposes. You are prohibited from violating any laws, infringing on intellectual property rights, or distributing harmful software through our platforms.
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-(--color-gray-500) leading-7">
                        <li>You must provide accurate account information.</li>
                        <li>You are responsible for maintaining the security of your account.</li>
                        <li>Reverse engineering of our proprietary AI models is strictly prohibited.</li>
                    </ul>
                </section>

               <section className="space-y-5 rounded-2xl border border-(--guide-color) bg-(--bg-primary) p-6 md:p-8 transition-all duration-300 hover:border-white/20">
                    <h2 className="text-2xl text-white">3. Intellectual Property</h2>
                    <p>
                        All content, software, AI models, and designs associated with Creozen are the exclusive property of Creozen Ltd. Custom software developed for clients remains the property of the client upon full payment, as specified in individual contracts.
                    </p>
                </section>

                <section className=" space-y-5 rounded-2xl border border-(--guide-color) bg-(--bg-primary) p-6 md:p-8 transition-all duration-300 hover:border-white/20">
                    <h2 className="text-2xl text-white">4. Limitation of Liability</h2>
                    <p>
                        Creozen shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of data or business interruption.
                    </p>
                </section>

                <section className="space-y-5 rounded-2xl border border-(--guide-color) bg-(--bg-primary)  p-6 md:p-8  transition-all  duration-300 hover:border-white/20">
                    <h2 className="text-2xl text-white">5. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                    </p>
                </section>
            </LegalLayout>
        </>
    );
};