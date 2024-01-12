import at from '@/public/characterdesign/agingtrio.png'
import mp1 from '@/public/characterdesign/musicproject1.png'
import mp2 from '@/public/characterdesign/musicproject2.png'
import mp3 from '@/public/characterdesign/musicproject3.png'
import pi from '@/public/characterdesign/propinspired.png'
import tgr from '@/public/characterdesign/thegreatrace.png'
import h from '@/public/characterdesign/habitare.png'
import v from '@/public/characterdesign/venusian.png'

export const characterdesign = [
  {
    url: tgr,
    alt: "thegreatrace.png",
  },
  {
    url: pi,
    alt: "propinspired.png",
  },
  {
    url: at,
    alt: "agingtrio.png",
  },
  {
    url: v,
    alt: "venusian.png",
  },
  {
    url: h,
    alt: "habitare.png",
  },
  {
    url: mp1,
    alt: "musicproject1.png",
  },
  {
    url: mp2,
    alt: "musicproject2.png",
  },
  {
    url: mp3,
    alt: "musicproject3.png",
  },
] as const;
