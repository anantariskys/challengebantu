import ShareButton from "@/sections/jobDetails/jobDescription/components/shareButton";
import React from "react";

const JobDescription = ({ jobDataId }) => {
    return (
        <section className="w-full">
            <div className="flex flex-col gap-5">
            <h1 className="font-weight-[500] text-[18px] max-sm:text-[16px] font-medium">
                Job Description
            </h1>
            <p className="text-[16px] text-[#5E6670] max-sm:text-[14px] whitespace-pre-line [&>*]:mb-4">
                { jobDataId.description }
            </p>
            <p className="text-[16px] text-[#5E6670] max-sm:text-[14px]">
                Nam dapibus consectetur erat in euismod. Cras urna augue, mollis
                venenatis augue sed, porttitor aliquet nibh. Sed tristique
                dictum elementum. Nulla imperdiet sit amet quam eget lobortis.
                Etiam in neque sit amet orci interdum tincidunt.
            </p>

            <h1 className="font-weight-[500] text-[18px] max-sm:text-[16px] font-medium">
                Responsibilites
            </h1>
            <ul className="text-[16px] text-[#5E6670]">
                {jobDataId.responsibility && jobDataId.responsibility.split('.').filter(item => item.trim() !== '').map((item, index) => (
                <li key={index}>• {item.trim()}.</li>
                ))}
            </ul>
            </div>

            {/* Share */}
            <ShareButton />
        </section>
    );
}

export default JobDescription;