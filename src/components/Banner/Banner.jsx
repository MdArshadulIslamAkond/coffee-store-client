
const Banner = () => {
    return (
        <div>
            <div className="bg-[url('/src/assets/images/more/3.png')] h-[800px] grid grid-cols-2 gap-4">
            <div></div>
            <div className="self-center ms-16 mt-20">
                <h2 className="text-[35px] text-white mb-4">Would you like a Cup of Delicious Coffee?</h2>
                <p className="text-[16px] text-[#FFFFFF] mb-8">
                {`It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.`}
                </p>
                <button className="bg-[#E3B577] w-32"><span className="py-[9px] px-3">Learn More</span></button>
            </div>
        </div>
        <div className="bg-[#ECEAE3] h-[300px] ">
            <div className="flex justify-center space-x-4 py-14">
            <div className="w-[301px]">
                <img src="/src/assets/images/icons/1.png" alt="" />
                <h2 className="text-2xl mt-4">Awesome Aroma</h2>
                <p className="text-[15px]">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="w-[301px]">
                <img src="/src/assets/images/icons/2.png" alt="" />
                <h2 className="text-2xl mt-4">High Quality</h2>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className="w-[301px]">
                <img src="/src/assets/images/icons/3.png" alt="" />
                <h2 className="text-2xl mt-4">Pure Grades</h2>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className="w-[301px]">
                <img src="/src/assets/images/icons/4.png" alt="" />
                <h2 className="text-2xl mt-4">Proper Roasting</h2>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>

            </div>
        </div>
        </div>
    );
};

export default Banner;
// w-[724px] h-[224px] 