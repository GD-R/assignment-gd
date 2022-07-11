import React from 'react'
import { useStateContext } from '../ContextApi/ContextApi';
import { IconPlus, IconTrash } from '@tabler/icons';
import { ActionIcon , NavLink, Tooltip } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteSubCollection } from '../features/collectionsSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dialog } from '@mantine/core';


const SubCollections = (props) => {
 
    const { subCollection, sIndex, cIndex } = props

  
    const { allStates: { itemValue, setItemValue, setDialog, dialog, subId, setSubId } } = useStateContext();

    const location = useLocation();
    const navigate = useNavigate()

    const { collections } = useSelector((state) => state.collections.value)
    const dispatch = useDispatch()

   

    const addUserItem = () => {
      
      if(itemValue.length <= 2) {
        alert("Please enter value with more than three letters ")
        setDialog(false)
        setItemValue("")
      }

      else {
        const find = collections.find((collection) => {
          return collection.subCollections.some((item) => item.id === subId)
        })

        const checkSub = find.subCollections.find((sub) => sub.id === subId)

        if(Object.keys(checkSub).includes(itemValue)) {
          alert("Item already present please enter different name")
          setDialog(false)
          setItemValue("")
         }
         else {
          dispatch(addItem({subId,itemValue}))
          setDialog(false)
          setItemValue("")
         }

      }
    }

    const addNewItem = (inputId) => {
      
      setSubId(inputId)
      setDialog(true)
      setItemValue("")
    }

    const deleteSub = (inputId) => {
      
     dispatch(deleteSubCollection(inputId))
     navigate('/home')
    }


  return (
    <>
                  <NavLink noWrap="true" label={`Collection ${cIndex}.${sIndex}`} childrenOffset={28}>
                        <NavLink label={<div className='flex gap-8'>
                    <Tooltip label="Add Item"><ActionIcon size={"sm"} ><IconPlus onClick={() => addNewItem(subCollection.id)} /></ActionIcon></Tooltip>
                    <Tooltip label={`Delete Sub-Collection ${cIndex}.${sIndex}`}><ActionIcon size={"sm"} ><IconTrash onClick={() => deleteSub(subCollection.id)} /></ActionIcon></Tooltip>
                    </div>} />
                        {Object.keys(subCollection).map((item,index) => index===0? null : <NavLink key={index} label={item} color="green" variant="filled" component={Link} to={`home/collection${cIndex}/sub${sIndex}/${item}`} active={location.pathname == `/home/collection${cIndex}/sub${sIndex}/${item}`} />)}
                     </NavLink>

                     <Dialog opened={dialog} withCloseButton onClose={() => {setDialog(false) 
       setItemValue("")} } size="md" radius="md" position={{ bottom: 35, right: 0 }}>
         <div>
            <input type="text" value={itemValue} onChange={(e) => setItemValue(e.target.value)} className='border border-black' />
            <button className='ml-4 px-4 py-1 bg-green-500' onClick={addUserItem} >Add</button>
         </div>
      </Dialog>
    </>
  )
}

export default SubCollections
