import React from 'react';

import  './pagination.styles.css'


export default function Pagination({cardForPage, videogames, paged, currentPage}) {
    const pageNums = []
    console.log(paged)

    for (let i = 1; i <= Math.ceil(videogames/cardForPage); i++) {
        pageNums.push(i)
    }; 


    return (
        <div>
            {pageNums.length <= 1 ? 
             <></> :
            <nav>
            <ul className="crumbs">
                {pageNums?.map(p => {
                    return (
                    <li key={p}>
                       {/* <button className="pageBtn" onClick={() => paged(p)} style={{width:"30px"}}>{p}</button>  */}
                       <div className={currentPage === p ? "crumb__active" : "crumb"} onClick={()=> paged(p)}>{p}</div>
                    </li>
                    )
                })}
            </ul>           
        </nav>  
}
        </div>      
    )
}
 