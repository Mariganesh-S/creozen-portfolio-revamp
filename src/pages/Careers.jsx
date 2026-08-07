import { Link } from 'react-router-dom';
import { FiArrowRight, FiBriefcase, FiMapPin, FiClock, FiCpu, FiGlobe, FiHeart } from 'react-icons/fi';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';

/* --- JOB DATA --- */
const JOBS = [
  {
    id: "ml-instructor",
    title: "Machine Learning Instructor",
    department: "Education",
    location: "Chennai",
    type: "Part-time",
    desc: "Teach foundational and advanced ML concepts, build course content, and mentor students through hands-on projects."
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chennai / Remote",
    type: "Full-time",
    desc: "Develop and execute marketing campaigns to boost product visibility and lead generation across digital channels."
  }
];

export const Careers = () => {
    return (
        <section className="animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            
            <SEO 
                title="Careers at Creozen - Join the Future of AI Engineering"
                description="Join Creozen's global team of AI engineers and innovators. Explore open positions in Machine Learning, Marketing, and Software Development in London and Chennai."
                keywords="AI jobs, machine learning careers, software engineer jobs, Creozen careers, tech jobs Chennai, tech jobs London"
                canonical="/careers"
            />

            {/* --- 1. Hero Section --- */}
            <div className=" relative py-24 md:py-32 px-6 md:px-12 border-x border-(--guide-color) overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className=" w-12   h-12 rounded-xl border border-purple-500/40 bg-purple-500/10 flex items-center  justify-center text-purple-400 transition-all duration-300 hover:scale-110 hover:bg-purple-500/20 ">
                         <FiBriefcase />
                        </div>
                        <span className="text-sm font-mono text-(--color-gray-500) uppercase tracking-widest">
                            Careers at Creozen
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Shape the Future of <br />
                        <span className="text-(--color-gray-500)">Intelligent Systems.</span>
                    </h1>
                    <p className="text-lg text-(--color-gray-400) max-w-2xl leading-relaxed">
                        We are a team of visionaries, engineers, and strategists building the infrastructure for the AI age. Join us in solving the world's most complex challenges.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- 2. Culture & Perks (Grid Layout) --- */}
            <div className="border-x border-b border-(--guide-color) bg-black">
                <div className="p-8 md:p-12 border-b border-(--guide-color) bg-(--bg-primary)">
                    <h2 className="text-2xl font-semibold text-white mb-2">Why Creozen?</h2>
                    <p className="text-sm text-(--color-gray-500)">More than just a job. It's a mission.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-(--guide-color)">
                    {/* Perk 1 */}
                    <div className="p-8 border-r border-b border-(--guide-color) bg-(--bg-primary) group hover:bg-(--color-black-900) transition-colors">
                        <FiCpu className="  text-2xl text-blue-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-400"/>
                        <h3 className="text-white font-medium mb-2">Cutting-Edge Tech</h3>
                        <p className="text-sm text-(--color-gray-500)">Work with the latest in GenAI, Computer Vision, and IoT hardware.</p>
                    </div>
                    {/* Perk 2 */}
                    <div className="p-8 border-r border-b border-(--guide-color) bg-(--bg-primary) group hover:bg-(--color-black-900) transition-colors">
                        <FiGlobe  className=" text-2xl text-blue-400  mb-4  transition-all duration-300 group-hover:scale-110 group-hover:text-green-400"/>
                        <h3 className="text-white font-medium mb-2">Remote-First DNA</h3>
                        <p className="text-sm text-(--color-gray-500)">We hire the best talent, regardless of where they live. Flexible hours.</p>
                    </div>
                    {/* Perk 3 */}
                    <div className="p-8 border-r border-b border-(--guide-color) bg-(--bg-primary) group hover:bg-(--color-black-900) transition-colors">
                        <FiHeart className="text-2xl text-blue-400 mb-4  transition-all duration-300 group-hover:scale-110 group-hover:text-red-400"/>
                        <h3 className="text-white font-medium mb-2">Wellness & Growth</h3>
                        <p className="text-sm text-(--color-gray-500)">Competitive equity, learning stipends, and comprehensive health coverage.</p>
                    </div>
                </div>
            </div>

            <GridSeparator />

            {/* --- 3. Job Listings --- */}
            <div className="border-x border-b border-(--guide-color) bg-(--bg-primary)">
                <div className="p-8 md:p-12 border-b border-(--guide-color)">
                    <h2 className="text-2xl font-semibold text-white mb-2">Open Positions</h2>
                    <p className="text-sm text-(--color-gray-500)">Current opportunities to join the team.</p>
                </div>

                <div className="divide-y divide-(--guide-color)">
                    {JOBS.map((job) => (
                        <div 
                            key={job.id} 
                            className="
    group
    p-8
    md:p-10
    flex
    flex-col
    md:flex-row
    md:items-center
    justify-between
    gap-6
    rounded-xl
    mx-4
    my-3
    border
    border-transparent
    transition-all
    duration-300
    hover:border-purple-500/10
    hover:bg-purple-500/2
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-purple-500/5
"
                        >
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3
    className="
        text-xl
        font-medium
        text-white
        transition-colors
        duration-300
        group-hover:text-purple-400
    "
>
                                        {job.title}
                                    </h3>
                                    <span className=" text-[10px] font-mono uppercase rounded-full bg-purple-500/10 border border-purple-500/30 px-3 py-1 text-white-300">
                                        {job.department}
                                    </span>
                                </div>
                                <p className="text-sm text-(--color-gray-500) mb-4">
                                    {job.desc}
                                </p>
                                <div className="flex items-center gap-6 text-xs text-(--color-gray-400) font-mono uppercase tracking-wider">
                                    <span className="flex items-center gap-2"><FiMapPin /> {job.location}</span>
                                    <span className="flex items-center gap-2"><FiClock /> {job.type}</span>
                                </div>
                            </div>

                            <Link to={`/careers/apply?role=${job.id}`}>
                                <button className=" px-6 py-3 rounded-full bg-gradient-to-r text-white text-sm font-medium
                                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 whitespace-nowrap flex items-center gap-2 cursor-pointer">
                                    Apply Now <FiArrowRight />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 4. General Application CTA --- */}
            <div className="border-x border-b border-(--guide-color) p-12 text-center bg-black">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-white text-xl font-medium mb-4">Don't see a perfect fit?</h3>
                    <p className="text-(--color-gray-500) mb-8">
                        We are always looking for exceptional talent. If you believe you can make an impact, send us an open application.
                    </p>
                    <Link to="/careers/apply">
                        <button className="
    px-8
    py-3
    rounded-full
    bg-white
    text-black
    text-sm
    font-medium
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
    cursor-pointer
">
                            Submit General Application
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
};