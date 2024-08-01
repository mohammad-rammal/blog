import Posts from "../Common/Posts/Posts"
import Banner from "./Banner"
import Discover from "./Discover"
import New from "./New"


function Ghest() {
    return (
        <>
            <Banner />
            <New />
            <div className="size py-7 flex flex-col-reverse md:flex-row gap-[7rem]">
                <div className="flex-[1.5]">
                    <Posts />
                </div>
                <div className="flex-[1] relative">
                    <Discover />
                </div>
            </div>
        </>

    )
}

export default Ghest