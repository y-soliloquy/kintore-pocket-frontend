'use client'


import { useEffect, useState } from 'react'

export default function MenuTable() {

    const [menus, setMenus] = useState([])
    const [error, setError] = useState('')

    const fetchMenu = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/5times5?template=5x5.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ weight: 100 }),
          })
    
          if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status}`)
          }
    
          const data = await res.json()
          setMenus(data)
        } catch (err) {
          console.error(err)
          setError('通信に失敗しました')
        }
      }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">5x5 メニュー</h1>
    
            <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={fetchMenu}
            >
            メニューを取得
            </button>
    
            {error && <p className="text-red-500 mt-2">{error}</p>}
    
            <ul className="mt-4">
            {menus.map((menu: any, index: number) => (
                <li key={index}>
                セット {menu.set}: {menu.weight}kg × {menu.reps}回
                </li>
            ))}
            </ul>
        </div>
    )
}