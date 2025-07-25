'use client'

import ArrowBottomSVG from '@/assets/arrow_bottom.svg'
import FacebookSVG from '@/assets/facebook.svg'
import Logo from '@/assets/footer_logo.png'
import InstagramSVG from '@/assets/instagram.svg'
import Mastercard from '@/assets/mastercard.png'
import Secure from '@/assets/secure.png'
import Visa from '@/assets/visa.png'
import YoutubeSVG from '@/assets/youtube.svg'
import FooterLink from '@/ui/text/FooterLink'
import FooterTitle from '@/ui/text/FooterTitle'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {
	const [story, setStory] = useState<boolean>(false)
	const [support, setSupport] = useState<boolean>(false)

	return (
		<footer className='px-10 max-[930px]:px-[16px] max-[514px]:px-0 bg-[#0A0A0A] mt-[2px]'>
			<section className='py-10 flex flex-wrap grid-cols-3 gap-15 max-[1020px]:gap-8 max-[756px]:grid max-[514px]:block max-[514px]:py-0'>
				<div className='max-[514px]:border-b-1 border-white/10 max-[514px]:p-4'>
					<div
						className='max-[514px]:flex items-center justify-between max-[514px]:w-full cursor-pointer'
						onClick={() => setStory(!story)}
					>
						<FooterTitle select>Our Story</FooterTitle>
						<Image
							src={ArrowBottomSVG}
							alt='...'
							className={`w-5 h-[22px] min-[514px]:hidden duration-300 transition-all ${
								story && 'rotate-180'
							}`}
						/>
					</div>
					<nav
						className={`flex flex-col overflow-hidden transition-all duration-300 ${
							story ? 'max-[514px]:h-[86px] mt-3' : 'max-[514px]:h-0'
						}`}
					>
						<FooterLink>About us</FooterLink>
						<FooterLink>Contact</FooterLink>
						<FooterLink>Jobs</FooterLink>
						<FooterLink>Sponsoring</FooterLink>
					</nav>
				</div>
				<div className='max-[514px]:border-b-1 border-white/10 max-[514px]:p-4'>
					<div
						className='max-[514px]:flex items-center justify-between max-[514px]:w-full cursor-pointer'
						onClick={() => setSupport(!support)}
					>
						<FooterTitle select>Support</FooterTitle>
						<Image
							src={ArrowBottomSVG}
							alt='...'
							className={`w-5 h-[22px] min-[514px]:hidden duration-300 transition-all ${
								support && 'rotate-180'
							}`}
						/>
					</div>
					<nav
						className={`flex flex-col overflow-hidden transition-all duration-300 ${
							support ? 'max-[514px]:h-[173px] mt-3' : 'max-[514px]:h-0'
						}`}
					>
						<Link
							href='#'
							className='bg-clip-text text-transparent font-medium max-[866px]:text-[14px]'
							style={{
								backgroundImage:
									'linear-gradient(90deg, #E1A4E6 0%, #249DFD 50.78%, #A7EF50 100%)',
							}}
						>
							Get support {`>`}
						</Link>
						<FooterLink>FAQ</FooterLink>
						<FooterLink>Shipping Policy</FooterLink>
						<FooterLink>Refund Policy</FooterLink>
						<FooterLink>Return</FooterLink>
						<FooterLink>Trade-In</FooterLink>
						<FooterLink>Student discount</FooterLink>
						<FooterLink>Legal notice</FooterLink>
					</nav>
				</div>
				<div className='max-[514px]:py-6 max-[514px]:px-4 max-[514px]:border-b-1 border-white/10'>
					<FooterTitle>Social</FooterTitle>
					<nav className='flex gap-2'>
						<Link href='#'>
							<Image
								src={YoutubeSVG}
								alt='...'
								className='size-6 max-[514px]:size-8'
							/>
						</Link>
						<Link href='#'>
							<Image
								src={FacebookSVG}
								alt='...'
								className='size-6 max-[514px]:size-8'
							/>
						</Link>
						<Link href='#'>
							<Image
								src={InstagramSVG}
								alt='...'
								className='size-6 max-[514px]:size-8'
							/>
						</Link>
					</nav>
				</div>
				<div className='max-[514px]:py-6 max-[514px]:px-4 max-[514px]:border-b-1 border-white/10'>
					<FooterTitle>Our payment methods</FooterTitle>
					<div className='flex gap-2'>
						<Image
							src={Visa}
							alt='...'
							className='size-15 max-[866px]:size-12 -mt-2'
						/>
						<Image
							src={Mastercard}
							alt='...'
							className='size-15 max-[866px]:size-12 -mt-2'
						/>
					</div>
				</div>
				<div className='max-[514px]:py-6 max-[514px]:px-4'>
					<FooterTitle>Secure shopping</FooterTitle>
					<Image
						src={Secure}
						alt='...'
						className='w-[175px] h-30 max-[866px]:w-[145px] max-[866px]:h-25'
					/>
				</div>
			</section>
			<section className='border-t-1 border-solid border-white/10 pt-[15px] pb-10 max-[554px]:px-4'>
				<div className='flex justify-between items-center gap-4 mb-[15px] max-[554px]:flex-col'>
					<Link href='/'>
						<Image src={Logo} alt='...' className='w-[192px] h-[30px] max-[554px]:w-[151px] max-[554px]:h-[26px]' />
					</Link>
					<nav className='flex gap-[35px] max-[596px]:gap-4 flex-wrap max-[342px]:gap-y-0 max-[342px]:justify-center'>
						<h2 className='text-[14px] text-[#E0E0E0]'>Privacy Policy</h2>
						<h2 className='text-[14px] text-[#E0E0E0]'>Cookie Settings</h2>
						<h2 className='text-[14px] text-[#E0E0E0]'>Terms of service</h2>
					</nav>
				</div>
				<h2 className='text-[#E0E0E0] text-[14px] max-[554px]:w-4/5 max-[554px]:mx-auto max-[554px]:text-center max-[360px]:w-full'>
					© 2025 NAKED Optics - All Rights Reserved. | *All prices incl. VAT
					plus shipping costs
				</h2>
			</section>
		</footer>
	)
}

export default Footer
