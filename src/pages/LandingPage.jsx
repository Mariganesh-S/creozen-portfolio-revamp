import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Separator } from '../components/separator/Separator'
import { Features } from '../components/features/Features'
import { FeaturedProducts } from '../components/products/FeaturedProducts'
import { ResearchSpotlightBanner } from '../components/banners/ResearchSpotlightBanner'
import { GetStartedBanner } from '../components/banners/GetStartedBanner'
import { GridSeparator } from '../components/separator/GridSeperator'
import { SEO } from '../components/utils/SEO'

const LandingPage = () => {
    return (
        <div className="mb-20">
            <SEO
                title="AI Software Development & Smart Vision Analytics"
                description="Creozen delivers end-to-end AI solutions, Computer Vision analytics, and University management software. We turn intelligent design into operational reality."
                keywords="AI software development, computer vision analytics, exam software, IoT solutions, Creozen"
                canonical="/"
            />

            <main className="max-w-(--content-max-width) mx-auto px-3 md:px-4">
                <Hero />
                
                {/* The main content block container, applying the Vercel-style borders */}
                <div className=" w-full overflow-hidden rounded-3xl border border-(--guide-color) bg-(--bg-primary)">
                    {/* Visual Separator Component */}
                    <GridSeparator />

                    {/* Core Landing Page Sections */}
                    <FeaturedProducts />

                    {/* Visual Separator Component */}
                    <GridSeparator />

                    {/* Research Spotlight Section */}
                    <ResearchSpotlightBanner />

                    {/* Visual Separator Component */}
                    <GridSeparator />

                    <Features />

                    <GridSeparator />

                    {/* Call to Action */}
                    <GetStartedBanner />
                </div>
            </main>
        </div>
    )
}

export default LandingPage
