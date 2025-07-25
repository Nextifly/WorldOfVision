'use client'

import Image from 'next/image'
import Link from 'next/link'

import BasketSVG from '@/assets/basket.svg'
import Logo from '@/assets/logo.png'
import LogoMob from '@/assets/logo_mobile.svg'
import ProfileSVG from '@/assets/profile.svg'
import SearchSVG from '@/assets/search.svg'

import HeaderButton from '@/ui/button/HeaderButton'
import HeaderLink from '@/ui/text/HeaderLink'
import { useState } from 'react'

const Header = () => {
	const [menu, setMenu] = useState<boolean>(false)

	return (
		<header>
			<section className='h-8 bg-[#0A0A0A] flex items-center justify-center'>
				<h2 className='uppercase text-[13px] text-white'>{`< Free shipping over 100€ order >`}</h2>
			</section>
			<section className='h-[89px] flex items-center containers max-[768px]:h-[55px]'>
				<Link href='/' className='max-[768px]:hidden'>
					<Image
						src={Logo}
						alt='...'
						className='min-w-[232px] w-[232px] h-10 cursor-pointer max-[872px]:min-w-[180px] max-[872px]:w-[180px] max-[872px]:h-8'
					/>
				</Link>
				<div
					className='cursor-pointer min-[768px]:hidden'
					onClick={() => setMenu(!menu)}
				>
					<span
						className={`bg-black w-[20px] border-[1px] rounded-2xl duration-300 ${
							menu && 'rotate-z-45 translate-y-[2.5px]'
						} block`}
					></span>
					<span
						className={`bg-black w-[20px] border-[1px] rounded-2xl ${
							menu && 'hidden'
						} block mt-[4px]`}
					></span>
					<span
						className={`bg-black w-[20px] border-[1px] rounded-2xl duration-300 ${
							menu && 'rotate-z-[-45deg] translate-y-[-3px]'
						} block mt-[4px]`}
					></span>
				</div>
				<nav className='flex items-center justify-center gap-13 max-[1090px]:gap-5 max-[768px]:hidden w-full'>
					<HeaderLink>Optics</HeaderLink>
					<HeaderLink>Clothing</HeaderLink>
					<HeaderLink>Outlet</HeaderLink>
					<HeaderLink>Naked Heroes</HeaderLink>
					<HeaderLink>Stories</HeaderLink>
				</nav>
				<Link href='/' className='w-full flex justify-center min-[768px]:hidden'>
					<Image
						src={LogoMob}
						alt='...'
						className={`min-[768px]:hidden size-[35px] ml-[35px]`}
					/>
				</Link>
				<nav className='flex gap-2 items-center justify-center'>
					<HeaderButton img={SearchSVG} />
					<HeaderButton img={ProfileSVG} />
					<HeaderButton img={BasketSVG} count={0} />
				</nav>
			</section>
			<section
				className={`size-full fixed top-[87px] left-0 ${
					menu ? 'bg-[#0A0A0ACC] z-100 backdrop-blur-sm visible' : 'bg-transparent invisible'
				} min-[768px]:hidden`}
			>
				<div
					className={`h-full w-[50%] bg-white duration-300 transition-all ${
						!menu && 'translate-x-[-500px]'
					}`}
				>
					<Image
						src={Logo}
						alt='...'
						className='w-[80%] h-auto mx-3'
					/>
					<nav className='pl-3 flex flex-col gap-4 mt-5'>
						<HeaderLink>Optics</HeaderLink>
						<HeaderLink>Clothing</HeaderLink>
						<HeaderLink>Outlet</HeaderLink>
						<HeaderLink>Naked Heroes</HeaderLink>
						<HeaderLink>Stories</HeaderLink>
					</nav>
				</div>
			</section>
		</header>
	)
}

export default Header
