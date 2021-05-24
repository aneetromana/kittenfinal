import React from 'react';
import Button from '../comps/Filterbutton';



export default {
    title:"Search",
    component:<Button/>
}

export const SearchOptions = () => <Button />
export const SearchOptionsWithCustomColor = () => <Button bgcolor="teal"/>
export const SearchOptionsWithCustomTexts = () => (
    <Button
    subtext="claud and fern"
    />
)