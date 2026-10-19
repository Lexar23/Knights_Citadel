import Image from 'next/image'
import React from 'react'
import ISectionCard from '@/Interfaces/ISectionCard'
import Link from 'next/link'

export default function SectionCard({ name, img, url }: ISectionCard) {
  return (
    <Link href={url} className='group panel relative block h-56 overflow-hidden hover:border-circuit-border'>
      {img && (
        <Image src={img} alt={name} fill sizes='(max-width: 768px) 100vw, 640px' className='object-cover opacity-60 grayscale-[35%]' />
      )}
      <div className='img-veil absolute inset-0' />
      <h2 className='absolute bottom-6 left-8 text-heading-sm'>{name}</h2>
    </Link>
  )
}
