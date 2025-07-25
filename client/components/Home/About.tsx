'use client'

import Image from 'next/image'

import Glasses1 from '@/assets/home/carousel/glasses1.png'
import Glasses2 from '@/assets/home/carousel/glasses2.jpg'
import LinkButton from '@/ui/button/LinkButton'
import { useCallback, useEffect, useState } from 'react'

const About = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [Glasses1, Glasses2]

	const nextSlide = useCallback(() => {
		setCurrentSlide(prev => (prev + 1) % slides.length)
	}, [slides.length])

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000)
		return () => clearInterval(interval)
	}, [nextSlide])

	return (
		<section className='relative h-[580px] max-[1440px]:h-[520px] overflow-hidden max-[1090px]:h-[420px] max-[854px]:h-[320px] max-[768px]:h-[220px] max-[480px]:h-[180px]'>
			{slides.map((slide, index) => (
				<Image
					key={index}
					src={slide}
					alt={`Slide ${index + 1}`}
					className={`absolute top-0 left-0 size-full z-[-1] transition-opacity duration-1000 ${
						index === currentSlide ? 'opacity-100' : 'opacity-0'
					}`}
					priority={index === 0}
				/>
			))}
			<div className='ml-[10%] max-[480px]:ml-[16px] mt-[118px] max-[768px]:mt-[18px] max-[1090px]:mt-[58px] max-[854px]:mt-[38px] max-[480px]:mt-[8px]'>
				<p className='uppercase bg-[#009AFF] text-white px-2 py-1 text-[15px] inline max-[768px]:text-[12px]'>
					The new
				</p>
				<h2 className='uppercase text-[40px] max-[768px]:text-[24px] text-white'>
					Force Evo
				</h2>
				<p className='text-[#009AFF] max-[768px]:text-[14px]'>
					For the toughtest situation
				</p>
				<h3 className='font-bold text-2xl text-white my-5 max-[768px]:my-2 max-[768px]:text-[18px]'>
					79,99 €
				</h3>
				<LinkButton link='#'>Buy now</LinkButton>
			</div>
		</section>
	)
}

export default About
