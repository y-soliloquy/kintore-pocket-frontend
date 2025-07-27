'use server'

import Link from "next/link"
import MenuTable from "../components/menu_table"

export default async function ThreeTimesThreePage() {
    return (
        <main className="p-6">
        <Link className="p-6" href="/">TOPに戻る</Link>
        <h1 className='text-2xl font-bold p-6'>3x3法メニュー</h1>
        <div className="p-6">
            <p>筋出力を上げることに向いているメニューです。</p>
        </div>
        <MenuTable menuTemplate={process.env.NEXT_PUBLIC_PIRAMID_MENU}></MenuTable>
        </main>
    )
}