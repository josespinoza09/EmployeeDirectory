import { useEffect, useState, } from 'react'
import axios from 'axios'
import Search from './search'

function Employee() {

    const [data, setData] = useState([])
    const [order, setOrder] = useState('ascending')
    async function getEmployee() {
        const results = await axios.get("https://randomuser.me/api/?results=30")

        setData(data => results.data.results)

    }

    useEffect(function () {
        getEmployee()
    }, [])

    function ascendingSort() {
        console.log(data)
        let filtereddata = [...data]
        console.log(filtereddata)
        const sortedEmployees = filtereddata.sort((a, b) => {
            if (b.name.first > a.name.first) {
                console.log()
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0
        });
        if (order === 'descending') {
            sortedEmployees.reverse()
            setOrder("ascending")
        }
        else {
            setOrder("descending")
        }
        setData(sortedEmployees)

    }