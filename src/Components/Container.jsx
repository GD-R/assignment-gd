import React from 'react'
import Collections from './Collections';
import { useSelector, useDispatch } from 'react-redux';
import { addCollection } from '../features/collectionsSlice';
import { useUID } from 'react-uid';

const Container = () => {



  const uid = useUID(); 
  

  const { collections } = useSelector((state) => state.collections.value)
  const dispatch = useDispatch()

  const addNewCollection = () => {
    const random = (Math.random() * 500)
  
    dispatch(addCollection({
      id: random,
      subCollections: [{ id:`s${uid+random}`, page:"page", video:"video", textEditor:"Enter your text here" }]
    }))
  }



  return (
    <>
          <button className='bg-green-500 p-2 rounded' onClick={addNewCollection}>Add New Collection</button>
            <div className='w-[60%] h-full pb-8'>
               {
                collections.map((collection,cIndex) => <Collections cIndex={cIndex} key={collection.id} collection={collection}/>)
               }
            </div>      
    </>
  )
}

export default Container
