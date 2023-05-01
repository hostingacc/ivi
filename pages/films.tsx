import { Container, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

interface IFilm {
    id: number,
    title: string
}

const films = () => {
    const [films, setFilms] = useState<IFilm[]>([

        { id: 1, title: "Oxota na jivotnix" },
        { id: 2, title: "Ploxie parni" },
    ])
    return (<Container>
        <Typography variant='h2' sx={{ color: "white" }}>Films page</Typography>
        {films.map(film => <Typography><Link href={`/films/${film.id}`}>{film.title}</Link></Typography >)
        }
    </Container>
    )
}
export default films
