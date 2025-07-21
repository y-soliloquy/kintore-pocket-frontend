'use server'

import MenuTable from "../components/menu_table"

export default async function FiveTimesFivePage() {
    return (
        <main className="p-6">
        <h1 className='text-2xl font-bold p-6'>5x5メニュー</h1>
        <MenuTable></MenuTable>
        </main>
    )
}