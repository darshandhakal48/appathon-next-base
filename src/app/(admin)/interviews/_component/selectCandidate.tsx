import { UserSearch, ChevronDown, Eye } from "lucide-react";
import Image from "next/image";
import profile from "@/../public/_static/profile-pic.jpg";
import { useState } from "react";

function SelectCandidate() {
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleDropdown = () => {
        setOpenDropdown((prev) => !prev);
    };
    return (
        <>
            <div className="relative">
                <button
                    className="flex gap-6 items-center bg-primary-surface-subtle rounded-[10px] p-4 text-muted cursor-pointer"
                    onClick={handleDropdown}
                >
                    <span className="flex items-center gap-2">
                        <span>
                            <UserSearch height={18} />
                        </span>
                        <span className="text-lg font-semibold">
                            Select Candiadate
                        </span>
                    </span>
                    <span>
                        <ChevronDown height={18} />
                    </span>
                </button>

                {/* dropdown */}
                {openDropdown ? (
                    <>
                        <div className="absolute bg-white shadow-xl w-full flex flex-col rounded-[10px] p-2 top-full mt-2 gap-4 ">
                            <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                                <div className="flex items-center gap-2">
                                    <span className="h-10 w-10 ">
                                        <Image
                                            src={profile}
                                            alt="Candidate profile picture"
                                            className="h-full w-full rounded-full object-fit"
                                        />
                                    </span>
                                    <span className="text-sm">Sakura Chan</span>
                                </div>
                                <span>
                                    <Eye className="h-4 w-4 text-gray-400" />
                                </span>
                            </div>

                            <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                                <div className="flex items-center gap-2">
                                    <span className="h-10 w-10 ">
                                        <Image
                                            src={profile}
                                            alt="Candidate profile picture"
                                            className="h-full w-full rounded-full object-fit"
                                        />
                                    </span>
                                    <span className="text-sm">Sakura Chan</span>
                                </div>
                                <span>
                                    <Eye className="h-4 w-4 text-gray-400" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-1 shadow-sm rounded-full">
                                <div className="flex items-center gap-2">
                                    <span className="h-10 w-10 ">
                                        <Image
                                            src={profile}
                                            alt="Candidate profile picture"
                                            className="h-full w-full rounded-full object-fit"
                                        />
                                    </span>
                                    <span className="text-sm">Sakura Chan</span>
                                </div>
                                <span>
                                    <Eye className="h-4 w-4 text-gray-400" />
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default SelectCandidate;
