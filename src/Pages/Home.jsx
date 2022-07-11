import React from 'react'
import { useStateContext } from '../ContextApi/ContextApi';
import { Dialog } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useParams, Outlet } from "react-router-dom";
import TextEditor from '../Components/TextEditor';


const Home = () => {

    const { allStates: { dialog, setDialog, itemValue, setItemValue } } = useStateContext();

    const { collections } = useSelector((state) => state.collections.value)

    const  { cIndex, sIndex, item } = useParams();

   
    
    
    


  return (
    <>
    <div className='relative w-full h-screen md:w-[90%] lg:w-[60%] md:mx-auto'>
      {cIndex===undefined && sIndex===undefined && item===undefined ? null : <h2>{`Collection${cIndex}/SubCollection${sIndex}/${item}`}</h2> }
     
     <div className='container w-full h-full  p-8'>
     {cIndex===undefined && sIndex===undefined && item===undefined ? <p>Select the Item from collection</p> : item==="textEditor"? <TextEditor key={`${cIndex}/${sIndex}`} cIndex={cIndex} sIndex={sIndex} text={`${collections[cIndex].subCollections[sIndex][`${item}`]}`}/> : <p>{`${collections[cIndex].subCollections[sIndex][`${item}`]}`}</p>}
     
     </div>
      </div>

      <Outlet />
    </>
  )
}

export default Home
