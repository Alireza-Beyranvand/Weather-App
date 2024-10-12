'use server';


export default async function Divider({ name, value, style }) {
    return (
        <div className={`header flex justify-between py-4 px-6 ${style} text-white bg-slate-900 rounded`}>
            <div>
                {name}
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}
