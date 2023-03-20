import { ImageDiscovery } from "../assets/images";
import "./historysection.css";
import Button from "./Button";

const HistorySection = () => {
    return (
        <div className="history-section md:container bg-[#f6fcf9] relative md:mx-auto mt-36 max-md:mt-16 ">
                <div className="flex columns-2 max-md:columns-1 max-md:flex-wrap max-sm:flex-wrap">
                    <div className="history-left w-100 h-100 relative">
                        <img className="w-[220vh] h-[100%] max-2xl:w-[220vh] max-sm:rounded-lg" src={ImageDiscovery} alt="Discovery image" />
                    </div>
                    <div className="history-right pl-16 pt-[6%] max-2xl:pl-8 max-2xl:pt-12 max-sm:pt-2">
                        <h1 className="history-title leading-[80px] text-6xl font-semibold mt-3 max-md:text-2xl max-md:leading-[30px] max-2xl:text-[50px] max-sm:text-[30px]">
                            Discover Our History
                        </h1>
                        <p className="history-description break-all pr-24 text-xl text-[#555555] leading-8 mt-8 max-md:text-lg max-md:leading-6 max-sm:text-[20px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod iusto illum aliquid delectus accusantium
                            facilis
                        </p>
                        <p className="history-description break-all pr-24 text-xl text-[#555555] leading-8 mt-8 max-md:text-lg max-md:leading-6 max-sm:text-[20px] mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sequi maiores omnis ex quia aliquam debitis
                            saepe ut, facilis soluta numquam nulla nam modi
                            voluptatibus accusantium est hic. 
                        </p>
                        <Button
                            addClass={
                                "mt-12 py-4 px-8 rounded-[36px] max-2xl:mt-4 max-sm:mt-6 max-sm:w-26 max-sm:h-10 max-sm:text-[15px] max-sm:leading-[10px] mb-16"
                            }
                        >
                            Explore More
                        </Button>
                    </div>
                </div>
            </div>
    );
};

export default HistorySection;
