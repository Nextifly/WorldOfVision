import Image from 'next/image'
import Link from 'next/link'

import Stories1 from '@/assets/home/stories/stories1.png'
import Stories2 from '@/assets/home/stories/stories2.png'
import Stories3 from '@/assets/home/stories/stories3.png'
import Stories4 from '@/assets/home/stories/stories4.png'
import StoriesFon from '@/assets/home/stories_fon.png'

const Stories = () => {
	return (
		<section className='mt-12 relative'>
			<div className='flex justify-between items-center mb-10 containers'>
				<h2 className='uppercase text-[40px] max-[462px]:text-3xl max-[360px]:text-2xl'>
					Stories
				</h2>
				<Link
					href='#'
					className='text-[21px] max-[462px]:text-[18px] max-[360px]:text-[14px] text-[#0A0A0A]'
				>{`Discover all our stories >`}</Link>
			</div>
			<div className='flex gap-6 overflow-x-auto min-[1620px]:justify-center no-scrollbar max-[968px]:gap-2 containers snap-x'>
				<div className='relative snap-center'>
					<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
					<Image
						src={Stories1}
						alt='...'
						className='size-full object-cover rounded-[6px] min-w-[368px] h-[620px] max-[968px]:min-w-80 w-[368px] max-[968px]:w-80 max-[360px]:w-60 max-[968px]:h-120 max-[360px]:h-100 max-[360px]:min-w-60'
					/>
					<h2 className='absolute text-white text-[22px] bottom-5 left-6 right-6 max-[968px]:left-4 max-[968px]:right-4 max-[360px]:text-[18px]'>
						The perfect running training: Some advice for beginners
					</h2>
				</div>
				<div className='relative snap-center'>
					<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
					<Image
						src={Stories2}
						alt='...'
						className='size-full object-cover rounded-[6px] min-w-[368px] h-[620px] max-[968px]:min-w-80 w-[368px] max-[968px]:w-80 max-[360px]:w-60 max-[968px]:h-120 max-[360px]:h-100 max-[360px]:min-w-60'
					/>
					<h2 className='absolute text-white text-[22px] bottom-5 left-6 right-6 max-[968px]:left-4 max-[968px]:right-4 max-[360px]:text-[18px]'>
						What are the differences between the lenses?
					</h2>
				</div>
				<div className='relative snap-center'>
					<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
					<Image
						src={Stories3}
						alt='...'
						className='size-full object-cover rounded-[6px] min-w-[368px] h-[620px] max-[968px]:min-w-80 w-[368px] max-[968px]:w-80 max-[360px]:w-60 max-[968px]:h-120 max-[360px]:h-100 max-[360px]:min-w-60'
					/>
					<h2 className='absolute text-white text-[22px] bottom-5 left-6 right-6 max-[968px]:left-4 max-[968px]:right-4 max-[360px]:text-[18px]'>
						What is important in sports glasses?
					</h2>
				</div>
				<div className='relative snap-center'>
					<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
					<Image
						src={Stories4}
						alt='...'
						className='size-full object-cover rounded-[6px] min-w-[368px] h-[620px] max-[968px]:min-w-80 w-[368px] max-[968px]:w-80 max-[360px]:w-60 max-[968px]:h-120 max-[360px]:h-100 max-[360px]:min-w-60'
					/>
					<h2 className='absolute text-white text-[22px] bottom-5 left-6 right-6 max-[968px]:left-4 max-[968px]:right-4 max-[360px]:text-[18px]'>
						Back to the roots - Back in Salzburg
					</h2>
				</div>
			</div>
			<div className='mt-12 relative -z-10'>
				<div className='absolute -top-60 max-[968px]:-top-50 max-[568px]:-top-40 left-0 bg-gradient-to-b from-[#F7F7F7] from-0% via-[#ABCDD6] via-80.21% to-[rgba(171,205,214,0.03)] to-100% h-full w-full'></div>
				<Image
					src={StoriesFon}
					alt='...'
					className='h-150 w-full max-[968px]:h-100 max-[568px]:h-80'
				/>
				<div className='flex justify-center items-center absolute top-0 left-0 size-full containers'>
					<h2 className='text-center text-[60px] max-[968px]:text-5xl max-[458px]:text-[32px] text-white uppercase'>
						A solution for everyone
					</h2>
				</div>
			</div>
		</section>
	)
}

export default Stories
