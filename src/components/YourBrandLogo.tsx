export function YourBrandLogo({
    size = "md",
    showText = true,
    className = "",
    stacked = false,
}: {
    size?: "sm" | "md" | "lg" | "xl";
    showText?: boolean;
    className?: string;
    stacked?: boolean;
}) {
    const sizeMap = {
        sm: {
            container: "w-8 h-8 rounded-xl",
            text: "text-[0.65rem]",
            svg: "w-4 h-4",
            gap: "gap-2",
        },
        md: {
            container: "w-10 h-10 rounded-2xl",
            text: "text-[0.8rem]",
            svg: "w-5 h-5",
            gap: "gap-3",
        },
        lg: {
            container: "w-14 h-14 rounded-2xl",
            text: "text-sm",
            svg: "w-7 h-7",
            gap: "gap-3.5",
        },
        xl: {
            container: "w-20 h-20 rounded-[1.75rem]",
            text: "text-lg",
            svg: "w-10 h-10",
            gap: "gap-5",
        },
    };
    const s = sizeMap[size];

    return (
        <div
            className={`flex ${stacked ? "flex-col-reverse items-center justify-center text-center" : "items-center"} ${s.gap} ${className}`}
        >
            <div
                className={`${s.container} relative flex items-center justify-center bg-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(99,102,241,0.1)] shrink-0 overflow-hidden`}
            >
                <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    className={`${s.svg} relative z-10 drop-shadow-sm`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="topFace"
                            x1="4"
                            y1="10"
                            x2="28"
                            y2="10"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6366F1" />
                            <stop offset="1" stopColor="#A855F7" />
                        </linearGradient>
                        <linearGradient
                            id="leftFace"
                            x1="10"
                            y1="17"
                            x2="10"
                            y2="31"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4F46E5" />
                            <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient
                            id="rightFace"
                            x1="22"
                            y1="17"
                            x2="22"
                            y2="31"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9333EA" />
                            <stop offset="1" stopColor="#EC4899" />
                        </linearGradient>
                        <linearGradient
                            id="glow"
                            x1="16"
                            y1="3"
                            x2="16"
                            y2="31"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFFFFF" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M16 3L4 10L16 17L28 10L16 3Z"
                        fill="url(#topFace)"
                        stroke="url(#glow)"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 10V24L16 31V17L4 10Z"
                        fill="url(#leftFace)"
                        stroke="#FFFFFF"
                        strokeOpacity="0.2"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28 10V24L16 31V17L28 10Z"
                        fill="url(#rightFace)"
                        stroke="#FFFFFF"
                        strokeOpacity="0.2"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 8L10 11.5L16 15L22 11.5L16 8Z"
                        fill="#FFFFFF"
                        fillOpacity="0.2"
                    />
                </svg>
            </div>

            {showText && (
                <div
                    className={`${s.text} font-extrabold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 ${!stacked ? "mt-[1px] whitespace-nowrap" : "flex flex-col items-center leading-[1.1]"}`}
                >
                    {stacked ? (
                        <>
                            <span>YOUR</span>
                            <span>BRAND</span>
                        </>
                    ) : (
                        "YOUR BRAND"
                    )}
                </div>
            )}
        </div>
    );
}
