import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img1 from "../../assets/image.png"
import img2 from "../../assets/image (1).png"
import img3 from "../../assets/image (2).png"
export default function HomePage() {

  return (
    <>
      <div className='w-full h-[100vh] bg-bg p-5'>
        <div className='flex items-center justify-end gap-6'>

          <NavLink to="/login"><button className='p-4 my-9 border-text hover:bg-text hover:text-main font-bold transition-all rounded-lg   border-[1px] border-dashed text-text'> Login </button></NavLink>
        </div>
        <div className='h-screen'>
          <h1 className='md:text-[100px] mt-[100px] text-[60px] text-center font-extrabold text-text'>Once$tart</h1>
          <p className='text-[white] text-[20px] text-center mx-[200px]'>Once$tart is a powerful and user-friendly task management application built with React, designed to streamline your personal and collaborative project management needs. With Once$tart, you can create, manage, and track tasks seamlessly, whether you're working solo or collaborating with a team.</p>
        </div>
        <div className='h-screen'>
          <h2 className='md:text-[50px] text-[30px] text-center text-text '>Features</h2>
          <div className='flex flex-wrap justify-center gap-5 '>
            <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
              <img src={img1} alt="" />
              <p className='text-[25px] font-semibold mb-5'>individual tasking</p>
              <p className='text-[18px] font-light'>You will be able to write your individual task and no one will see it</p>
            </div>
            <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
              <img src={img2} alt="" />
              <p className='text-[25px] font-semibold mb-5'>Group tasking</p>
              <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit illo, inventore sequi temporibus quasi dolorum itaque voluptate praesentium vel omnis. Quasi, explicabo aliquid dolores assumenda exercitationem facere asperiores autem!</p>
            </div>
            <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
              <img src={img3} alt="" />
              <p className='text-[25px] font-semibold mb-5'>Secure tasking</p>
              <p className='text-[18px] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laborum consequatur cumque placeat necessitatibus repellat tempora dolorum illo, porro pariatur adipisci natus quidem a aut aspernatur veniam consequuntur rem perspiciatis?</p>
            </div>
          </div>
        </div>
        <div className='h-screen'>
          <h2 className='md:text-[50px] text-[30px] text-center text-text '>About</h2>
          <p className='text-[white] text-[20px] mb-2 mx-[400px] font-bold'>Inspiration Behind the Project</p>
          <p className='text-[white] text-[18px] mb-2 mx-[400px]'>Our journey began in a small classroom at Holberton School, where a diverse group of individuals with different backgrounds and unique perspectives came together. As we delved deeper into the world of software engineering, we realized the immense potential of technology to solve real-world problems and bring positive change. One late night, while brainstorming ideas, we stumbled upon a common issue we all faced - the lack of a seamless, user-friendly platform to manage our projects and collaborate effectively.</p>
          <p className='text-[white] text-[18px] mb-2 mx-[400px]'>This inspired us to create a project management tool that not only simplifies the workflow but also enhances team collaboration. Our goal was to design a platform that we would love to use ourselves, one that addresses the pain points we experienced during our studies and internships. This project, a part of our Portfolio Project for Holberton School, is a testament to our collective passion for technology and our desire to make a difference.

          </p>
        </div>
      </div>
    </>
  )
}
