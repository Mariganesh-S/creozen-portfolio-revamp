import { PiBridge, PiCubeFill, PiRadioButtonBold, PiStudentBold } from 'react-icons/pi';
import { LuHistory, LuShieldCheck, LuWorkflow } from 'react-icons/lu';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import plus from '../../assets/icons/plus.svg';

// Import the new figures
import { 
    WebDevFigure, 
    AnalyticsFigure, 
    ProductDevFigure, 
    AiTrainingFigure, 
    AutomationFigure, 
    IotFigure 
} from './ServiceFigures';
import { Separator } from '../separator/Separator';

/**
 * Features: Renders key features in a grid using custom visualizations.
 */
export const Features = () => {
    return (
        <section className='pt-12 bg-(--bg-primary)'>

            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    Services That Drive Innovation
                </h2>
                <p className="text-(--color-gray-500) text-balance max-w-2xl">
                    From concept to deployment, our comprehensive services empower businesses to harness AI and cutting-edge technologies for transformative growth.
                </p>
            </div>
            {/* --- 1. Two-Column Feature Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border-t border-(--guide-color)">

                {/* --- 1. Web & App Development --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg) border-b md:border-r border-(--guide-color)">
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <PiBridge />
                        Custom Web and Mobile App Development
                    </h2>

                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>Responsive websites and mobile apps built for performance.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Seamless user experiences designed to engage and scale effortlessly.
                        </p>
                    </div>

                    <div className="mt-8">
                        <WebDevFigure />
                    </div>
                </div>

                {/* --- 2. AI-Based Smart Analytics --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg) border-b border-(--guide-color)">
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <LuHistory />
                        AI-Based Smart Analytics
                    </h2>

                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>AI delivers real-time insights that drive clarity.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Predictive analytics keep your operations ahead of challenges using adaptive intelligence.
                        </p>
                    </div>

                    <div className="mt-8">
                        <AnalyticsFigure />
                    </div>
                </div>

                {/* --- 3. Custom Product Development --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg) border-b md:border-r border-(--guide-color)">
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <PiCubeFill />
                        Custom Product Development
                    </h2>

                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>We build tailored AI, software, and IoT products from concept to launch.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Every solution is crafted to match your goals and growth needs.
                        </p>
                    </div>

                    <div className="mt-8">
                        <ProductDevFigure />
                    </div>
                </div>

                {/* --- 4. AI-Based Training --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg) border-b border-(--guide-color)">
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <PiStudentBold />
                        AI-Based Training
                    </h2>

                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>Hands-on AI and machine learning training for innovative teams</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            — building practical skills, confidence, and real adoption.
                        </p>
                    </div>

                    <div className="mt-8">
                        <AiTrainingFigure />
                    </div>
                </div>

                {/* --- 5. Enterprise-Level Automations --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg) border-b md:border-b-0 md:border-r border-(--guide-color)">
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <LuWorkflow />
                        Enterprise-Level Automations
                    </h2>

                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>Intelligent automations that streamline enterprise workflows.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Chatbots and optimized processes cut manual effort and scale operational efficiency.
                        </p>
                    </div>

                    <div className="mt-8">
                        <AutomationFigure />
                    </div>
                </div>

                {/* --- 6. Smart IoT & Connected Solutions --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg)">
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <PiRadioButtonBold />
                        Industrial IoT & Smart Connected Solutions
                    </h2>

                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>IoT-powered systems that create fully connected ecosystems.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Smart devices integrate seamlessly with your web and mobile apps.
                        </p>
                    </div>
                    <div className="mt-8">
                        <IotFigure />
                    </div>
                </div>
            </div>

            {/* --- 2. Closing Statement/Callout (Full Width) --- */}
            <div className="p-(--padding-sm) lg:p-(--padding-lg) bg-(--color-black-900) border-t border-(--guide-color)">
                <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:justify-between md:items-end">
                    <p className="text-xl md:text-3xl font-semibold tracking-tight max-w-2xl text-balance">
                        We don't just build features; we engineer complete digital ecosystems.
                    </p>
                    <p className="text-(--color-gray-500) text-sm md:text-base">
                        From consulting to code, <br className="hidden md:block"/> we are your partner in innovation.
                    </p>
                </div>
            </div>
        </section>
    );
};
