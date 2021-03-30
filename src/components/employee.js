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