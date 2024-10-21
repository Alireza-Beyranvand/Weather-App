
'use server';

export default async function Divider2({ cityName, weatherData }) {

    return (
        <div className={`header flex justify-between py-4 px-6 mt-7  border-b  text-white bg-slate-900 rounded`}>
            <div className="mx-auto">
                The weather is in the future !
            </div>
        </div>
    )
}
