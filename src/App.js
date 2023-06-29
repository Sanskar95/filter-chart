import React, {useState} from 'react';
import {LineChart} from "./LineChart";
import {getData} from "./data";

export function App() {

    return<div>
        <LineChart labels={['W', 'T', 'F', 'S', 'S', 'M', 'T']} data={getData(73)}  title={'Demo Line Chart'}/>
    </div>

}
