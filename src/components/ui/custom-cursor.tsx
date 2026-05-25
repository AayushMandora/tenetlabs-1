"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // We manually update the delayed position via framer-motion spring natively below
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isMounted) return null;

    const dotVariants = {
        default: {
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            opacity: 1,
        },
        hover: {
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            opacity: 0,
        },
    };

    const ringVariants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            border: "1px solid rgba(255, 255, 255, 0.35)",
            backgroundColor: "transparent",
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            border: "1px solid rgba(255, 255, 255, 0.65)",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}} />

            {/* Outer Halo/Ring */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[100] hidden rounded-none lg:block"
                variants={ringVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.5,
                }}
            />

            {/* Inner Dot */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-1.5 w-1.5 rounded-none bg-white lg:block"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "tween",
                    ease: "linear",
                    duration: 0,
                }}
                style={{
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.65)",
                }}
            />
        </>
    );
}
