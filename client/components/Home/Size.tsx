import LinkButton from '@/ui/button/LinkButton'
import Image from 'next/image'

import SizeFon from '@/assets/home/size_fon.png'
import SizeGlasses from '@/assets/home/size_glasses.png'

const Size = () => {
	return (
		<section className='containers mx-10 relative h-[500px] max-[968px]:mx-0 max-[968px]:h-auto'>
			<Image
				src={SizeFon}
				alt='...'
				className='object-cover size-full absolute top-0 left-0 z-[-1]'
			/>
			<div className='pl-[5%] pr-4 flex justify-between items-center gap-5 h-full max-[1248px]:pl-[2%] max-[1182px]:pl-3 max-[1182px]:pr-3 max-[968px]:flex-col max-[968px]:items-start max-[968px]:gap-0 max-[968px]:px-0'>
				<aside className='max-[1182px]:min-w-[400px] max-[968px]:max-w-full max-[968px]:mt-6 max-[526px]:min-w-0'>
					<h3 className='text-[#888888]'>Falcon & Hawk</h3>
					<h2 className='text-[40px] text-[#0A0A0A] uppercase max-[1182px]:text-3xl max-[1182px]:my-2'>
						The size matters
					</h2>
					<p className='text-[#888888] leading-5 min-[1182px]:max-w-[500px] min-[968px]:max-w-[350px] min-[526px]:max-w-[500px]'>
						We developed the falcon for big faces and the hawk for smaller ones
						so it can fit your needs for the best performance without compromise
					</p>
					<div className='mt-8 flex items-center gap-15 max-[1182px]:flex-col max-[1182px]:items-start max-[1182px]:gap-3 max-[968px]:flex-row max-[360px]:flex-col'>
						<div>
							<h2 className='text-[#888888] mb-[7px]'>Size L</h2>
							<LinkButton link='#'>Shop falcon</LinkButton>
						</div>
						<div>
							<h2 className='text-[#888888] mb-[7px]'>Size S</h2>
							<LinkButton link='#'>Shop hawk</LinkButton>
						</div>
					</div>
				</aside>
				<Image
					src={SizeGlasses}
					alt='...'
					className='max-w-150 h-auto w-full max-[1182px]:max-w-140'
				/>
			</div>
		</section>
	)
}

export default Size
