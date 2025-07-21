'use server'

import MenuTable from "../components/menu_table"

export default async function PiramidPage() {
    return (
        <main className="p-6">
        <h1 className='text-2xl font-bold p-6'>ピラミッドメニュー</h1>
        <div className="p-6">
            <p>筋出力よりも筋肥大向けと言われているメニューです。</p>
        </div>
        <MenuTable menuTemplate={process.env.NEXT_PUBLIC_PIRAMID_MENU}></MenuTable>
        </main>
    )
}