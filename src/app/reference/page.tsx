'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"

type Movie = {
    url: string
    title: string
}

export default function ReferencePage() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/reference`
                )

                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`)
                }

                const data: Movie[] = await res.json()
                setMovies(data)
            } catch (err) {
                setError('参考動画の取得に失敗しました')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchReferences()
    }, [])

    return (
        <main className="p-6">
            <Link className="p-6" href="/">TOPに戻る</Link>
            <h1>参考動画画面</h1>

            {loading && <p>読み込み中...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {movies.map((movie, i) =>(
                <div key={i} className="space-y-2 p-6">
                    <h2 className="p-6">{movie.title}</h2>
                    <iframe
                        width="560"
                        height="315"
                        src={movie.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            ))}
        </main>
    )
}