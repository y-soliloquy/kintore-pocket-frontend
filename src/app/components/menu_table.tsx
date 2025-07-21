'use client'

import React, { useState } from 'react'

type Props = {
    menuTemplate: string|undefined
}

export default function MenuTable({menuTemplate}: Props) {
    const [weight, setWeight] = useState('')
    const [menu, setMenu] = useState([])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/5times5?template=${menuTemplate}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ weight: Number(weight) }),
          })
    
          if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status}`)
          }
    
          const data = await res.json()
          setMenu(data)
        } catch (err) {
          console.error(err)
          setError('通信に失敗しました')
        }
      }

    return (
        <div className="p-6">    
            <form onSubmit={handleSubmit} className="mt-4 space-x-2">
                <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="最大重量 (kg)"
                className="border p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">送信</button>
            </form>
    
            <table className="mt-4 border-collapse border border-gray-400">
                <thead>
                    <tr>
                    <th className="border border-gray-400 px-4 py-2">セット</th>
                    <th className="border border-gray-400 px-4 py-2">重量 (kg)</th>
                    <th className="border border-gray-400 px-4 py-2">回数</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map((menu: any, index: number) => (
                    <tr key={index}>
                        <td className="border border-gray-400 px-4 py-2">{menu.set}</td>
                        <td className="border border-gray-400 px-4 py-2">{menu.weight}</td>
                        <td className="border border-gray-400 px-4 py-2">{menu.reps}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function setError(arg0: string) {
    throw new Error('Function not implemented.')
}
