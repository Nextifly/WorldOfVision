import Image, { StaticImageData } from 'next/image'

interface IPrevProduct {
    prevFon: StaticImageData;
    prevGlasses: StaticImageData;
    title: string;
    name: string;
    category: string;
    desc: string;
    price: number;
    black?: boolean;
}

const PrevProductUI = ({prevFon, prevGlasses, title, name, category, desc, price, black}: IPrevProduct) => {
  return (
    <div className='max-w-110 min-w-80 w-full snap-center'> 
            <div className='relative h-[310px]'>
                <Image src={prevFon} alt='...' className='absolute top-0 left-0 size-full z-[-1]' />
                <h2 className={`uppercase text-center font-medium text-[18px] pt-5 ${black ? "text-[#0A0A0A]" : "text-white"}`}>{title}</h2>
            </div>
            <div>
                <Image src={prevGlasses} alt='...' className='mx-auto w-[274px] h-[143px] mt-[-72px] mb-4' />
                <div className="py-[10px] px-[30px]">
                    <h6 className='text-[13px] text-[#888888] mb-1'>{category}</h6>
                    <h2 className='text-[#0A0A0A] text-2xl uppercase mb-1'>{name}</h2>
                    <p className='text-[14px] text-[#888888] mb-6'>{desc}</p>
                    <b className="text-2xl font-bold text-[#OAOAOA] block text-end">{price.toString().replace('.', ',')} €</b>
                </div>
            </div>
        </div>
  )
}

export default PrevProductUI