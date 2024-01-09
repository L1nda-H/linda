import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="text-5xl font-medium capitalize my-8 pt-8 text-center">
      {children}
    </h1>
  )
}
