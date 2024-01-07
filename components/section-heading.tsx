import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="text-3xl font-medium capitalize mt-8 mb-8 text-center">
      {children}
    </h1>
  )
}
