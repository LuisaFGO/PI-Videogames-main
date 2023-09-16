import React from 'react';

import  './pagination.styles.css'


export default function Pagination({cardForPage, videogames, paged}) {
    const pageNums = []

    for (let i = 1; i <= Math.ceil(videogames/cardForPage); i++) {
        pageNums.push(i)
    }; 

    return (
        <div className='div_pagin'>
             { pageNums && pageNums.map(p => (
                    <a key={p} href onClick={() => paged(p)}>{p}</a>
                  ))}  
        </div>      
    )
}
 