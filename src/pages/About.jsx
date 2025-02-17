import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/frontend_assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corporis. Repellat doloremque iusto officia ducimus quo, rem, eum qui nesciunt quis molestiae autem quidem consequuntur dicta mollitia ipsam velit voluptatem?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut totam tempora minus corrupti laboriosam, nostrum repudiandae ut ipsam nesciunt nam ea obcaecati, repellendus velit porro dolore perspiciatis consectetur possimus.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem reprehenderit, amet commodi reiciendis soluta facere nemo nisi tempora omnis tempore quisquam quaerat officia praesentium unde voluptate accusantium, suscipit harum.</p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate sint nihil aperiam autem illum quis culpa maxime vero facilis aut accusamus veritatis quam placeat officia, minima sapiente dicta sit!</p>
          
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate sint nihil aperiam autem illum quis culpa maxime vero facilis aut accusamus veritatis quam placeat officia, minima sapiente dicta sit!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, cupiditate sint nihil aperiam autem illum quis culpa maxime vero facilis aut accusamus veritatis quam placeat officia, minima sapiente dicta sit!</p>
        </div>

      </div>
      <NewsletterBox />

    </div>
  )
}

export default About