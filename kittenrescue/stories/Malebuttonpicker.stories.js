import React from 'react';
import Malebuttonpicker from '../comps/Malebuttonpicker';



export default {
    title:"Selection",
    component:<Malebuttonpicker />
}

export const MyCatinfo = () => <Malebuttonpicker />

export const MyCatinfoWithCustomTexts = () => (
<Malebuttonpicker subtext="boy kitties" />
)
