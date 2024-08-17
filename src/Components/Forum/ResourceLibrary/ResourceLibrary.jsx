import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ResourceLibrary = () => {
    return (
        <>
            <div className="relative h-fit bg-indigo-50">
                <Features />
            </div>
        </>
    );
};

const Features = () => {
    return (
        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
            <Copy />
            <Carousel />
        </div>
    );
};

const Copy = () => {
    return (
        <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
            <span className="w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-indigo-100">
                Resource Library
            </span>
            <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
                Learn and grow with our resource library, full of materials on digital literacy and civic education.
            </h2>
        </div>
    );
};

const Carousel = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return (
        <div className="relative w-full">
            <Gradient />

            <div ref={ref} className="relative z-0 flex flex-col gap-6 mb-4 md:gap-12">
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={1}
                    numItems={4}
                />
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={2}
                    numItems={4}
                />
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={3}
                    numItems={4}
                />
                <CarouselItem
                    scrollYProgress={scrollYProgress}
                    position={4}
                    numItems={4}
                />
            </div>

        </div>
    );
};

const CarouselItem = ({ scrollYProgress, position, numItems }) => {
    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
        <motion.div
            style={{
                opacity,
                scale,
            }}
            className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
        >
            <span className="text-lg text-neutral-600">Resource link here</span>
        </motion.div>
    );
};

const Gradient = () => (
    <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

// const Buffer = () => <div className="h-24 w-full md:h-48" />;

export default ResourceLibrary;