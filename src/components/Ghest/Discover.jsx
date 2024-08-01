import { sectionActions, sections } from "../../data/Data"


function Discover() {
    return (
        <div className="sticky top-[6rem]">
            <div className="border-b border-gray-400 pb-7">
                <h2 className="font-semibold">Read more about what you want</h2>
                <div className="my-2 flex items-center gap-3 flex-wrap">
                    {sections.map((item, index) => (
                        <button key={index} className="bg-gray-200 py-2 px-3 text-sm rounded-full">{item}</button>
                    ))}
                </div>
                <button className="text-blue-600 text-sm py-3 hover:text-black1">See more</button>
            </div>
            <div className="flex items-center flex-wrap gap-3 leading-3 pt-8">
                {sectionActions.map((index,i) => (
                    <button key={i} className="text-md text-black1">
                        {index}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Discover