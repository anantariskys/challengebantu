import CompanyDetail from "@/sections/jobDetails/highlightedDetails/components/companyDetail";
import JobOverview from "@/sections/jobDetails/highlightedDetails/components/jobOverview";
import React from "react";

const HighlightedDetails = ({ jobDataId, formatDate }) => {
    return (
        <section className="w-[536px] max-[1018px]:w-full flex flex-col gap-5">
            <JobOverview jobDataId={jobDataId} />
            <CompanyDetail jobDataId={jobDataId} formatDate={formatDate} />
        </section>
    )
}

export default HighlightedDetails;