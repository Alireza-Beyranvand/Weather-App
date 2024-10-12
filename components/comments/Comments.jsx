'use server';


export default async function Comments() {
    return (
        <div className="flex items-center my-36">
            <div className=" bg-gray-800 text-white mx-auto p-6 rounded-2xl shadow-2xl drop-shadow-2xl w-[40rem] text-center">
                <h1 className="text-3xl font-semibold mb-4">Your opinion is important !</h1>
                <p className="my-4">Please rate us : </p>
                <form className="flex items-center justify-center">
                    <div className="flex">
                        <input type="radio" id="star1" name="rating" value="1" className="hidden" />
                        <label for="star1" className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-500">★</label>
                        <input type="radio" id="star2" name="rating" value="2" className="hidden" />
                        <label for="star2" className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-500">★</label>
                        <input type="radio" id="star3" name="rating" value="3" className="hidden" />
                        <label for="star3" className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-500">★</label>
                        <input type="radio" id="star4" name="rating" value="4" className="hidden" />
                        <label for="star4" className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-500">★</label>
                        <input type="radio" id="star5" name="rating" value="5" className="hidden" />
                        <label for="star5" className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-500">★</label>
                    </div>
                </form>
            </div>
        </div>
    )
};
