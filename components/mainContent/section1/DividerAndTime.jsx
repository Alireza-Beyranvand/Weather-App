'use server';

export default async function DividerAndTime({ cityName }) {

    const timeDate = async () => {
        try {
            const result = await fetch(`https://api.keybit.ir/time/?timezone=Asia/tehran`)
            if (!result.ok) {
                console.log("error in fetch data")
            } else {
                return result.json();
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    const time = await timeDate();

    const showTime = time?.time24?.full?.en
    const showDate = time?.date?.full?.official?.iso?.en


    return (
        (
            <div className={`header flex justify-between py-4 px-6  text-white bg-slate-900 rounded`}>
                <div>
                    {cityName}
                </div>
                <div>
                    {showTime} | {showDate}
                </div>
            </div>
        )
    )
}
