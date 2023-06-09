import React from 'react'
import { useState } from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import SectionHeader from './SectionHeader'
import Card from '../UI/Card'
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from 'react-icons/io'
import Avatar1 from '../assets/avatar1.jpg'
import Avatar2 from '../assets/avatar2.jpg'
import Avatar3 from '../assets/avatar4.jpg'
import Avatar4 from '../assets/avatar3.jpg'
import Avatar5 from '../assets/avatar5.jpg'



export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: Avatar1
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: Avatar2
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: Avatar3
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: Avatar4
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: Avatar5
    }
]


const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job,  avatar} = testimonials[index]

    const prevTestimonialsHandler= ()=>{
     setIndex(prev => prev -1);
     if(index <= 0){
        setIndex(testimonials.length-1)
     }
    }
    const nextTestimonialsHandler= ()=>{
        setIndex(prev => prev+1);
        if(index >=testimonials.length - 1){
            setIndex(0)
        }
    }
  return (
   <section className="testimonial">
    <div className="container testimonial-container">
        <SectionHeader icons={<ImQuotesLeft/>} title="Testimonials"/>
        <div className="testimonial-warper">
            <Card className="card-testimonials">
                <div className="testimonial-avatar">
                   <img src={`"${avatar}"`} />
                </div>
                <p className='testimonial-quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small>{job}</small>
            </Card>
            <div className="testimonials-btn-container">
            <button className="testimonials-btn" onClick={prevTestimonialsHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials-btn" onClick={nextTestimonialsHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Testimonials