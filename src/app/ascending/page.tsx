'use server'

import MenuTable from "../components/menu_table"

export default async function AscengingPage() {
    return (
        <main className="p-6">
        <h1 className='text-2xl font-bold p-6'>アセンディング法</h1>
        <div className="p-6">
            <p>セットを重ねるたびに扱う重要を増やし、最終的に高重量を扱うセットでトレーニングを締めるメニューです。</p>
        </div>
        <MenuTable menuTemplate={process.env.NEXT_PUBLIC_ASCENDING_MENU}></MenuTable>
        </main>
    )
}