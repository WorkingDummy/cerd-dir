'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { Variants } from 'framer-motion'
import { ThemeToggle } from "./ThemeToggle"

export const heroVariants: { item: Variants } = {
    item: {
        hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: { type: "spring", bounce: 0.3, duration: 0.8 },
        },
    }
};

const transitionVariants: { item: Variants } = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
        },
    },
};

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            {/* Added transition-colors to the main wrapper */}
            <main className="relative min-h-screen overflow-hidden bg-white text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
                
                {/* Background Decor */}
                <div aria-hidden className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                </div>

                <section className="relative">
                    {/* Floating Theme Toggle (Optional placement) */}
                    <div className="absolute right-6 top-6 z-50">
                        <ThemeToggle />
                    </div>

                    <div className="relative pt-24 md:pt-36">
                        {/* Dynamic Background Images */}
                        <AnimatedGroup
                            variants={{
                                container: { visible: { transition: { delayChildren: 1 } } },
                                item: heroVariants.item
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
                        >
                            {/* Night Background (ImageKit) */}
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="Night background"
                                className="hidden size-full object-cover dark:block"
                                width={3276}
                                height={4095}
                                priority
                            />
                            {/* Light Background (Local or ImageKit) */}
                            <Image
                                src="/mail2-light.webp" // Replace with your light version URL
                                alt="Light background"
                                className="block size-full object-cover dark:hidden"
                                width={3276}
                                height={4095}
                                priority
                            />
                        </AnimatedGroup>

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link href="#link" className="bg-muted hover:bg-slate-100 dark:hover:bg-slate-800 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-colors duration-300 dark:border-white/5">
                                        <span className="text-sm font-medium">Introducing Support for AI Models</span>
                                        <div className="bg-white dark:bg-slate-900 size-6 overflow-hidden rounded-full border border-slate-200 dark:border-white/10">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                                                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect 
                                    preset="fade-in-blur" 
                                    speedSegment={0.3} 
                                    as="h1" 
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-bold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                                >
                                    Mark Anthony Cerdeña
                                </TextEffect>
                                
                                <TextEffect 
                                    per="line" 
                                    preset="fade-in-blur" 
                                    speedSegment={0.3} 
                                    delay={0.5} 
                                    as="p" 
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg opacity-80"
                                >
                                    A Bachelor of Science in Computer Science Student in AMA Computer College Fairview Branch
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                                        item: transitionVariants.item,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                                >
                                    <Button asChild size="lg" className="rounded-xl px-8 text-base shadow-xl">
                                        <Link href="#link">Start Building</Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="rounded-xl px-8 text-base">
                                        <Link href="#link">Request a demo</Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}