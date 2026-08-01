// src/components/header/Header.jsx

import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // 1. Added useLocation
import { FaAngleDown } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { Toolbox } from './toolbox/Toolbox'; 
import logo from '../../assets/icons/creozen-logo.svg'; 
import styles from './Header.module.css'; 
import { SmallScreensNav } from './SmallScreensNav';

export const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [popup, setPopup] = useState('');
    const timeoutRef = useRef(null);
    
    // 2. Get current location
    const location = useLocation();

    // 3. Helper to determine if a path is active
    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    const openPopup = (menu) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setPopup(menu);
    };

    const closePopup = () => {
        timeoutRef.current = setTimeout(() => {
            setPopup('');
        }, 150);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) setIsMobileNavOpen(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const body = document.body;
        if (isMobileNavOpen) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
        return () => body.classList.remove('no-scroll');
    }, [isMobileNavOpen]);

    return (
        <header
            className={`sticky top-0 left-0 w-full bg-(--bg-primary) z-[9999] ${
                !isMobileNavOpen && scrolled ? 'border-b' : ''
            } border-(--guide-color) ${isMobileNavOpen ? '!w-[100vw]' : ''}`}
        >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors text-white text-xs sm:text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
                <span className="font-medium">Don't miss our exclusive Private AI Workshop!</span>
                <Link to="/paid-workshop" className="underline font-semibold text-blue-100 hover:text-white transition-colors">Register Now</Link>
            </div>
            {popup && (
                <div
                    className="hidden xl:block"
                    onMouseEnter={() => openPopup(popup)}
                    onMouseLeave={closePopup}
                >
                    <Toolbox popup={popup} />
                </div>
            )}

            <div className={`flex items-center justify-between px-6 h-16 bg-(--bg-primary) max-w-[1500px] mx-auto`}>
                <div className="flex items-center justify-between gap-6">
                    <div className="w-[7rem] cursor-pointer">
                        <Link to="/">
                            <img className="object-cover" src={logo} alt="Creozen Logo" />
                        </Link>
                    </div>

                    <nav className={`${styles['desktop-nav']} hidden xl:block relative`}>
                        <ul className="flex items-center text-(--color-gray-500) text-sm">
                            {/* 4. Applied conditional class for active state & updated to absolute paths */}
                            <li className={`cursor-pointer transition-colors ${isActive('/about') ? 'bg-(--color-black-600) text-gray-200' : ''}`}>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className={`cursor-pointer transition-colors ${isActive('/services') ? 'bg-(--color-black-600) text-gray-200' : ''}`}>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className={`cursor-pointer transition-colors ${isActive('/products') ? 'bg-(--color-black-600) text-gray-200' : ''}`}>
                                <Link to='/products'>Products</Link>
                            </li>
                            <li className={`cursor-pointer transition-colors ${isActive('/careers') ? 'bg-(--color-black-600) text-gray-200' : ''}`}>
                                <Link to='/careers'>Careers</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden xl:flex items-center gap-3 text-sm">
                    <Link to='/schedule-meeting'>
                        <button className={styles['header-btn-primary']}>Schedule a meeting</button>
                    </Link>
                    <Link to='/contact'>
                        <button className={styles['header-btn-secondary']}>Contact</button>
                    </Link>
                </div>

                <div
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    className="xl:hidden h-8 w-8 p-1.5 border-2 border-(--color-gray-900) rounded-full flex flex-col gap-1 items-center justify-center cursor-pointer"
                >
                    <div className={`h-0.5 w-full bg-(--color-gray-50) transition-all duration-300 ${isMobileNavOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                    <div className={`h-0.5 w-full bg-(--color-gray-50) transition-all duration-300 ${isMobileNavOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
                </div>
            </div>

            <AnimatePresence>
                {isMobileNavOpen && (
                    <SmallScreensNav closeNav={() => setIsMobileNavOpen(false)} />
                )}
            </AnimatePresence>
        </header>
    );
};