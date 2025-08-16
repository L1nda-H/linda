"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Slider from "./slider";

import { characterdesign, graphictees, blender } from "@/lib/galleryimgs";

export default function Gallery() {
  const { ref } = useSectionInView("Gallery", 0.25);

  return (
    <section id="gallery" ref={ref} className="scroll-mt-16 text-center">
      <SectionHeading>Gallery</SectionHeading>
      <p className=" font-normal pb-8 w-[42rem] mx-auto">
        Besides programming, I sometimes also enjoy creating and drawing! Here
        are some works I've made for classes, for others, and for fun throughout
        the past years.
      </p>

      <Slider
        category={characterdesign}
        caption="PMA 3614: Creative Character Design."
      />
      <Slider
        category={blender}
        caption="Blender Projects from Normal Modeling to Photogrammetry"
      />
      <Slider
        category={graphictees}
        caption="TShirt Graphics Designed for Various Clubs."
      />
    </section>
  );
}
