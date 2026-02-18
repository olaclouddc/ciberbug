import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white">
            <Navbar />

            {/* Stripe-like layout wrapper */}
            <main className="flex-grow w-full relative">
                {/* Global Vertical Lines */}
                <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-0 px-4 sm:px-6 lg:px-8">
                    <div className="border-x border-gray-100/50 h-full w-full mx-auto"></div>
                </div>

                <div className="relative z-10">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
