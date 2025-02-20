import React from 'react'

const CompanyDetail = ({ jobDataId, formatDate }) => {
    return(
        <>
            <div className='w-full h-[438px] border border-[#E7F0FA] rounded-[8px] p-[32px]'>
                <div className='flex gap-5'>
                    <img src={ jobDataId.image } alt={ `logo ${jobDataId.name}` } className='max-w-[64px] max-h-[64px] rounded-md' />

                    <div className='flex flex-col gap-2 '>
                        <p className='text-[20px] text-[#18191C]'>
                            { jobDataId.name }
                        </p>
                        <p className='text-[14px] text-[#767F8C]'>
                            { jobDataId.category }
                        </p>
                    </div>
                </div>

                <div className='flex flex-col text-[14px] mt-7 gap-3'>
                    <p className='flex flex-row justify-between'>
                        <span className='text-[#5E6670]'>Founded in:</span>
                        <span>{ formatDate(jobDataId.founded_in) }</span>
                    </p>
                    <p className='flex flex-row justify-between'>
                        <span className='text-[#5E6670]'>Organization type:</span>
                        <span> { jobDataId.organization_type ? 'Public Company' : 'Private Company' } </span>
                    </p>
                    <p className='flex flex-row justify-between'>
                        <span className='text-[#5E6670]'>Company size:</span>
                        <span> { jobDataId.company_size } Employers</span>
                    </p>
                    <p className='flex flex-row justify-between'>
                        <span className='text-[#5E6670]'>Phone:</span>
                        <span> { jobDataId.telephone_number } </span>
                    </p>
                    <p className='flex flex-row justify-between'>
                        <span className='text-[#5E6670]'>Email:</span>
                        <span> { jobDataId.email } </span>
                    </p>
                    <p className='flex flex-row justify-between'>
                        <span className='text-[#5E6670]'>Website:</span>
                        <span><a href={ jobDataId.url } target='__blank'>{ jobDataId.url }</a></span>
                    </p>
                </div>

                <div className='flex flex-row gap-3 mt-5'>
                    <div className='h-[40px] w-[40px] bg-[#E7F0FA] rounded-[4px] flex justify-center items-center cursor-pointer hover:bg-[#0A65CC] group'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33328 16H6.16101V8.1131H4V5.54528H6.16092V3.7181C6.16092 1.55288 7.1167 0 10.2804 0C10.9495 0 12 0.134507 12 0.134507V2.51887H10.8966C9.7724 2.51887 9.33345 2.85992 9.33345 3.80281V5.54528H11.9579L11.7242 8.1131H9.33336L9.33328 16Z" fill="#0A65CC" className="group-hover:fill-white"/>
                        </svg>
                    </div>
                    
                    <div className='h-[40px] w-[40px] bg-[#E7F0FA] rounded-[4px] flex justify-center items-center cursor-pointer hover:bg-[#0A65CC] group'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_2202_16940" fill="white">
                            <path d="M5.62925 16.2026C12.3841 16.2026 16.0782 10.6385 16.0782 5.81351C16.0782 5.65549 16.0749 5.4982 16.0678 5.34155C16.7865 4.82444 17.4068 4.18418 17.8996 3.45078C17.2416 3.74164 16.5335 3.93741 15.7907 4.02567C16.5489 3.57365 17.131 2.85852 17.4056 2.0061C16.6847 2.43129 15.896 2.73103 15.0736 2.8924C14.4035 2.18266 13.4494 1.73877 12.393 1.73877C10.3649 1.73877 8.72036 3.37397 8.72036 5.38961C8.72036 5.67617 8.75263 5.95482 8.81564 6.22218C5.76343 6.06948 3.05694 4.61652 1.24562 2.40721C0.919389 2.96444 0.747795 3.59775 0.748365 4.24245C0.748365 5.50926 1.39668 6.62756 2.38261 7.28183C1.79942 7.26413 1.22903 7.1075 0.719405 6.82514C0.718859 6.84047 0.718859 6.85541 0.718859 6.87179C0.718859 8.64009 1.98471 10.1165 3.66509 10.4511C3.3495 10.5365 3.02383 10.5797 2.69673 10.5795C2.46051 10.5795 2.23029 10.5564 2.00654 10.5137C2.47408 11.9645 3.82979 13.0203 5.43716 13.0498C4.18022 14.0293 2.59686 14.6127 0.87599 14.6127C0.583247 14.613 0.290744 14.5961 0 14.5621C1.6253 15.5979 3.55519 16.2023 5.62943 16.2023"/>
                            </mask>
                            <path d="M5.62925 16.2026C12.3841 16.2026 16.0782 10.6385 16.0782 5.81351C16.0782 5.65549 16.0749 5.4982 16.0678 5.34155C16.7865 4.82444 17.4068 4.18418 17.8996 3.45078C17.2416 3.74164 16.5335 3.93741 15.7907 4.02567C16.5489 3.57365 17.131 2.85852 17.4056 2.0061C16.6847 2.43129 15.896 2.73103 15.0736 2.8924C14.4035 2.18266 13.4494 1.73877 12.393 1.73877C10.3649 1.73877 8.72036 3.37397 8.72036 5.38961C8.72036 5.67617 8.75263 5.95482 8.81564 6.22218C5.76343 6.06948 3.05694 4.61652 1.24562 2.40721C0.919389 2.96444 0.747795 3.59775 0.748365 4.24245C0.748365 5.50926 1.39668 6.62756 2.38261 7.28183C1.79942 7.26413 1.22903 7.1075 0.719405 6.82514C0.718859 6.84047 0.718859 6.85541 0.718859 6.87179C0.718859 8.64009 1.98471 10.1165 3.66509 10.4511C3.3495 10.5365 3.02383 10.5797 2.69673 10.5795C2.46051 10.5795 2.23029 10.5564 2.00654 10.5137C2.47408 11.9645 3.82979 13.0203 5.43716 13.0498C4.18022 14.0293 2.59686 14.6127 0.87599 14.6127C0.583247 14.613 0.290744 14.5961 0 14.5621C1.6253 15.5979 3.55519 16.2023 5.62943 16.2023" fill="#1DA1F2" className="group-hover:fill-white"/>
                            <path d="M16.0678 5.34155L13.8671 2.28261L12.2101 3.47469L12.3034 5.51379L16.0678 5.34155ZM17.8996 3.45078L21.0275 5.5524L28.2954 -5.26449L16.3761 0.00416052L17.8996 3.45078ZM15.7907 4.02567L13.861 0.788914L16.2353 7.76767L15.7907 4.02567ZM17.4056 2.0061L20.9923 3.16171L24.0338 -6.27823L15.4912 -1.23971L17.4056 2.0061ZM15.0736 2.8924L12.3337 5.47948L13.7602 6.99027L15.7992 6.59021L15.0736 2.8924ZM8.81564 6.22218L8.62735 9.98579L13.6332 10.2362L12.4835 5.35774L8.81564 6.22218ZM1.24562 2.40721L4.15974 0.018049L0.728203 -4.16748L-2.00635 0.503315L1.24562 2.40721ZM0.748365 4.24245H4.51668L4.51668 4.23912L0.748365 4.24245ZM2.38261 7.28183L2.26824 11.0484L15.4782 11.4495L4.46624 4.14197L2.38261 7.28183ZM0.719405 6.82514L2.54569 3.52895L-2.82799 0.55161L-3.04652 6.69109L0.719405 6.82514ZM3.66509 10.4511L4.65 14.0884L4.40089 6.75528L3.66509 10.4511ZM2.69673 10.5795L2.69891 6.81123H2.69673V10.5795ZM2.00654 10.5137L2.71301 6.81223L-3.52943 5.62079L-1.58013 11.6696L2.00654 10.5137ZM5.43716 13.0498L7.75348 16.0221L16.1516 9.47751L5.50632 9.28209L5.43716 13.0498ZM0.87599 14.6127V10.8444L0.872803 10.8444L0.87599 14.6127ZM0 14.5621L0.436966 10.8193L-2.02521 17.74L0 14.5621ZM5.62925 19.9709C14.8791 19.9709 19.8465 12.2802 19.8465 5.81351H12.3098C12.3098 8.99673 9.88916 12.4342 5.62925 12.4342V19.9709ZM19.8465 5.81351C19.8465 5.60417 19.8422 5.38913 19.8321 5.16932L12.3034 5.51379C12.3077 5.60726 12.3098 5.70681 12.3098 5.81351H19.8465ZM18.2685 8.40049C19.3499 7.62246 20.2844 6.65826 21.0275 5.5524L14.7718 1.34915C14.5293 1.71009 14.2232 2.02642 13.8671 2.28261L18.2685 8.40049ZM16.3761 0.00416052C16.0619 0.143041 15.7176 0.239539 15.346 0.283684L16.2353 7.76767C17.3495 7.63528 18.4213 7.34024 19.4231 6.89739L16.3761 0.00416052ZM17.7203 7.26244C19.2454 6.35326 20.4296 4.90836 20.9923 3.16171L13.8189 0.85048C13.8258 0.829071 13.8349 0.814439 13.8418 0.805943C13.8481 0.798025 13.8544 0.792866 13.861 0.788914L17.7203 7.26244ZM15.4912 -1.23971C15.1386 -1.03175 14.752 -0.884667 14.3481 -0.805406L15.7992 6.59021C17.04 6.34674 18.2308 5.89434 19.32 5.2519L15.4912 -1.23971ZM17.8136 0.305321C16.4583 -1.13004 14.5247 -2.02955 12.393 -2.02955V5.50708C12.393 5.50708 12.3918 5.50708 12.3896 5.50685C12.3874 5.50661 12.3846 5.5062 12.3814 5.50552C12.3748 5.50412 12.3681 5.50197 12.3619 5.49924C12.3504 5.49416 12.3414 5.48762 12.3337 5.47948L17.8136 0.305321ZM12.393 -2.02955C8.30467 -2.02955 4.95204 1.27194 4.95204 5.38961H12.4887C12.4887 5.40254 12.4853 5.42361 12.4764 5.44444C12.4686 5.46268 12.4597 5.47402 12.4529 5.48075C12.4462 5.48746 12.4371 5.49405 12.4245 5.49935C12.4179 5.50212 12.411 5.50424 12.4044 5.5056C12.4011 5.50626 12.3984 5.50665 12.3962 5.50686C12.394 5.50708 12.3929 5.50708 12.393 5.50708V-2.02955ZM4.95204 5.38961C4.95204 5.95989 5.01637 6.5289 5.14781 7.08662L12.4835 5.35774C12.4889 5.38073 12.4887 5.39245 12.4887 5.38961H4.95204ZM9.00393 2.45857C7.04984 2.36081 5.32042 1.43375 4.15974 0.018049L-1.66849 4.79638C0.79347 7.79929 4.47701 9.77815 8.62735 9.98579L9.00393 2.45857ZM-2.00635 0.503315C-2.67072 1.6381 -3.02111 2.92963 -3.01995 4.24578L4.51668 4.23912C4.5167 4.26587 4.5095 4.29079 4.4976 4.31111L-2.00635 0.503315ZM-3.01995 4.24245C-3.01995 6.82638 -1.69303 9.09978 0.298994 10.4217L4.46624 4.14197C4.47871 4.15025 4.48967 4.16133 4.49902 4.17836C4.50417 4.18774 4.50892 4.19919 4.51228 4.21213C4.51578 4.22559 4.51668 4.23653 4.51668 4.24245H-3.01995ZM2.49699 3.51526C2.51285 3.51574 2.5295 3.51998 2.54569 3.52895L-1.10688 10.1213C-0.0714354 10.695 1.08599 11.0125 2.26824 11.0484L2.49699 3.51526ZM-3.04652 6.69109C-3.04986 6.78468 -3.04946 6.86684 -3.04946 6.87179H4.48717C4.48717 6.86041 4.4872 6.86955 4.48709 6.88146C4.48697 6.89599 4.4866 6.92363 4.48533 6.95919L-3.04652 6.69109ZM-3.04946 6.87179C-3.04946 10.486 -0.466088 13.4709 2.9293 14.1468L4.40089 6.75528C4.42841 6.76076 4.44646 6.77434 4.45702 6.78701C4.46341 6.79469 4.4713 6.80677 4.47772 6.82415C4.48478 6.84326 4.48717 6.86118 4.48717 6.87179H-3.04946ZM2.68018 6.81374C2.68651 6.81203 2.69278 6.81122 2.69891 6.81123L2.69455 14.3479C3.35489 14.3482 4.01248 14.261 4.65 14.0884L2.68018 6.81374ZM2.69673 6.81123C2.70167 6.81123 2.706 6.81148 2.70931 6.8118C2.71258 6.81211 2.71392 6.81241 2.71301 6.81223L1.30007 14.2152C1.74661 14.3005 2.2134 14.3479 2.69673 14.3479V6.81123ZM-1.58013 11.6696C-0.62828 14.6232 2.11926 16.7578 5.36799 16.8175L5.50632 9.28209C5.50914 9.28215 5.51856 9.28307 5.53047 9.28723C5.54124 9.29099 5.54979 9.29587 5.55623 9.3007C5.5662 9.30819 5.58243 9.32441 5.59321 9.35788L-1.58013 11.6696ZM3.12083 10.0774C2.50441 10.5578 1.73091 10.8444 0.87599 10.8444V18.381C3.46282 18.381 5.85602 17.5008 7.75348 16.0221L3.12083 10.0774ZM0.872803 10.8444C0.727132 10.8445 0.581598 10.8361 0.436966 10.8193L-0.436966 18.305C-0.00010999 18.356 0.439363 18.3814 0.879178 18.381L0.872803 10.8444ZM-2.02521 17.74C0.183207 19.1474 2.81205 19.9706 5.62943 19.9706V12.434C4.29832 12.434 3.06739 12.0485 2.02521 11.3843L-2.02521 17.74Z" fill="#1DA1F2" mask="url(#path-1-inside-1_2202_16940)" className="group-hover:fill-white"/>
                        </svg>
                    </div>
                    
                    <div className='h-[40px] w-[40px] bg-[#E7F0FA] rounded-[4px] flex justify-center items-center cursor-pointer hover:bg-[#0A65CC] group'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33412 8C5.33412 6.5273 6.52766 5.33312 8.00036 5.33312C9.47307 5.33312 10.6672 6.5273 10.6672 8C10.6672 9.4727 9.47307 10.6669 8.00036 10.6669C6.52766 10.6669 5.33412 9.4727 5.33412 8ZM3.89246 8C3.89246 10.2688 5.73156 12.1079 8.00036 12.1079C10.2692 12.1079 12.1083 10.2688 12.1083 8C12.1083 5.7312 10.2692 3.8921 8.00036 3.8921C5.73156 3.8921 3.89246 5.7312 3.89246 8ZM11.3109 3.72922C11.3108 3.91909 11.367 4.10471 11.4725 4.26263C11.5779 4.42054 11.7278 4.54365 11.9032 4.61638C12.0785 4.68911 12.2716 4.7082 12.4578 4.67123C12.644 4.63426 12.8151 4.5429 12.9494 4.40869C13.0838 4.27449 13.1753 4.10347 13.2124 3.91726C13.2495 3.73106 13.2306 3.53802 13.158 3.36258C13.0854 3.18713 12.9624 3.03715 12.8046 2.9316C12.6467 2.82605 12.4611 2.76968 12.2713 2.7696H12.2709C12.0164 2.76972 11.7723 2.87085 11.5923 3.05077C11.4123 3.2307 11.3111 3.47471 11.3109 3.72922ZM4.76836 14.5118C3.9884 14.4763 3.56446 14.3464 3.28273 14.2366C2.90923 14.0912 2.64273 13.918 2.36254 13.6382C2.08235 13.3584 1.90891 13.0922 1.76414 12.7187C1.65432 12.4371 1.5244 12.013 1.48894 11.233C1.45016 10.3898 1.44241 10.1364 1.44241 8.00006C1.44241 5.86368 1.4508 5.61107 1.48894 4.7671C1.52446 3.98714 1.65534 3.5639 1.76414 3.28147C1.90955 2.90797 2.08273 2.64147 2.36254 2.36128C2.64235 2.08109 2.90859 1.90765 3.28273 1.76288C3.56433 1.65306 3.9884 1.52314 4.76836 1.48768C5.61163 1.4489 5.86494 1.44115 8.00036 1.44115C10.1358 1.44115 10.3894 1.44954 11.2333 1.48768C12.0133 1.5232 12.4365 1.65408 12.719 1.76288C13.0925 1.90765 13.359 2.08147 13.6391 2.36128C13.9193 2.64109 14.0921 2.90797 14.2375 3.28147C14.3474 3.56307 14.4773 3.98714 14.5127 4.7671C14.5515 5.61107 14.5593 5.86368 14.5593 8.00006C14.5593 10.1364 14.5515 10.3891 14.5127 11.233C14.4772 12.013 14.3467 12.4369 14.2375 12.7187C14.0921 13.0922 13.919 13.3587 13.6391 13.6382C13.3593 13.9178 13.0925 14.0912 12.719 14.2366C12.4374 14.3464 12.0133 14.4764 11.2333 14.5118C10.3901 14.5506 10.1367 14.5583 8.00036 14.5583C5.86398 14.5583 5.61137 14.5506 4.76836 14.5118ZM4.70213 0.048448C3.85048 0.087232 3.26853 0.222272 2.7603 0.420032C2.23397 0.624256 1.7884 0.89824 1.34315 1.34278C0.897902 1.78733 0.624622 2.2336 0.420398 2.75994C0.222638 3.26848 0.0875982 3.85011 0.0488142 4.70176C0.00939021 5.55475 0.000366211 5.82746 0.000366211 8C0.000366211 10.1725 0.00939021 10.4452 0.0488142 11.2982C0.0875982 12.15 0.222638 12.7315 0.420398 13.2401C0.624622 13.7661 0.897966 14.2129 1.34315 14.6572C1.78833 15.1016 2.23397 15.3752 2.7603 15.58C3.26948 15.7777 3.85048 15.9128 4.70213 15.9516C5.55556 15.9903 5.82782 16 8.00036 16C10.1729 16 10.4456 15.991 11.2986 15.9516C12.1503 15.9128 12.7319 15.7777 13.2404 15.58C13.7664 15.3752 14.2123 15.1018 14.6576 14.6572C15.1028 14.2127 15.3755 13.7661 15.5803 13.2401C15.7781 12.7315 15.9138 12.1499 15.9519 11.2982C15.9907 10.4446 15.9997 10.1725 15.9997 8C15.9997 5.82746 15.9907 5.55475 15.9519 4.70176C15.9131 3.85005 15.7781 3.26816 15.5803 2.75994C15.3755 2.23392 15.1021 1.78803 14.6576 1.34278C14.213 0.897536 13.7664 0.624256 13.2411 0.420032C12.7319 0.222272 12.1503 0.086592 11.2992 0.048448C10.4463 0.009664 10.1735 0 8.001 0C5.82846 0 5.55556 0.009024 4.70213 0.048448Z" fill="#0A65CC" className="group-hover:fill-white"/>
                        </svg>
                    </div>
                    
                    <div className='h-[40px] w-[40px] bg-[#E7F0FA] rounded-[4px] flex justify-center items-center cursor-pointer hover:bg-[#0A65CC] group'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.35464 13.6327L5.07201 13.5714C4.00914 13.5501 2.94366 13.5927 1.90168 13.3715C0.316517 13.0411 0.204224 11.4209 0.0867073 10.0618C-0.0752042 8.15113 -0.0125288 6.20581 0.293014 4.31112C0.465371 3.24786 1.14435 2.61363 2.19417 2.54434C5.73794 2.29385 9.30522 2.32316 12.8412 2.44041C13.2146 2.45107 13.5906 2.5097 13.9589 2.57632C15.7765 2.90143 15.8208 4.73749 15.9384 6.28309C16.0559 7.84468 16.0063 9.41426 15.7817 10.9652C15.6015 12.2496 15.2568 13.3262 13.8022 13.4301C11.9794 13.5661 10.1983 13.6753 8.37031 13.6407C8.37031 13.6327 8.35986 13.6327 8.35464 13.6327ZM6.42476 10.3816C7.79839 9.57681 9.14592 8.78536 10.5117 7.98591C9.13547 7.18114 7.79056 6.38968 6.42476 5.59024V10.3816Z" fill="#0A65CC" className="group-hover:fill-white"/>
                        </svg>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CompanyDetail