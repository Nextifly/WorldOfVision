'use client'

import { useEffect, useState } from 'react'

import Logo from '@/assets/logo_mobile.svg'
import Cookie from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'

const Cookies = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	useEffect(() => {
		if (!Cookie.get('accept')) {
			const timeout = setTimeout(() => {
				setIsActive(true)
			}, 10000)
			return () => clearTimeout(timeout)
		}
	}, [])

	useEffect(() => {
		isActive
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto')
	}, [isActive])

	const AcceptCookies = () => {
		Cookie.set('accept', 'true', { expires: 30 })
		setIsActive(false)
	}

	return (
		<section
			className={`backdrop-blur-sm bg-[#0A0A0ACC] size-full fixed top-0 left-0 flex items-center justify-center containers transition-opacity duration-300 ${
				!isActive && 'hidden'
			}`}
		>
			<aside className='w-[350px] p-4 rounded-[6px] bg-white transition-opacity duration-300'>
				<div className='flex gap-2 mb-6'>
					<Image src={Logo} alt='...' className='size-[31px]' />
					<h2 className='text-2xl'>Cookies</h2>
				</div>
				<p className='text-[14px] mb-6'>
					Noi usiamo Cookies . Molti sono necessari per il funzionamento del
					sito Web e delle sue funzioni, altri per scopi statistici o di
					marketing. Con la decisione "Solo essenziale Cookies accetta"
					rispetteremo la tua privacy e nessuna Cookies set che non sono
					necessari per il funzionamento del sito.
				</p>
				<ul className='flex items-center justify-center gap-x-8 gap-y-1 flex-wrap list-disc mb-6'>
					<li>Essenziali</li>
					<li>Statistici</li>
					<li>Marketing</li>
				</ul>
				<div className='flex flex-col gap-2 items-center mb-8'>
					<button
						className='w-49 h-[45px] border-2 border-[#0A0A0A] rounded-[8px] cursor-pointer'
						onClick={() => AcceptCookies()}
					>
						Accetta tutti i cookies
					</button>
					<Link href='#' className='font-medium underline text-[#0A0A0A]'>
						Impostazioni dei singoli cookie
					</Link>
				</div>
				<h3 className='text-[#888888] text-[12px] text-center mb-6'>
					Cookie legali GDPR
				</h3>
				<h2 className='text-[12px] text-[#0A0A0A] text-center'>
					Informativa sulla privacy | Contatto | Impronta
				</h2>
			</aside>
		</section>
	)
}

export default Cookies
