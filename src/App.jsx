import React from 'react'
import { CategoryCard, CategoryListCard, Container, LastProjectCard, Pagination, PostCard, ProfileCard, RoundedButtonHover } from './Components'
import Category1 from "./assets/category1.webp"
import Category2 from "./assets/Category2.webp"
import Category3 from "./assets/Category3.webp"
import Category4 from "./assets/Category4.webp"
import Category5 from "./assets/Category5.webp"
function App() {
  return (
    <Container >
      <div className="lg:space-y-8">
        <div className=' flex flex-col space-y-2 lg:flex-row  lg:space-x-4 '>
          <CategoryCard bg={Category1} />
          <CategoryCard bg={Category2} />
        </div>
        <div className=' grid  space-y-2 mt-4 lg:grid-cols-3 lg:gap-x-4 '>
          <CategoryCard bg={Category3} />
          <CategoryCard bg={Category4} />
          <CategoryCard bg={Category5} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between lg:space-x-4 lg:space-y-4'>
        <div className='space-y-6 mt-8 lg:w-2/3 w-full'>
          <PostCard bgColor="bg-blue-500" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="bg-red-500" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="bg-yellow-500" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="bg-green-500" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="bg-pink-500" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <Pagination />
        </div>
        <div className='lg:w-1/3 w-full'>
          <ProfileCard />
          {/* category card */}
          <div className='w-full min-h-96  mt-4 shadow-md'>
            <div className='px-8 py-6 bg-LightBg/50'>
              <h1 className='text-xl text-Gray'>Categories</h1>
            </div>
            <CategoryListCard title="Css" />
            <CategoryListCard title="Html" />
            <CategoryListCard title="JavaScript" />
            <CategoryListCard title="Php" />
          </div>
          {/* last project card */}
          <div className='w-full min-h-80  mt-4 shadow-md'>
            <div className='px-8 py-6 bg-LightBg/50'>
              <h1 className='text-xl text-Gray'>Last Project</h1>
            </div>
            <LastProjectCard title="Microsoft TypeScript" description="TypeScript starts from the same syntax and semantics that millions of JavaScript developers know..." slug="" timeDuration="January 18, 2022" />
          </div>
          {/* last project card */}
          <div className='w-full min-h-40    mt-4 shadow-md'>
            <div className='px-8 py-6 bg-LightBg/50'>
              <h1 className='text-xl text-Gray'>Tags</h1>
            </div>
            <div className='px-8 py-4 mt-4 space-x-4 space-y-2'>
              <RoundedButtonHover label="html" textColor="Gray" />
              <RoundedButtonHover label="css" textColor="Gray" />
              <RoundedButtonHover label="javscript" textColor="Gray" />
              <RoundedButtonHover label="php" textColor="Gray" />
              <RoundedButtonHover label="tawilind css" textColor="Gray" />
              <RoundedButtonHover label="BootStrap" textColor="Gray" />
              <RoundedButtonHover label="Figma" textColor="Gray" />
              <RoundedButtonHover label="Mern Stack" textColor="Gray" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default App