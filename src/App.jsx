import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';

// --- Layout Components ---
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

// --- Page Components ---
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { CareersForm } from './pages/CareersForm';
import { Contact } from './pages/Contact';
import { Forms } from './pages/Forms';
import LandingPage from './pages/LandingPage';
import { NotFound } from './pages/NotFound';
import { Privacy } from './pages/Privacy';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';
import { ScheduleMeeting } from './pages/ScheduleMeeting';
import { Services } from './pages/Services';
import { Terms } from './pages/Terms';
import { WorkshopForm } from './pages/WorkshopForm';
import { PaidWorkshop } from './pages/PaidWorkshop';

// --- Transition Utilities ---
import { PageTransition } from './components/utils/PageTransition';
import ScrollToTop from './components/utils/ScrollToTop';
import { Schema } from './components/utils/Schema';

// 1. Separate Inner Component for Routes (Access to useLocation)
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />

                <Route path="/about" element={<PageTransition><About /></PageTransition>} />

                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />

                <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
                <Route path="/products/:id" element={<PageTransition><ProductDetails /></PageTransition>} />

                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

                <Route path="/forms" element={<PageTransition><Forms /></PageTransition>} />

                <Route path="/schedule-meeting" element={<PageTransition><ScheduleMeeting /></PageTransition>} />

                <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />

                <Route path="/careers/apply" element={<PageTransition><CareersForm /></PageTransition>} />

                <Route path="/workshop-form" element={<PageTransition><WorkshopForm /></PageTransition>} />

                <Route path="/paid-workshop" element={<PageTransition><PaidWorkshop /></PageTransition>} />

                {/* Legal Pages */}
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="/privacy-policy" element={<PageTransition><Privacy /></PageTransition>} />

                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <div className="min-w-[280px]">
            <BrowserRouter>
                {/* 
                    SEO SCHEMA INJECTION 
                    This injects the JSON-LD Organization data globally.
                */}
                <Schema />

                <Header />

                {/* MAIN CONTAINER WITH SMALL-SCREEN px-6 */}
                <main
                    className="
                        flex-1
                        px-4                /* small screens */
                        md:px-0             /* remove padding on medium+ screens */
                        xl:w-(--content-width)
                        mx-auto
                        max-w-(--content-max-width)
                        overflow-x-hidden
                        xl:overflow-x-visible
                    "
                >
                    <AnimatedRoutes />
                </main>

                <Footer />
                <ScrollToTop />
                
                <Toaster 
                    position="bottom-right" 
                    theme="dark"
                    closeButton
                    style={{
                        zIndex: 999999 // Ensures it sits on top of everything
                    }}
                    toastOptions={{
                        style: { 
                            background: '#0a0a0a', 
                            border: '1px solid #333', 
                            color: '#fff',
                            borderRadius: '0px'
                        },
                    }}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;