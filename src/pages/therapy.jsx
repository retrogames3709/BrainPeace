import React, { useState, useEffect } from 'react';
import './MentalIllnessCarousel.jsx';
import { Link } from 'react-router-dom';



const mentalIllnessessoln = [
  {
    id: 1,
    title: 'Dr. Emily Johnson',
    description: 'Dr. Johnson is a passionate Doctor with over 15 years of experience. She is dedicated to providing personalized care to her patients, emphasizing preventive measures for mental health.',
    image: 'https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg' ,
    link: '/anxiety',
  },
{
  id: 2,
  title: 'Dr. Marcus Rodriguez',
  description: 'Dr. Rodriguez is a friendly and compassionate Doctor . He believes in creating a comfortable environment for children during their visits, ensuring both parents and kids leave with a smile.',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww',
  link: '/depression',

},

{
  id: 3,
  title: 'Dr. Emily Turner, MD',
  description: 'Dr. Emily Turner is a dedicated psychiatrist renowned for her expertise in Obsessive-Compulsive Disorder (OCD). Dr. Turner is committed to empowering her patients, helping them navigate the challenges of OCD with personalized care and practical strategies.',
  image: 'https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg',
  link: '/ocd',
},

{
  id: 4,
  title: 'Dr. Jason Rodriguez, MD',
  description: 'Dr. Jason Rodriguez is a distinguished psychiatrist specializing in Panic Disorder. With a focus on holistic mental health, Dr. Rodriguez combines his extensive clinical experience with cutting-edge therapeutic approaches.',
  image: 'https://yt3.googleusercontent.com/ytc/AIf8zZRQsMGuKeHk6Oi0cVEFIu3OHYhKLpaHOInaXAqW8w=s900-c-k-c0x00ffffff-no-rj',
  link: '/panicdisorder',
},

{
  id: 5,
  title: 'Dr. Amy Foster, PhD, Psychiatrist',
  description: 'Dr. Amy Foster is a compassionate and skilled psychiatrist specializing in Bipolar Affective Disorder.Dr. Fosters commitment to ongoing education ensures that her patients receive the latest evidence-based care in managing mood swings and achieving stability.',
  image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707609600&semt=ais',
  link: '/bipolar-article',
},

{
  id: 6,
  title: 'Dr. Michael Hayes',
  description: 'Dr. Michael Hayes is a renowned psychiatrist with expertise in Schizophrenia. With years of experience in both clinical and research settings, Dr. Hayes is dedicated to providing compassionate care for individuals with Schizophrenia. ',
  image: 'https://people.com/thmb/A9XiSeLTgag_ERzusEVJ5GKKAWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(511x0:513x2)/patrick-dempsey-04-1024-1-108544fb7f24410d802ff00fd93ddf55.jpg',
  link: '/schizophrenia',
},

{
  id: 7,
  title: 'Dr. Sarah Thompson, PhD, Trauma Specialist',
  description: 'Dr. Sarah Thompson is a highly regarded trauma specialist, focusing on Post-Traumatic Stress Disorder (PTSD). With a background in clinical psychology, Dr. Thompson is dedicated to helping individuals navigate the challenges associated with trauma.Dr. Thompson is passionate about fostering resilience and guiding her patients towards a path of healing and recovery from PTSD.',
  image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/untitled-design-14.jpg',
  link: '/ptsd',
},

{
  id: 7,
  title: 'Dr. Michael Ramirez, MD, Psychiatric Specialist',
  description: 'Dr. Michael Ramirez is a seasoned psychiatric specialist with expertise in treating psychosis. With an extensive background in psychiatry, he has dedicated his career to understanding and addressing conditions that involve altered perceptions of reality.',
  image: 'https://wallpapers.com/images/hd/sandra-oh-as-doctor-cristina-yang-l77ixjc178ytwj71.jpg',
  link: '/psychosis',
},
];




function Therapy() {
  return (
    <div className="carousel">
      {mentalIllnessessoln.map((illnesss) => (
        <div className="carousel-item" key={illnesss.id}>
          <img src={illnesss.image} alt={illnesss.title} />
          <h2>{illnesss.title}</h2>
          <p>{illnesss.description}</p>
          <Link to={illnesss.link} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Therapy;
