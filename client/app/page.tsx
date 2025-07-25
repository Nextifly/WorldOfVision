import About from '@/components/Home/About'
import Categories from '@/components/Home/Categories'
import EmailForm from '@/components/Home/EmailForm'
import Featured from '@/components/Home/Featured'
import PrevProduct from '@/components/Home/PrevProduct'
import Size from '@/components/Home/Size'
import Stories from '@/components/Home/Stories'
import View from '@/components/Home/View'

const Page = () => {
  
  return (
    <>
     <Categories />
     <About />
     <PrevProduct />
     <Size />
     <Stories />
     <View />
     <Featured />
     <EmailForm />
    </>
  )
}

export default Page