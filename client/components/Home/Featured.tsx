import Image from 'next/image'

import Featured1 from '@/assets/home/featured/featured1.png'
import Featured2 from '@/assets/home/featured/featured2.png'
import Featured3 from '@/assets/home/featured/featured3.png'
import Featured4 from '@/assets/home/featured/featured4.png'
import Featured5 from '@/assets/home/featured/featured5.png'
import Featured6 from '@/assets/home/featured/featured6.png'

const Featured = () => {
	return (
		<section className='containers my-20'>
			<h2 className='font-medium text-2xl uppercase text-center mb-[13px]'>
				Featured on
			</h2>
			<div className='w-full flex justify-center gap-10 flex-wrap max-[668px]:gap-6'>
				<Image
					src={Featured1}
					alt='...'
					className='w-[180px] h-[140px] max-[668px]:w-30 max-[668px]:h-[100px]'
				/>
				<Image
					src={Featured2}
					alt='...'
					className='w-[180px] h-[140px] max-[668px]:w-30 max-[668px]:h-[100px]'
				/>
				<Image
					src={Featured3}
					alt='...'
					className='w-[180px] h-[140px] max-[668px]:w-30 max-[668px]:h-[100px]'
				/>
				<Image
					src={Featured4}
					alt='...'
					className='w-[180px] h-[140px] max-[668px]:w-30 max-[668px]:h-[100px]'
				/>
				<Image
					src={Featured5}
					alt='...'
					className='w-[180px] h-[140px] max-[668px]:w-30 max-[668px]:h-[100px]'
				/>
				<Image
					src={Featured6}
					alt='...'
					className='w-[180px] h-[140px] max-[668px]:w-30 max-[668px]:h-[100px]'
				/>
			</div>
		</section>
	)
}

export default Featured
