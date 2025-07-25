import Image from 'next/image'

import View1 from '@/assets/home/view/view1.png'
import View2 from '@/assets/home/view/view2.png'
import View3 from '@/assets/home/view/view3.png'
import View4 from '@/assets/home/view/view4.png'

const View = () => {
	return (
		<section className='containers bg-black flex gap-6 min-[1440px]:justify-center max-[968px]:gap-2 snap-x overflow-x-auto no-scrollbar'>
			<div className='relative mb-10 min-w-[310px] h-[380px] max-[330px]:min-w-[280px] snap-center'>
				<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
				<Image src={View1} alt='...' className='size-full' />
				<aside className='absolute left-6 right-6 bottom-10 text-center'>
					<h2 className='uppercase text-[20px] text-white mb-6'>Biking</h2>
					<p className='text-white'>
						From downhill to endurance trough trailing find the oerfect fitment
						for your needs
					</p>
				</aside>
			</div>
			<div className='relative mb-10 min-w-[310px] h-[380px] max-[330px]:min-w-[280px] snap-center'>
				<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
				<Image src={View2} alt='...' className='size-full' />
				<aside className='absolute left-6 right-6 bottom-10 text-center'>
					<h2 className='uppercase text-[20px] text-white mb-6'>Skiing</h2>
					<p className='text-white'>
						From alpine ski to freeriding here a selection of our products made
						for every condition
					</p>
				</aside>
			</div>
			<div className='relative mb-10 min-w-[310px] h-[380px] max-[330px]:min-w-[280px] snap-center'>
				<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
				<Image src={View3} alt='...' className='size-full' />
				<aside className='absolute left-6 right-6 bottom-10 text-center'>
					<h2 className='uppercase text-[20px] text-white mb-6'>Sports</h2>
					<p className='text-white'>
						Running, climbing or everithing that makes you move and where you
						need eye protection
					</p>
				</aside>
			</div>
			<div className='relative mb-10 min-w-[310px] h-[380px] max-[330px]:min-w-[280px] snap-center'>
				<div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent from-54.69% to-[rgba(0,0,0,0.4)] to-100%'></div>
				<Image src={View4} alt='...' className='size-full' />
				<aside className='absolute left-6 right-6 bottom-10 text-center'>
					<h2 className='uppercase text-[20px] text-white mb-6'>Summer</h2>
					<p className='text-white'>
						From Austria to the Caribbean, cause sometimes you just want to get
						lazy, sunny, and hazy.
					</p>
				</aside>
			</div>
		</section>
	)
}

export default View
