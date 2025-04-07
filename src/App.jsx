import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMarked, setBookMarked] =useState([])
  const [readingCount,setReadingCount] = useState(0)
  const handleBookMark = (blog)=>{
    // console.log(blog);
    setBookMarked([...bookMarked,blog])
  }

  const handleMarkAsRead = (time,id)=>{
    // console.log(time)
    setReadingCount(readingCount+time);
    console.log(id)
    handleRemoveFromBookMark(id)
  }
// console.log(bookMarked)

const handleRemoveFromBookMark = (id)=>{
  const remainingBookMark = bookMarked.filter((mark)=>mark.id!==id);
  setBookMarked(remainingBookMark)
}
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time: {readingCount}</h1>
          <h1>BookedMark Count: {bookMarked.length}</h1>
          {
            bookMarked.map((marked,index)=><p key={index}>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
