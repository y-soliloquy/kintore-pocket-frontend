'use client'

import { useEffect, useState } from 'react'

export default function HelloPage() {
    const [message, setMessage] = useState('...loading')

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`) // リポジトリのデプロイ先が決まったら、そこのパスを利用する。.envで管理する
            .then((res) => {
                return res.text()
            })
            .then((data) => {
                setMessage(data)
            })
            .catch((err) => {
                console.log('fetch failed', err)
                setMessage('error...')
            })
    }, [])

    return (
        <main className='p-6'>
            <h1 className='text-2xl font-bold'>Wellcome!</h1>
            <p className='mt-4'>{message}</p>
        </main>
    )
}