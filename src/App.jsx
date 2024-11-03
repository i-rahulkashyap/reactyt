import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import { DataContext } from './context/UserContext'

const App = () => {
  const data = useContext(DataContext)
  console.log(data)
  return (
    // <div>
    //     {/* <h1>Hello</h1> */}
    //     <input className='text-black' type="text" />
    //     <Header/>
    //     <Routes>
    //       <Route path='/' element={<Home/>} />
    //       <Route path='/about' element={<About/>} />
    //       <Route path='/contact' element={<Contact/>} />
    //       <Route path='/product' element={<Product/>} />

    //     </Routes>
    // </div>
    <div>
      <h1>This is App</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
// #7
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   // const getData = () => {
//   //   console.log("Button Clicked")
//   // }

//   // const getData = () => {
//   //   const response = axios.get('https://picsum.photos/v2/list?page=2&limit=10')
//   //   console.log(response)
//   // }

//   const [data, setData] = useState([])

//   const getData = async () => {
//     console.log("first",data)
//     const response = await axios.get('https://picsum.photos/v2/list?limit=30')
//     setData(response.data)
//     console.log(data)
//   }

//   useEffect(() => {
//     getData()
//   }, [])
  
//   return (
//     <div className='p-10'>
      
//       <button onClick={getData} className='bg-teal-700 text-white font-semibold text-xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-grey text-white'>
//         {
//           data.map(function(elem,idx){
//             return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between px-7 py-6 rounded mb-3'>
//               <img className='h-80' src={elem.download_url} alt="" />
//               <h1>{elem.author}</h1>
//             </div>
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default App
// #6
// import React from 'react'
// import Ex from './components/Ex'

// const App = () => {
//   return (
//     <div>
//       <Ex user="Rahul"/>
//     </div>
//   )
// }

// export default App

// #5
// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   const users = [
//     {
//         "name": "john_doe",
//         "city": "New York",
//         "age": 28,
//         "profession": "Software Engineer",
//         "profile_photo": "https://randomuser.me/api/portraits/men/1.jpg"
//     },
//     {
//         "name": "jane_smith",
//         "city": "Los Angeles",
//         "age": 32,
//         "profession": "Graphic Designer",
//         "profile_photo": "https://randomuser.me/api/portraits/women/2.jpg"
//     },
//     {
//         "name": "michael_brown",
//         "city": "Chicago",
//         "age": 45,
//         "profession": "Data Scientist",
//         "profile_photo": "https://randomuser.me/api/portraits/men/3.jpg"
//     },
//     {
//         "name": "susan_lee",
//         "city": "San Francisco",
//         "age": 26,
//         "profession": "Product Manager",
//         "profile_photo": "https://randomuser.me/api/portraits/women/4.jpg"
//     },
//     {
//         "name": "alex_jones",
//         "city": "Houston",
//         "age": 37,
//         "profession": "Marketing Specialist",
//         "profile_photo": "https://randomuser.me/api/portraits/men/5.jpg"
//     }
//   ]

//   // users.forEach(function(user){
//   //   console.log(user)
//   // })
//  users.map(function(user){
//     return "Hello"
//   })

//   return (
//     <div>
//       <div className='p-10'>
//         {/* <Card user="Rahul" age="26" city="Delhi" /> */}
//         {users.map(function(elem, idx){
//           // return <h1>{elem.name}</h1>
//           return <Card key={idx} username={elem.name} city={elem.city} age={elem.age} profession={elem.profession} photu={elem.profile_photo} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

// #4
// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   const user ="Rahul"
//   return (
//     <div>
//       <Card user={user} />
      
//     </div>
//   )
// }

// export default App
// #3
// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>
//       <Navbar/>
//       <Footer />
//     </>
//   )
// }

// export default App


// #2
// import React, { useState } from 'react'

// const App = () => {
//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(name)
//     setname('')
//   }

//   const [name, setname] = useState('')
//   return (
//     <h4>
//       <h1>Hello</h1>
//       <form onSubmit={(e) => {submitHandler(e)}}>
//         <input onChange={(e) => {setname(e.target.value)}}
//         className='px-4 py-3 m-5 rounded text-black' 
//         type="text" 
//         cityholder="Enter your name" 
//         value = {name}
//         />
//         <button className='px-4 py-3 text-xl text-white m-5 font-semibold bg-emerald-600 rounded'>Submit</button>
//       </form>
//     </h4>
//   )
// }

// export default App


// #1
// import React, { useState } from 'react'


// const App = () => {
//   // const a = 10
//   const [a, setA] = useState(10)
//   // const changeA = () => {
//   //   console.log("Chal gaya")
//   //   setA(a+1)
//   // }
//   return (
//     <h4>
//       <h2 className='text-5xl bg-pink-700'>Hello Guys</h2>
//       <h1>Value of a is : {a}</h1>
//       <button onClick={() => { setA(a+1) }}>ChangeA</button>
//     </h4>
//   )
// }

// export default App