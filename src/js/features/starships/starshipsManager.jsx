import React, { useState } from 'react'
import { useFetchStarshipsQuery } from '../../app/services/starshipsApi'

export const StarshipsManager = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(10)
    const { data, isFetching } = useFetchStarshipsQuery({ page, search });

    let nbPage;

    //Count -> 82
    //Limit -> 10
    //nb results 82/10 -> 8.2 -> math.ceil -> 9
    if (data) nbPage = Math.ceil(data.count / limit)
    console.log(page);

    return <div>
        <h1>Star wars starships here</h1>
        <label>Search a starship</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />

        {isFetching ? <div style={{ marginTop: '20px' }}>Starships loading ...</div> :
            <div style={{ display: "flex", justifyContent: "center", marginTop: '35px' }}>
                {page != 1 && <button onClick={() => setPage(page - 1)}>{'<'}</button>}
                <div style={{ margin: "0 20px" }}>
                    {
                        data?.results?.map(starships => {
                            return <div key={starships.name}>
                                <p>{starships.name}</p>
                            </div>
                        })
                    }
                </div>
                {nbPage != page && <button onClick={() => setPage(page + 1)}>{'>'}</button>}
            </div>
        }
    </div>
}