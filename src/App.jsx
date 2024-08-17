import React from 'react'
import { CategoryCard, Container, Pagination, PostCard, ProfileCard } from './Components'
function App() {
  return (
    <Container >
      <div className="space-y-8">
        <div className=' flex flex-row space-x-4'>
          <CategoryCard bg="https://imgs.search.brave.com/mZQQjqnDTqOhEzZ7H1j1xl46RY9vqppvM1xD5zcIYTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oYW1h/cml3ZWIuY29tL3By/b2ZpbGVzL2ltYWdl/cy9tb3JlLzY5XzMu/anBn" />
          <CategoryCard bg="https://imgs.search.brave.com/jV_HpB2lzudHmD4uwjUkMuW7OWZJY7miXAHfo87DNVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG93/Yml6cGsuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L2FyZWVrYV9oYXFf/MjJhYS5qcGc" borderWidth="0" />
        </div>
        <div className=' grid grid-cols-3 gap-x-4'>
          <CategoryCard bg="https://imgs.search.brave.com/-GMfsIQuN1wKSbmuW20wgo_Fun-W3AQE14acuNiDT2c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oYW1h/cml3ZWIuY29tL3By/b2ZpbGVzL2ltYWdl/cy9tb3JlLzY5XzIu/anBn" />
          <CategoryCard bg="https://imgs.search.brave.com/mZQQjqnDTqOhEzZ7H1j1xl46RY9vqppvM1xD5zcIYTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oYW1h/cml3ZWIuY29tL3By/b2ZpbGVzL2ltYWdl/cy9tb3JlLzY5XzMu/anBn" />
          <CategoryCard bg="https://imgs.search.brave.com/jV_HpB2lzudHmD4uwjUkMuW7OWZJY7miXAHfo87DNVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG93/Yml6cGsuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L2FyZWVrYV9oYXFf/MjJhYS5qcGc" />
        </div>
      </div>
      <div className='flex flex-row justify-between space-x-4 space-y-4'>
        <div className='space-y-6 mt-8 w-2/3'>
          <PostCard bgColor="blue" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="red" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="yellow" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="green" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <PostCard bgColor="pink" timeDuration={"12 Hours ago"} blogTitle="10 Interview Questions Every JavaScript Developer Should Know" blogParagrahp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis, voluptas cumque iste nostrum a! Autem doloremque quas inventore, quaerat neque, cumque accusamus commodi nesciunt reprehenderit rerum vero asperiores nobis." categoryColor="blue" />
          <Pagination />
        </div>
        <div className='w-1/3'>
          <ProfileCard />
        </div>
      </div>
    </Container>
  )
}

export default App