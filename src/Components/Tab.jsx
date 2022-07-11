import React from 'react'
import { Tabs, Drawer } from '@mantine/core';
import { useStateContext } from '../ContextApi/ContextApi';
import Container from './Container';

const Tab = () => {

 const { allStates: { tab, setTab, burger, setBurger } } = useStateContext()

  return (
    <>
      
       <Drawer opened={burger} onClose={() => setBurger((o) => !o) } padding="xl" size="lg" >
           
    <div className='h-full overflow-y-scroll'>
       <Tabs value={tab} onTabChange={setTab}>

         <Tabs.List>
             <Tabs.Tab value="all">All</Tabs.Tab>
             <Tabs.Tab value="board">Board</Tabs.Tab>
             <Tabs.Tab value="graph">Graph</Tabs.Tab>
             <Tabs.Tab value="recent">Recent</Tabs.Tab>
         </Tabs.List>

         <Tabs.Panel value="all" pt="xs">
           <Container/>
         </Tabs.Panel>
         <Tabs.Panel value="board" pt="xs">
            Board content
         </Tabs.Panel>
         <Tabs.Panel value="graph" pt="xs">
           Graph content
         </Tabs.Panel>
         <Tabs.Panel value="recent" pt="xs">
           Recent content
         </Tabs.Panel>


       </Tabs>
       </div>
       </Drawer>
     
    </>
  )
}

export default Tab
