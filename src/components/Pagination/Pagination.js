import React from 'react'

const Pagination = ({pageNumber,setPageNumber}) => {
    let prev=()=>{
        if(pageNumber===1) return;
        setPageNumber((x)=>x-1);
    };
    let next=()=>{
        if(pageNumber===42) return;
        setPageNumber((x)=>x+1);
    };
  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <botton onClick={prev} className="btn btn-primary">Prev</botton>
        <botton onClick={next} className="btn btn-primary">Next</botton>
    </div>
  )
}

export default Pagination