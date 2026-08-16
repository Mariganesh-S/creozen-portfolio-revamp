import { useState } from 'react';
import { toast } from 'sonner'; // Import Toast
import { FiClock, FiVideo, FiCalendar, FiArrowRight, FiCheck, FiUser, FiMail, FiGlobe, FiLoader } from 'react-icons/fi'; // Import FiLoader
import { BsStars } from 'react-icons/bs';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';
import { submitForm } from '../services/emailService';

// ... (Mock Data: AVAILABLE_TIMES and getNextDays functions remain the same) ...
const AVAILABLE_TIMES = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "01:00 PM", "01:30 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

const getNextDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;
    while (days.length < 5) {
        const d = new Date(today);
        d.setDate(today.getDate() + count);
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        if (dayName !== 'Sat' && dayName !== 'Sun') {
            days.push({
                day: dayName,
                date: d.getDate(),
                fullDate: d.toISOString().split('T')[0]
            });
        }
        count++;
    }
    return days;
};

const NEXT_DAYS = getNextDays();

export const ScheduleMeeting = () => {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(NEXT_DAYS[0]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading State

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            date: selectedDate.fullDate,
            day: selectedDate.day,
            time: selectedTime,
            name: e.target.name.value,
            email: e.target.email.value,
            topic: e.target.topic.value
        };

        try {
            const response = await submitForm({
                type: 'Meeting Schedule',
                endpoint: '/api/meeting',
                data: formData
            });

            if (response.ok) {
                toast.success("Meeting confirmed! Check your email.");
                setStep(3); // Move to Success Screen
            } else {
                toast.error("Failed to schedule meeting. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Server connection failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className=" animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border  border-(--guide-color)  rounded-3xl  overflow-hidden">
            
            <SEO 
                title="Schedule a Discovery Call - AI Consultation"
                description="Book a 30-minute consultation with Creozen's AI experts to discuss your project needs and technical requirements."
                canonical="/schedule-meeting"
            />

            {/* ... Hero Section (Unchanged) ... */}
            <div className=" relative py-24 md:py-28 px-6 md:px-12 border-x border-(--guide-color) overflow-hidden text-center bg-gradient-to-b from-white/[0.03] to-transparent">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h5 className="text-white  font-medium tracking-wide text-sm uppercase mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                        <BsStars /> Consultation
                    </h5>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                        Schedule a Meeting
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed text-balance">
                        Book a 30-minute discovery call with our AI experts.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* ... Scheduler Container ... */}
            <div className="border-x border-b border-(--guide-color) flex justify-center bg-(--bg-primary)">
                <div className=" w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 min-h-[600px] overflow-hidden rounded-2xl border border-(--guide-color) my-8 mx-4 md:mx-8">
                    
                    {/* ... LEFT: Context Info (Unchanged) ... */}
                    <div className=" p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-(--guide-color) bg-(--color-black-900) transition-all duration-300 ">
                        <h2 className="text-xl font-medium text-white mb-6">Discovery Call</h2>
                        <div className="space-y-6 text-sm text-(--color-gray-400)">
                            <div className="flex items-center gap-3">
                                <FiClock className="text-xl text-(--color-gray-500)" />
                                <span>30 Minutes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiVideo className="text-xl text-(--color-gray-500)" />
                                <span>Google Meet / Zoom</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiGlobe className="text-xl text-(--color-gray-500)" />
                                <span>IST (India Standard Time)</span>
                            </div>
                        </div>
                        {/* ... Discussion Points ... */}
                    </div>

                    {/* ... RIGHT: Interactive Scheduler ... */}
                    <div className="lg:col-span-2 bg-(--bg-primary) p-8 md:p-12 relative overflow-hidden">
                        
                        {/* STEP 1: DATE & TIME SELECTION (Unchanged) */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                {/* ... Date & Time Buttons ... */}
                                <h3 className="text-lg text-white font-medium mb-6">Select a Date & Time</h3>
                                
                                {/* Date Picker */}
                                <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
                                    {NEXT_DAYS.map((dateObj, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => { setSelectedDate(dateObj); setSelectedTime(null); }}
                                            className={`
                                                flex flex-col items-center justify-center min-w-[80px] p-4 border transition-all duration-200
                                                ${selectedDate.fullDate === dateObj.fullDate 
                                                    ? 'bg-white border-white text-black' 
                                                    : 'bg-black border-(--guide-color) text-(--color-gray-400) hover:border-(--color-gray-500)'}
                                            `}
                                        >
                                            <span className="text-xs uppercase font-bold tracking-wider mb-1">{dateObj.day}</span>
                                            <span className="text-xl font-semibold">{dateObj.date}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Time Slots */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                                    {AVAILABLE_TIMES.map((time, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedTime(time)}
                                            className={`
                                                py-3 px-2 text-sm font-medium border transition-all duration-200
                                                ${selectedTime === time 
                                                    ? 'bg-white border-white text-black' 
                                                    : 'bg-black border-(--guide-color) text-white hover:border-white hover:bg-(--color-black-900)'}
                                            `}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex justify-end pt-4 border-t border-(--guide-color)">
                                    <button 
                                        disabled={!selectedTime}
                                        onClick={() => setStep(2)}
                                        className={`
                                            flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300
                                            ${selectedTime 
                                                ? 'bg-white text-black hover:bg-(--color-gray-200)' 
                                                : 'bg-(--color-black-900) text-(--color-gray-600) cursor-not-allowed'}
                                        `}
                                    >
                                        Next Details <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: USER DETAILS FORM (Updated with Loading State) */}
                        {step === 2 && (
                            <form onSubmit={handleSubmit} className=" animate-in fade-in  slide-in-from-right-4  duration-300  h-full  flex  flex-col rounded-2xl">
                                <div className=" flex items-center gap-4 mb-8 pb-5 border-b border-(--guide-color)">
                                    <button onClick={() => setStep(1)} type="button" className="rounded-full border border-(--guide-color) px-4 py-2 text-sm text-(--color-gray-500) transition-all duration-300 hover:border-white/40 hover:text-white">
                                        &larr; Back
                                    </button>
                                    <div className="text-white">
                                        <span className="block text-xs text-(--color-gray-500) uppercase">Selected Slot</span>
                                        <span className="font-medium flex items-center gap-2">
                                            <FiCalendar /> {selectedDate.day}, {selectedDate.date} &bull; <FiClock /> {selectedTime}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6 flex-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Name <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="name" required type="text" className="w-full bg-black border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="Jane Doe" />
                                                <FiUser className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Email <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="email" required type="email" className="w-full bg-black border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="jane@company.com" />
                                                <FiMail className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-(--color-gray-400)">Discussion Topic (Optional)</label>
                                        <textarea name="topic" rows="3" className="w-full bg-black border border-(--guide-color) p-3 text-white text-sm focus:border-white focus:outline-none transition-colors resize-none" placeholder="I'm interested in the Smart Vision Suite..."></textarea>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`
                                            bg-white text-black px-8 py-3 font-medium transition-all duration-200 flex items-center gap-2
                                            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-(--color-gray-200)'}
                                        `}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FiLoader className="animate-spin" /> Booking...
                                            </>
                                        ) : (
                                            "Confirm Meeting"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* STEP 3: SUCCESS STATE (Unchanged) */}
                        {step === 3 && (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <FiCheck size={32} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Meeting Scheduled!</h3>
                                <p className="text-(--color-gray-400) max-w-sm mb-8 text-balance">
                                    A calendar invitation has been sent to your email address. We look forward to speaking with you.
                                </p>
                                <button 
                                    onClick={() => window.location.href = '/'}
                                    className="text-white border-b border-transparent hover:border-white transition-all text-sm pb-1"
                                >
                                    Return to Home
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
};