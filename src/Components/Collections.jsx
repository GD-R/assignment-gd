import React from 'react'
import { IconPlus, IconTrash } from '@tabler/icons';
import { ActionIcon , NavLink, Tooltip } from '@mantine/core';
import SubCollections from './SubCollections';
import { useDispatch } from 'react-redux';
import { addSubCollection, deleteCollection } from '../features/collectionsSlice';
import { useUID } from 'react-uid';
import { useNavigate } from 'react-router-dom';



const Collections = (props) => {
 
    const { collection, cIndex } = props

    const navigate = useNavigate()
  
    const uid = useUID();
     
    const dispatch = useDispatch()

    const addNewSubCollection = (inputId) => {
      const random = (Math.random() * 500) + uid
        dispatch(addSubCollection({inputId,random}))
    }

    const deleteThisCollection = (inputId) => {
        dispatch(deleteCollection(inputId))
        navigate('/home')
    }

    

  return (
    <>
        <NavLink label={`Collection ${cIndex}`} childrenOffset={28}>
                  <NavLink label={<div className='flex gap-8'>
                       <Tooltip label="Add New Sub-collection"><ActionIcon size={"sm"} ><IconPlus onClick={() => addNewSubCollection(collection.id)} /></ActionIcon></Tooltip>
                       <Tooltip label={`Delete Collection ${cIndex}`}><ActionIcon size={"sm"} ><IconTrash onClick={() => deleteThisCollection(collection.id)} /></ActionIcon></Tooltip></div>} />
                     {
                        collection.subCollections.map((subCollection,sIndex) => <SubCollections cIndex={cIndex} sIndex={sIndex} key={subCollection.id} subCollection={subCollection} />)
                     }
          </NavLink>
    </>
  )
}

export default Collections
