import { useEffect, useState } from "react"
import axios from 'axios'
import moment from 'moment'
export const useFetch = (url, covid) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let [err, setErr] = useState(false)
    useEffect(() => {
        const controller = new AbortController(); // <-- 1st step
        async function getdata() {
            try {
                let res = await axios.get(url, {
                    signal: controller.signal // <-- 2nd step
                });
                let data = res?.data ?? []
                if (data?.length > 0 && covid) {
                    data = data.map(item => ({
                        ...item,
                        Data: moment(item.Date).format('DD/MM/YYYY')
                    })).reverse()
                }
                setData(data);
                setLoading(false)
                setErr(false)

            } catch (e) {
                if (e.name === "CanceledError") {
                    console.log('Operation canceled by the user')
                } else {
                    setErr(true)
                    setLoading(false)
                    console.log(e)
                }
            }
        }
        setTimeout(() => {
            getdata()
        }, 3000);
        return () => {
            controller.abort() // <-- 3rd step
        }
    }, [url])
    return {
        data, loading, err
    }
}