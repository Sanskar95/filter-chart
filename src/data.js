export const getData= (days)=> [
    {
        label: 'Marie',
        data: Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        label: 'Maxwell',
        data:  Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)',
    },
    {
        label: 'Deno',
        data: Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(73,208,80)',
        backgroundColor: 'rgb(73,208,80)',
    },
    {
        label: 'Morty',
        data: Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(164,111,41)',
        backgroundColor: 'rgb(164,111,41)',
    },
    {
        label: 'Rick',
        data: Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(165,35,185)',
        backgroundColor: 'rgb(165,35,185)',
    },
    {
        label: 'Optimus',
        data: Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(129,22,50)',
        backgroundColor: 'rgb(129,22,50)',
    },
    {
        label: 'Megatron',
        data: Array.from({length: days}, () => Math.random() * 10),
        borderColor: 'rgb(101,19,178)',
        backgroundColor: 'rgb(101,19,178)',
    },
]