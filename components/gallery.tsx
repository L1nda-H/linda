"use client";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import {
  gallerySections,
  type GalleryAsset,
  type GallerySection,
} from "@/lib/galleryimgs";

const GAP = 8;
const SECTION_SPACE_BEFORE = 56;

const entrance = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay: 0.175 },
};

function columnCount(width: number) {
  if (width >= 1320) return 5;
  if (width >= 1000) return 4;
  if (width >= 680) return 3;
  return 2;
}

export default function Gallery() {
  const sections = useMemo(
    () => gallerySections.filter((section) => section.images.length > 0),
    []
  );
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (sections.some((section) => section.id === hash)) {
      setActiveId(hash);
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.28, 220);
      let current = sections[0]?.id ?? "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = section.id;
      });
      setActiveId((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <motion.section id="gallery" className="mx-auto w-full max-w-[100rem]" {...entrance}>
      <div className="text-center">
        <SectionHeading>Gallery</SectionHeading>
        <p className="mx-auto w-full max-w-[42rem] pb-10 font-normal">
          Besides programming, I sometimes also enjoy creating and drawing! Here
          are some works I've made for classes, for others, and for fun throughout
          the past years.
        </p>
      </div>

      <div className="flex items-start gap-4 sm:gap-8 lg:gap-12">
        <nav
          aria-label="Gallery sections"
          className="sticky top-28 z-30 max-h-[calc(100vh-9rem)] w-[5.5rem] shrink-0 overflow-y-auto sm:w-40"
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0 text-left">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "location" : undefined}
                    onClick={() => setActiveId(section.id)}
                    className={clsx(
                      "block border-l-2 py-1.5 pl-3 text-xs leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 dark:focus-visible:outline-sky-100",
                      active
                        ? "border-sky-950/70 font-medium text-sky-950 dark:border-sky-100/80 dark:text-sky-50"
                        : "border-sky-950/10 text-sky-950/40 hover:border-sky-950/30 hover:text-sky-950/75 dark:border-white/10 dark:text-sky-50/40 dark:hover:border-white/30 dark:hover:text-sky-50/75"
                    )}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="min-w-0 flex-1">
          <GalleryFlow sections={sections} />
        </div>
      </div>
    </motion.section>
  );
}

function GalleryFlow({ sections }: { sections: GallerySection[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  const layout = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const width = grid.clientWidth;
    if (width < 1) return;

    const count = columnCount(width);
    const colWidth = (width - GAP * (count - 1)) / count;
    const heights = new Array<number>(count).fill(0);
    const byKey = new Map<string, HTMLElement>();

    Array.from(grid.children).forEach((child) => {
      const element = child as HTMLElement;
      if (element.dataset.key) byKey.set(element.dataset.key, element);
    });

    const shortestColumn = () => {
      let column = 0;
      for (let index = 1; index < count; index += 1) {
        if (heights[index] < heights[column]) column = index;
      }
      return column;
    };

    sections.forEach((section, sectionIndex) => {
      const caption = byKey.get(`caption:${section.id}`);
      if (!caption) return;

      caption.style.width = `${width}px`;
      caption.style.height = "auto";

      if (sectionIndex === 0) {
        caption.style.transform = "translate(0px, 0px)";
        heights.fill(caption.offsetHeight + GAP);
      } else {
        const floor = Math.max(...heights);
        const captionY = floor + SECTION_SPACE_BEFORE;
        caption.style.transform = `translate(0px, ${captionY}px)`;
        heights.fill(captionY + caption.offsetHeight + GAP);
      }

      section.images.forEach((image) => {
        const item = byKey.get(image.url);
        if (!item) return;

        const fromMarkup = Number(item.dataset.ratio);
        let ratio = fromMarkup > 0 ? fromMarkup : ratiosRef.current.get(image.url);
        const media = item.querySelector("img, video");
        const measured = media ? mediaRatio(media) : undefined;
        if (!ratio && measured) {
          ratio = measured;
          ratiosRef.current.set(image.url, ratio);
        }

        const imageColumn = shortestColumn();
        const height = colWidth * (ratio || 1);
        const imageX = imageColumn * (colWidth + GAP);
        const imageY = heights[imageColumn];
        item.style.width = `${colWidth}px`;
        item.style.height = `${height}px`;
        item.style.transform = `translate(${imageX}px, ${imageY}px)`;
        heights[imageColumn] = imageY + height + GAP;
      });
    });

    grid.style.height = `${Math.max(0, ...heights)}px`;
  }, [sections]);

  useLayoutEffect(() => {
    layout();
    const grid = gridRef.current;
    if (!grid) return;

    let lastWidth = grid.clientWidth;
    const observer = new ResizeObserver(() => {
      const nextWidth = grid.clientWidth;
      if (Math.abs(nextWidth - lastWidth) < 1) return;
      lastWidth = nextWidth;
      layout();
    });
    observer.observe(grid);
    return () => observer.disconnect();
  }, [layout]);

  return (
    <div ref={gridRef} className="relative">
      {sections.map((section) => (
        <h2
          key={section.id}
          id={section.id}
          data-key={`caption:${section.id}`}
          className="absolute left-0 top-0 m-0 scroll-mt-28 text-left text-sm font-normal leading-snug text-sky-950/45 dark:text-sky-100/40"
        >
          {section.caption}
        </h2>
      ))}
      {sections.flatMap((section) =>
        section.images.map((image, index) => (
          <GalleryImage
            key={image.url}
            image={image}
            label={section.label}
            index={index}
            eager={index < 4}
            onLoad={layout}
          />
        ))
      )}
    </div>
  );
}

function mediaRatio(media: Element) {
  if (media instanceof HTMLImageElement && media.naturalWidth > 0) {
    return media.naturalHeight / media.naturalWidth;
  }
  if (media instanceof HTMLVideoElement && media.videoWidth > 0) {
    return media.videoHeight / media.videoWidth;
  }
  return undefined;
}

function GalleryImage({
  image,
  label,
  index,
  eager,
  onLoad,
}: {
  image: GalleryAsset;
  label: string;
  index: number;
  eager: boolean;
  onLoad: () => void;
}) {
  return (
    <div
      data-key={image.url}
      data-ratio={image.width && image.height ? image.height / image.width : undefined}
      className="absolute left-0 top-0"
    >
      {image.kind === "video" ? (
        <video
          src={image.url}
          aria-label={`${label} ${index + 1}`}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          onLoadedMetadata={onLoad}
          onContextMenu={(event) => event.preventDefault()}
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={image.url}
          alt={`${label} ${index + 1}`}
          loading={eager ? "eager" : "lazy"}
          draggable={false}
          onLoad={onLoad}
          onContextMenu={(event) => event.preventDefault()}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
