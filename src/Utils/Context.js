
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { useRef } from "react";
import property_1 from "../images/property-1.jpg"
import property_2 from "../images/property-2.jpg"
import property_3 from "../images/property-3.jpg"
import property_4 from "../images/property-4.jpg"
import property_5 from "../images/property-5.jpg"
import property_6 from "../images/property-6.jpg"
import property_7 from "../images/property-7.jpg"
import property_8 from "../images/property-8.jpg"
import story_avatar_1 from "../images/story-avatar-1.jpg"
import story_avatar_2 from "../images/story-avatar-2.jpg"
import story_avatar_3 from "../images/story-avatar-3.jpg"
import story_avatar_4 from "../images/story-avatar-4.jpg"
import story_avatar_5 from "../images/story-avatar-5.jpg"
import story_avatar_6 from "../images/story-avatar-6.jpg"
import story_1 from "../images/story-1.jpg"
import story_2 from "../images/story-2.jpg"
import story_3 from "../images/story-3.jpg"
import story_4 from "../images/story-4.jpg"
import story_5 from "../images/story-5.jpg"
import story_6 from "../images/story-6.jpg"
import news_1 from "../images/news_1.jpg"
import news_2 from "../images/news_2.jpg"
import news_3 from "../images/news_3.jpg"
import news_4 from "../images/news_4.jpg"
export const Context = createContext();
const AppContext = ({ children }) => {
    const property = [
        {
            img: property_1,
            price: "1million",
            Brand_name: "COVA Home Realty",
            Address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            Beds: "3",
            Bath: '2',
            Size: "1430",
            Category: "Buy"
        },
        {
            img: property_2,
            price: "4million",
            Brand_name: "Exit Realty",
            Address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            Beds: "4",
            Bath: '4',
            Size: "1630",
            Category: "Buy"
        },
        {
            img: property_3,
            price: "7million",
            Brand_name: "The Real Estate Group",
            Address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            Beds: "8",
            Bath: '5',
            Size: "1240",
            Category: "Buy"
        },
        {
            img: property_4,
            price: "3million",
            Brand_name: "Best Home's",
            Address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            Beds: "5",
            Bath: '3',
            Size: "1270",
            Category: "Buy"
        },
        {
            img: property_5,
            price: "576.28",
            Brand_name: "757 Realty",
            Address: "4140 Parker Rd. Allentown, New Mexico 31134",
            Beds: "6",
            Bath: '6',
            Size: "1260",
            Category: "Rent"
        },
        {
            img: property_6,
            price: "473.85",
            Brand_name: "Beach Pros Realty Inc.",
            Address: "2715 Ash Dr. San Jose, South Dakota 83475",
            Beds: "10",
            Bath: '8',
            Size: "2350",
            Category: "Rent",
        },
        {
            img: property_7,
            price: "105.55",
            Brand_name: "Keller Williams Elite",
            Address: "2715 Ash Dr. San Jose, South Dakota 83475",
            Beds: "8",
            Bath: '8',
            Size: "1950",
            Category: "Rent"
        },
        {
            img: property_8,
            price: "739.65",
            Brand_name: "All Pros Real Estate",
            Address: "8502 Preston Rd. Inglewood, Maine 98380",
            Beds: "4",
            Bath: '4',
            Size: "1580",
            Category: "Rent"
        },
    ]
    const reviews = [
       {
        image: story_1,
         avatar: story_avatar_1,
         Name: "Dawood",
         Proffesion: "Lorem ipsum dolor sit amet.",
         Review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem quisquam! Doloremque dicta vel deserunt expedita iusto, laborum fuga dolore distinctio, nulla nihil ab ut, enim aliquam qui porro facere.',
       },
       {
        image: story_2,
        avatar: story_avatar_2,
        Name: "Ibrahim",
        Proffesion: "Lorem ipsum dolor sit amet.",
        Review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem quisquam! Doloremque dicta vel deserunt expedita iusto, laborum fuga dolore distinctio, nulla nihil ab ut, enim aliquam qui porro facere.',
      },
      {
        image: story_3,
        avatar: story_avatar_3,
        Name: "Natasha",
        Proffesion: "Lorem ipsum dolor sit amet.",
        Review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem quisquam! Doloremque dicta vel deserunt expedita iusto, laborum fuga dolore distinctio, nulla nihil ab ut, enim aliquam qui porro facere.',
      },
      { 
        image: story_4,
        avatar: story_avatar_4,
        Name: "Hazel",
        Proffesion: "Lorem ipsum dolor sit amet.",
        Review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem quisquam! Doloremque dicta vel deserunt expedita iusto, laborum fuga dolore distinctio, nulla nihil ab ut, enim aliquam qui porro facere.',
      },
      {
        image: story_5,
        avatar: story_avatar_5,
        Name: "Ali",
        Proffesion: "Lorem ipsum dolor sit amet.",
        Review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem quisquam! Doloremque dicta vel deserunt expedita iusto, laborum fuga dolore distinctio, nulla nihil ab ut, enim aliquam qui porro facere.',
      },
      {
        image: story_6,
        avatar: story_avatar_6,
        Name: "Alexa",
        Proffesion: "Lorem ipsum dolor sit amet.",
        Review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem quisquam! Doloremque dicta vel deserunt expedita iusto, laborum fuga dolore distinctio, nulla nihil ab ut, enim aliquam qui porro facere.',
      },
    ]
    const news = [
        {
          image: news_1,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
        },
        {
            image: news_2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
          {
            image: news_3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
          {
            image: news_4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
          {
            image: property_1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
          {
            image:property_4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
          {
            image: property_6,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
          {
            image: property_8,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto?',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam quis esse reprehenderit quaerat odio fuga consequatur aliquid repellendus adipisci"
          },
    ]
    const [data, setdata] = useState(property)
    const [filteredatacommand,setfilteredatacommand] = useState(null)
    return (
        <Context.Provider
            value={{
        property,
        filteredatacommand,
        setfilteredatacommand,
        data,
        setdata,
        news,
        reviews
            }}
        >
            {children}
        </Context.Provider>
    )
}
export default AppContext