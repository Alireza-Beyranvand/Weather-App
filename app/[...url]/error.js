'use client';


export default function Error({ error, reset }) {
    return (
        <>
            <div className="text-center text-white">مشکلی پیش امده {error}</div>
            <button className="mx-auto" onClick={() => reset()}>دوباره امتحان کنید !</button>
        </>
    )
};
