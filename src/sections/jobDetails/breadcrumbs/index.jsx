import React from "react";

const Breadcrumbs = ({ id }) => {
    return (
        <div className="bg-[#F1F2F4]">
            <div className="container mx-auto flex flex-row justify-between items-center py-[24px] ">
                <div className="font-weight-[500] text-[18px] max-sm:hidden select-none">
                    Job Details
                </div>

                <div>
                    <span className="text-[#767F8C]">
                        {" "}
                        <a href="/">Home</a> / <a href="/job">Find Job</a> /{" "}
                    </span>{" "}
                    <a href={`/job/${id}`}>Job Details</a>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;