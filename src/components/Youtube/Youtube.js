import axios from "axios"
import moment from "moment"
import './Youtube.scss'
import { useState, useEffect } from "react"
export const Youtube = () => {
    let [youtube, setYoutube] = useState([])
    let [query, setQuery] = useState('')
    useEffect(() => {

    }, [])
    let handleSearch = async () => {
        let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: '20',
                key: 'AIzaSyASwg6C9A2gptz16eA_QvQXm7h3Og7gJKg',
                type: 'video',
                q: query
            }
        })
        if (res?.data?.items) {
            let raw = res.data.items
            let results = []
            if (raw?.length > 0) {
                raw.map(item => {
                    let obj = {}
                    obj.videoId = item.id.videoId
                    obj.channelTitle = item.snippet.channelTitle
                    obj.description = item.snippet.description
                    obj.publishTime = item.snippet.publishTime
                    obj.title = item.snippet.title
                    results.push(obj)
                })
            }
            setYoutube(results)
        }
        console.log(youtube)

    }
    return (<><div style={{ width: '300px' }} className="input-group mb-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="form-control" />
        <button onClick={handleSearch} className="input-group-text btn btn-success">Search</button></div>
        {youtube?.length > 0 ? youtube.map(item => {
            return (<div className="yt-result" key={item.videoId}>
                <div className="left">
                    <iframe className="iframe-yt"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
                <div className="right">
                    <div className="title">
                        {item.title}
                    </div>
                    <div className="publisher">
                        Đã tạo vào ngày {moment.utc(item.publishTime).format('DD-MM-YYYY [lúc] HH:mm:ss')}
                    </div>
                    <div className="author">
                        {item.channelTitle}
                    </div>
                    <div className="description">
                        {item.description}
                    </div>
                </div>
            </div>)
        }) : <></>}
    </>)
}