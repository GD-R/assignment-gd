import React from 'react'
import { Indicator, Avatar, Menu, ActionIcon, Switch  } from '@mantine/core';
import { useStateContext } from '../ContextApi/ContextApi';

const UserMenu = () => {

   
    const { allStates: { menu, setMenu } } = useStateContext();

  return (
    <>
      
       <Menu shadow="md" width={200} opened={menu} onChange={setMenu} >
          <Menu.Target >
             <Indicator inline size={14} offset={11} position="bottom-end" color="red" withBorder>
               <Indicator inline label="New" size={16} offset={7} color="green">
                  <Avatar className='cursor-pointer' color="green" radius="xl" size={"lg"}>GD</Avatar>
                </Indicator>
             </Indicator>
          </Menu.Target>
          <Menu.Dropdown>
          <Menu.Label>User Menu</Menu.Label>
              <Menu.Item rightSection={<Switch/>} >Dark Mode</Menu.Item>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>What's New</Menu.Item>
              <Menu.Item>Help</Menu.Item>
              <Menu.Item>Send Feedback</Menu.Item>
              <Menu.Divider />
              <Menu.Item color="green">Log Out</Menu.Item>
          </Menu.Dropdown>
       </Menu>
      
    </>
  )
}

export default UserMenu
