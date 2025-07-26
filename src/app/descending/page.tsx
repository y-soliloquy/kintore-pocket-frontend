'use server'

import Link from "next/link"
import MenuTable from "../components/menu_table"

export default async function PiramidPage() {
    return (
        <main className="p-6">
        <Link className="p-6" href="/">TOPに戻る</Link>
        <h1 className='text-2xl font-bold p-6'>ディセンディング法メニュー</h1>
        <div className="p-6">
            <p>筋出力よりも筋肥大向けと言われているメニューです。</p>
            <p>高重量を扱いながら、筋持久力の限界まで筋肉を追い込むことができます。</p>
        </div>
        <MenuTable menuTemplate={process.env.NEXT_PUBLIC_DESCENDING_MENU}></MenuTable>
        </main>
    )
}