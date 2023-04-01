import { useEffect, useState } from "react"
import axios from 'axios';
export const Covid = () => {
    //componentdidmount
    let [covid, setCovid] = useState([])
    let [loading, setLoading] = useState(true)
    let [err, setErr] = useState(false)
    useEffect(() => {
        async function getCovid() {
            try {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
                let dataCovid = res?.data || [];
                setCovid(dataCovid.reverse());
                setLoading(false)
                setErr(false)
            } catch (e) {
                setErr(true)
                setLoading(false)
                console.log(e)
            }
        }
        getCovid()
    }, [])
    return (<><p><strong>Covid-19 tracking in Vietnam</strong></p>
        {loading ? <p>Loading..</p> : <></>}
        {err ? <p>Something went wrong..</p> : <></>}
        {!loading && !err ? <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {covid?.length > 0 &&
                    covid.map(item => (
                        <tr key={item.ID}>
                            <td>{item.Date.substr(0, 10)}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                    ))}
            </tbody>
        </table> : <p></p>}
    </>)
}