import React from 'react';
import Header1 from '../comps/Header/index.js';
 
export default {
   title: "Header1",
   component: <Header1 />
}
 
export const MyHeader1 = () => <Header1 />
export const MyHeader1Color  = () => <Header1  bgcolor="pink"/>
 
export const MyHeader1WithCustomTexts = () => (
   <Header1
       subtext="Kitten Finder"
      
   />
 
)
