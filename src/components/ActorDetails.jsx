import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const ActorDetails = () => {

       const tamilNaduHeroes = [
  {
    id: 1,
    name: "Rajinikanth",
    image: "https://th-i.thgim.com/public/entertainment/movies/jx3kgk/article24101876.ece/alternates/FREE_1200/kaala%20-t",
    description: "Rajinikanth is one of the most celebrated actors in Indian cinema, known for his unique style, charismatic screen presence, and blockbuster movies in Tamil cinema."
  },
  {
    id: 2,
    name: "Ajith Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl557IxDgKGFRDF2B4-gBcvcjHk-4fbxVtw&s",
    description: "Ajith Kumar, popularly called Thala, is a leading actor in Tamil cinema known for his versatile acting, bike racing passion, and loyal fan base."
  },
  {
    id: 3,
    name: "Vijayakanth",
    image: "https://images.indianexpress.com/2023/12/caption-Vijayakanth-death-5.jpg",
    description: "Vijayakanth, fondly known as Captain, is a veteran Tamil actor and politician, known for his action-packed roles and leadership in Tamil Nadu's political landscape."
    },

  {
    id: 4,
    name: "Vikram",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHmT6BJjL4zT5FhRTcSIrraPu119GQb5ucw&s",
    description: "Vikram, often called Chiyaan Vikram, is known for his intense method acting and versatile roles in Tamil cinema, with several critically acclaimed performances."
  },
  {
    id: 5,
    name: "Suriya",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201305/singham_2_surya_660_051213033917.jpg?VersionId=xR0oSpEI5MDJKoJqB_iYnZwX.QJN48X7",
    description: "Suriya is a critically acclaimed Tamil actor known for his socially relevant films and intense performances, as well as his philanthropic work."
  }
];
let navigate = useNavigate()
let previous=()=>{
    navigate(-1)
}
  
    let param =useParams()

    let {actorId}=param
    let actor = tamilNaduHeroes[actorId-1]
    return (
        <div className="actorDetailsMain">
            <div className='actorDetailsCard'>
                <img src={actor.image} alt="" />
                <h1>Actor Name - {actor.name}</h1>
                <h1>{actor.description}  </h1>
                <button onClick={previous}>Go to previous page</button>
            </div>
        </div>
  )
}

export default ActorDetails