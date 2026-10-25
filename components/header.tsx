"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data"
import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

type Indicator = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function Header() {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef(new Map<string, HTMLLIElement>());
  const [indicator, setIndicator] = useState<Indicator | null>(null);

  const activeHref = links.find((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  )?.href;

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeItem = activeHref ? itemRefs.current.get(activeHref) : undefined;
    if (!list || !activeItem) return;

    // offsetLeft/offsetTop stay relative to the nav, so a page scroll
    // (including Next's scroll-to-top on navigation) cannot shift the pill.
    const measure = () => {
      setIndicator({
        x: activeItem.offsetLeft,
        y: activeItem.offsetTop,
        width: activeItem.offsetWidth,
        height: activeItem.offsetHeight,
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(list);
    itemRefs.current.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeHref]);

  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full dark:border-white/15 dark:bg-[#323A5E]/90 dark:shadow-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>
      </motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <motion.ul
          ref={listRef}
          className="relative flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-sky-900 sm:w-[initial] sm:flex-nowrap sm:gap-5"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {indicator && (
            <motion.span
              className="pointer-events-none absolute left-0 top-0 rounded-full bg-sky-100"
              initial={false}
              animate={indicator}
              transition={{ type: "tween" }}
            />
          )}
          {links.map((link) => {
            const isActive = link.href === activeHref;

            return (
              <li className="h-3/4 flex items-center justify-center relative"
                key={link.href}
                ref={(node) => {
                  if (node) itemRefs.current.set(link.href, node);
                  else itemRefs.current.delete(link.href);
                }}>
                <Link className={clsx("flex w-full items-center justify-center px-3 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 dark:focus-visible:outline-sky-100",
                  isActive
                    ? "text-sky-950"
                    : "text-sky-900 hover:text-sky-800 dark:text-sky-100 dark:hover:text-white"
                )}
                  href={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
}
