import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {getData} from "./data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



export function LineChart(props) {
    const seedData = props.data

    const [selectedFilter, setSelectedFilter] = useState("all")
    const [chartData, setChartData] = React.useState([])
    const [durationFilter, setDurationFilter] = React.useState('Week 1')
    const [durationFilterValue, setDurationFilterValue] = React.useState(1)


    useEffect(() => {
        let allData = props.data
        let durationFilteredData = allData.map(element=>{
            return{...element, data: element.data.slice(0, 7)}
        })
        setChartData(durationFilteredData)
    }, []);


    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: props.title,
            },
            scales: {
               x:{
                   grid: {
                       display: false
                   }
               }
            }
        },
    };

    const getLabelFilterOptions =()=>{
        let allData = props.data
        let labelFilterOptions = allData.map(element=>{
            return {
                label: element.label, value: element.label
            }
        })
         labelFilterOptions.push({
            label: 'all', value: 'all'
        })
        return labelFilterOptions
    }

    const getDurationFilterOptions = ()=>{
        let weeks = props.data[0].data.length / 7
        let durationFilterOptions = []
        for (let i =1; i <= weeks; i++){
            durationFilterOptions.push({
                label: `Week ${i}`, value: i
            })
        }
        return durationFilterOptions
    }

    const handleFilterChange = (e) => {
        let allData = props.data
        let selectedFilter = e.target.value
        if(selectedFilter ==='all'){
            let leftId = 7 * (parseInt(durationFilterValue)-1)
            let rightId = leftId + 7
            let durationFilteredData =  allData.map(element=>{
                return{...element, data: element.data.slice(leftId, rightId)}
            })
            setChartData(durationFilteredData)
        }
        else{
            let leftId = 7 * (parseInt(durationFilterValue)-1)
            let rightId = leftId + 7
            let filteredData = allData.filter(dataElement=> selectedFilter===dataElement.label).map(element=>{
                return{...element, data: element.data.slice(leftId, rightId)}
            })
            setChartData(filteredData)

        }
        setSelectedFilter(selectedFilter)
    }

    const handleDurationFilterChange = (e) =>{
        let allData = props.data
        let leftId = 7 * (parseInt(e.target.value)-1)
        let rightId = leftId + 7
        let durationFilteredData =  allData.map(element=>{
            return{...element, data: element.data.slice(leftId, rightId)}
        }).filter(dataElement=> {
            if (selectedFilter === 'all'){
                return true
            }else return dataElement.label === selectedFilter

        } )
        setDurationFilter(e.target.label)
        setDurationFilterValue(e.target.value)
        setChartData(durationFilteredData)

    }


    return<div>



        <div style={{height:"60vh",position:"relative",textAlign:'center', padding:"1%"}}>

                <select value={selectedFilter} onChange={handleFilterChange}>
                    {getLabelFilterOptions().map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <select  value={durationFilter} onChange={handleDurationFilterChange}>
                    {getDurationFilterOptions().map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

            <Line  options={chartOptions} data={{labels: props.labels, datasets: chartData}} />
        </div>
    </div>

}
