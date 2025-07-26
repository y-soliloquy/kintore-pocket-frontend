'use server'

import Link from "next/link"
import MenuTable from "../components/menu_table"

export default async function FiveTimesFivePage() {
    return (
        <main className="p-6">
        <Link className="p-6" href="/">TOPに戻る</Link>
        <h1 className='text-2xl font-bold p-6'>5x5メニュー</h1>
        <div className="p-6">
            <p>筋出力と筋肥大をバランスよく目指すことができるメニューです。</p>
        </div>
        <MenuTable menuTemplate={process.env.NEXT_PUBLIC_FIVE_TIMES_FIVE_MENU}></MenuTable>
        </main>
    )
}