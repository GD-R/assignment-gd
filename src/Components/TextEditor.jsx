import React from 'react'
import { RichTextEditor } from '@mantine/rte';
import { useDispatch } from 'react-redux';
import { updateTextEditor } from '../features/collectionsSlice';
import { Menu } from '@mantine/core';
import { IconCalendarEvent, IconFileExport, IconListCheck, IconCloudFog } from '@tabler/icons';




const TextEditor = (props) => {

    const { text, cIndex, sIndex } = props

    const dispatch = useDispatch()
  
    const updateTextValue = (iValue,colId,subId) => {
        dispatch(updateTextEditor({iValue,colId,subId}))
    }


  return (
    <>
      <RichTextEditor controls={[
    ['bold', 'italic', 'underline', 'link', 'image'],
    ['unorderedList', 'h1', 'h2', 'h3'],
    ['sup', 'sub'],
    ['alignLeft', 'alignCenter', 'alignRight']]}
    sticky={false}
         value={text} onChange={(event) => updateTextValue(event,cIndex, sIndex)} />

         <div className='my-8'>
         <Menu shadow="md" width={150} trigger="hover" openDelay={100} closeDelay={200} > <Menu.Target>
         <button className='bg-green-500 px-4 py-2 rounded-md'>Add Widgets</button></Menu.Target>

         <Menu.Dropdown>
         <Menu.Label>WIDGETS</Menu.Label>
        <Menu.Item icon={<IconCalendarEvent size={14} />}>Calender</Menu.Item>
        <Menu.Item icon={<IconListCheck size={14} />}>OneNote</Menu.Item>
        <Menu.Item icon={<IconCloudFog size={14} />}>Weather</Menu.Item>
        <Menu.Item icon={<IconFileExport size={14} />}>Forms</Menu.Item>
         </Menu.Dropdown>


         </Menu>
         </div>
         
    </>
  )
}

export default TextEditor
