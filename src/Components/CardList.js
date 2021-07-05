import React from 'react'
import Card from './Card'

// const CardList = ({robots}) =>{
//     const cardcomponent = robots.map((user,i)=>{
//         return(
//         <Card 
//         key={i} 
//         id={robots[i].id} 
//         name={robots[i].name} 
//         email={robots[i].email}
//         />
//         )
//     })
//     return(
//         <div>
//             {cardcomponent}
//         </div>

//     );
// }

// Alternative code
const CardList = ({robots}) =>{
    // if(true){
    //     throw new Error('noooo!!!');
    // }
    return(
        <div>
        {
                robots.map((user,i)=>{
                    return(
                <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
                );
            })
        }   
        </div>
    );
}


export default CardList;