"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Slider from "./slider";

import { characterdesign, graphictees, blender } from "@/lib/galleryimgs";

export default function Gallery() {
  return (
    <section id="gallery" className="text-center">
      <SectionHeading>Gallery</SectionHeading>
      <p className="font-normal pb-8 w-full max-w-[42rem] mx-auto">
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
        caption="Blender"
      />
      <Slider
        category={graphictees}
        caption="TShirt Designs."
      />
    </section>
  );
}
