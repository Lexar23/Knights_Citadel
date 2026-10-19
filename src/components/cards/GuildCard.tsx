import ISectionCard from '@/Interfaces/ISectionCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GuildCard({ name, img, siglas, url }: ISectionCard) {
  return (
    <Link href={url} className='group panel relative flex flex-col items-center gap-3 p-4 hover:border-circuit-border'>
      <span className='relative h-32 w-full'>
        <Image src={img ?? `/Assets/enemies/silhouette/${siglas}.webp`} alt={name} fill sizes='240px' className='object-contain transition-transform duration-300 group-hover:scale-105' />
      </span>
      <span className='text-[14px] font-medium text-phosphor-white'>{name}</span>
    </Link>
  )
}
