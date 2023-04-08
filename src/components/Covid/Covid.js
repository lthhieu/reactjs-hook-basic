import * as customize from '../../customize'
import moment from 'moment'
export const Covid = () => {
    //componentdidmount
    let today = moment().utc().startOf('day').format('YYYY-MM-DDTHH:mm:ss[Z]')
    let prevDay = moment.utc(today).subtract(30, 'days').format('YYYY-MM-DDTHH:mm:ss[Z]')
    let { data: covid, loading, err } = customize.useFetch(`https://api.covid19api.com/country/vietnam?from=${prevDay}&to=${today}`, true)
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
                            <td>{item.Date}</td>
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