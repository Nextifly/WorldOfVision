import CategoryUI from '@/ui/element/CategoryUI'

import Category1 from '@/assets/home/categories/category1.png'
import Category2 from '@/assets/home/categories/category2.png'
import Category3 from '@/assets/home/categories/category3.png'
import Category4 from '@/assets/home/categories/category4.png'
import Category5 from '@/assets/home/categories/category5.png'
import Category6 from '@/assets/home/categories/category6.png'
import Category7 from '@/assets/home/categories/category7.png'

const Categories = () => {
	return (
		<div className='w-full bg-white py-4'>
			<section className='containers flex items-center justify-center gap-8 max-[822px]:overflow-x-scroll max-[822px]:justify-start max-[822px]:snap-x no-scrollbar'>
				<CategoryUI link={'#'} img={Category1}>
					Sun glasses
				</CategoryUI>
				<CategoryUI link={'#'} img={Category2}>
					Sport glasses
				</CategoryUI>
				<CategoryUI link={'#'} img={Category3}>
					Bycicle glasses
				</CategoryUI>
				<CategoryUI link={'#'} img={Category4}>
					Bycicle glasses
				</CategoryUI>
				<CategoryUI link={'#'} img={Category5}>
					Bike Goggles
				</CategoryUI>
				<CategoryUI link={'#'} img={Category6}>
					Lenses
				</CategoryUI>
				<CategoryUI link={'#'} img={Category7}>
					Accesories
				</CategoryUI>
			</section>
		</div>
	)
}

export default Categories
