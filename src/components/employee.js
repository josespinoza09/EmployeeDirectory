import { useEffect, useState, } from 'react'
import axios from 'axios'
import Search from './search'

function Employee() {

    const [data, setData] = useState([])
    const [order, setOrder] = useState('ascending')
