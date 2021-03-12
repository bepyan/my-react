import React from 'react'
import useAxios from 'hooks/useAxios'

export default () => {
    const { loading, err, data, refetch } = useAxios({ url: "http://aws.random.cat/meow" })

    return <div style={{ textAlign: "center" }}>
        <h4>Cat from AWS</h4>
        <button onClick={refetch} >Get</button>
        <br/>
        <br/>
        {loading ? <h4>{`🐈 Loading`}</h4> : <img src={data.file} alt="kit"/>}
        <p>{err}</p>
    </div>
}