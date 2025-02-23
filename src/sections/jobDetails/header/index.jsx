import React, { useState } from "react";
import { Flip, toast } from "react-toastify";
import swal from "sweetalert2";

const Header = ({ jobDataId, formatDate }) => {
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const notify = () =>
    toast.success("Saved!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
  });

    return (
        <header className="container mx-auto flex flex-row justify-between items-center  max-md:px-[20px] max-[1018px]:flex-col max-md:gap-5">
            <div className="max-w-[800px] min-h-[96px] flex flex-row gap-8 items-center">
              <img src={ jobDataId.image } alt={ `logo ${jobDataId.name}` } className="max-w-[96px] max-h-[96px] min-h-[96px] min-w-[96px] max-sm:max-w-[100px] max-sm:max-h-[100px] rounded-full select-none" />

              <div className="flex flex-col gap-2 justify-center">
                <div className="font-weight-[500] text-[24px] max-sm:text-[20px] font-semibold flex flex-row flex-wrap items-center">
                  { jobDataId.name }
                  <div>
                    {
                      jobDataId.isFeatured && (
                    <span className="ml-3 text-[14px] font-w-400 text-[#FF4F4F] bg-[#FFEDED] rounded-[52px] py-[3px] px-[12px]">
                      Featured
                    </span>
                      )
                    }
                    <span className="ml-3 text-[14px] font-w-400 text-[#0066FF] bg-[#E8F1FF] rounded-[52px] py-[3px] px-[12px]">
                    { Number(jobDataId.id) % 5 === 0 ? 'Contract' : Number(jobDataId.id) % 4 === 0 ? 'Remote' : Number(jobDataId.id) % 3 === 0 ? 'Intern' : Number(jobDataId.id) % 2 === 0 ? 'Full Time' : 'Freelance'  }
                    </span>
                  </div>
                </div>

                <div className="text-[#767F8C] flex flex-row gap-2 max-md:gap-2 flex-wrap">
                  {/* URL company */}
                  <div className="flex flex-row gap-1 text-[16px] max-sm:text-[14px] text-[#474C54]">
                    <span>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.33334 11.3332C8.69121 11.8117 9.1478 12.2075 9.67213 12.494C10.1965 12.7805 10.7763 12.9508 11.3722 12.9935C11.9682 13.0362 12.5663 12.9502 13.1261 12.7414C13.6859 12.5326 14.1943 12.2058 14.6167 11.7832L17.1167 9.28322C17.8757 8.49738 18.2956 7.44487 18.2861 6.35238C18.2767 5.2599 17.8384 4.21485 17.0659 3.44231C16.2934 2.66978 15.2483 2.23157 14.1558 2.22208C13.0634 2.21259 12.0108 2.63256 11.225 3.39156L9.79167 4.81656"
                          stroke="#0066FF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.6667 9.66677C11.3088 9.18833 10.8522 8.79245 10.3279 8.50599C9.80355 8.21953 9.22374 8.04918 8.62779 8.00649C8.03184 7.96381 7.43368 8.0498 6.87388 8.25862C6.31408 8.46744 5.80574 8.79421 5.38333 9.21677L2.88333 11.7168C2.12434 12.5026 1.70436 13.5551 1.71386 14.6476C1.72335 15.7401 2.16155 16.7851 2.93409 17.5577C3.70662 18.3302 4.75167 18.7684 5.84416 18.7779C6.93665 18.7874 7.98916 18.3674 8.775 17.6084L10.2 16.1834"
                          stroke="#0066FF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <a href={`${ jobDataId.url }`} target="__blank">
                      { jobDataId.url }
                    </a>
                  </div>

                  {/* Phone number */}
                  <div className="flex flex-row gap-1 text-[16px] max-sm:text-[14px] text-[#474C54]">
                    <span>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2202_16974)">
                          <path
                            d="M8.66965 12.2016C9.44762 13.7921 10.7369 15.0755 12.3309 15.8463C12.4475 15.9015 12.5765 15.9255 12.7052 15.9157C12.8339 15.906 12.9579 15.8629 13.0648 15.7907L15.4119 14.2256C15.5157 14.1564 15.6352 14.1142 15.7594 14.1028C15.8837 14.0914 16.0088 14.1111 16.1235 14.1603L20.5144 16.0421C20.6636 16.1055 20.7881 16.2156 20.8693 16.3559C20.9504 16.4962 20.9838 16.659 20.9643 16.8199C20.8255 17.9059 20.2956 18.9041 19.4739 19.6276C18.6521 20.351 17.5948 20.7502 16.5 20.7502C13.1185 20.7502 9.87548 19.4069 7.48439 17.0158C5.0933 14.6247 3.75 11.3817 3.75 8.00021C3.75006 6.90538 4.14918 5.8481 4.87264 5.02635C5.5961 4.2046 6.59428 3.67472 7.68028 3.53593C7.84117 3.51646 8.00403 3.54981 8.14432 3.63094C8.28461 3.71208 8.39473 3.8366 8.4581 3.98577L10.3416 8.38057C10.3903 8.49424 10.4101 8.6182 10.3994 8.7414C10.3886 8.86461 10.3475 8.98323 10.2798 9.08672L8.72011 11.4698C8.64912 11.577 8.60716 11.7008 8.59831 11.8291C8.58947 11.9573 8.61405 12.0857 8.66965 12.2016V12.2016Z"
                            stroke="#0066FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2202_16974">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    { jobDataId.telephone_number }
                  </div>

                  {/* Email */}
                  <div className="flex flex-row gap-1 text-[16px] max-sm:text-[14px] text-[#474C54]">
                    <span>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.75L12 14L3 5.75"
                          stroke="#0A65CC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 5.75H21V18.5C21 18.6989 20.921 18.8897 20.7803 19.0303C20.6397 19.171 20.4489 19.25 20.25 19.25H3.75C3.55109 19.25 3.36032 19.171 3.21967 19.0303C3.07902 18.8897 3 18.6989 3 18.5V5.75Z"
                          stroke="#0A65CC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.3636 12.5L3.23126 19.038"
                          stroke="#0A65CC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.7688 19.0381L13.6363 12.5"
                          stroke="#0A65CC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    { jobDataId.email }
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[96px] max-sm:w-[80%] max-[1018px]:mt-2 flex flex-col justify-between">
              {/* button */}
              <div className="flex flex-row gap-3 justify-end">
                {/* Save job button */}
                <div
                  onClick={() => {
                    setSaved(!saved);
                    !saved ? notify() : "";
                  }}
                  className="rounded-[4px] bg-[#E7F0FA] p-[16px] cursor-pointer hover:bg-[#acd3ff] group duration-150 delay-150"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#E7F0FA"
                    className="group-hover:fill-[#0A65CC]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z"
                      stroke="#0A65CC"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`group-hover:${ saved ? 'fill-[#0A65CC]' : 'fill-[#E7F0FA]'} ${
                        saved ? "fill-[#0A65CC]" : ""
                      } duration-150 delay-150`}
                    />
                  </svg>
                </div>

                {/* Apply button */}
                <div
                  onClick={() => {
                    // setApplied(!applied)
                    !applied
                      ? new swal({
                          title: "Terms and conditions",
                          text: `You are about to apply to ${jobDataId.name} at ${jobDataId.company} . Please check your information first before you apply to this job.`,
                          input: "checkbox",
                          inputValue: 1,
                          inputPlaceholder:
                            "I agree with the terms and conditions",
                          confirmButtonText:
                            'Continue <i class="fa fa-arrow-right></i>',
                          showCancelButton: true,
                          allowOutsideClick: false,
                          inputValidator: function (result) {
                            return new Promise(function (resolve, reject) {
                              if (result) {
                                resolve();
                              } else {
                                reject("You need to agree with T&C");
                              }
                            });
                          },
                        }).then(function (result) {
                          if (result.isConfirmed) {
                            new swal({
                              type: "success",
                              text: "You agreed with T&C :)",
                            }).then(() => setApplied(!applied));
                          }
                        })
                      : "";
                    applied === true ? setApplied(false) : "";
                  }}
                  className={`rounded-[4px] ${
                    !applied ? "bg-[#042852]" : "bg-[#8a8a8a]"
                  } py-[16px] px-[36px] min-w-[192.25px]  cursor-pointer group max-sm:w-full`}
                >
                  <span
                    className={`text-white select-none flex flex-row max-sm:justify-end gap-3 ${
                      !applied
                        ? "group-hover:ease-in-out hover:translate-1 hover:scale-110"
                        : ""
                    } `}
                  >
                    {applied ? "Applied" : "Apply Now"}

                    {!applied && (
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5L19 12L12 19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                </div>
              </div>
              {/* expire job date */}
              <div className="self-end text-[14px]">
                <span className="text-[#767F8C]">Job expire in:</span>{" "}
                <span className="text-[#E05151]">{ formatDate(jobDataId.createdAt) }</span>
              </div>
            </div>
        </header>
    )
}

export default Header;