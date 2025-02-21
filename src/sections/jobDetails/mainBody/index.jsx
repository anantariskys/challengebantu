import React from "react";
import JobDescription from "../jobDescription";
import HighlightedDetails from "../highlightedDetails";

const MainBody = ({ jobDataId, formatDate }) => {
    return (
        <main className="container mx-auto w-full flex flex-row max-md:px-[20px] gap-10 max-[1018px]:-mt-3 max-[1018px]:flex-col">
            <JobDescription jobDataId={jobDataId} />
            <HighlightedDetails jobDataId={jobDataId} formatDate={formatDate} />
        </main>
    )
}

export default MainBody;