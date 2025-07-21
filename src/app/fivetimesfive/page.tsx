'use server'

import MenuTable from "../components/menu_table"

export default async function FiveTimesFivePage() {
    return (
        <main className="p-6">
        <h1 className='text-2xl font-bold p-6'>5x5メニュー</h1>
        <div className="p-6">
            <p>筋出力と筋肥大をバランスよく目指すことができるメニューです。</p>
        </div>
        <MenuTable></MenuTable>
        </main>
    )
}