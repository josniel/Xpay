export default function Faqs({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_1167_262)">
                <path
                    d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7ZM7 1.3125C5.49158 1.3125 4.04494 1.91172 2.97833 2.97833C1.91172 4.04494 1.3125 5.49158 1.3125 7C1.3125 8.50842 1.91172 9.95506 2.97833 11.0217C4.04494 12.0883 5.49158 12.6875 7 12.6875C8.50842 12.6875 9.95506 12.0883 11.0217 11.0217C12.0883 9.95506 12.6875 8.50842 12.6875 7C12.6875 5.49158 12.0883 4.04494 11.0217 2.97833C9.95506 1.91172 8.50842 1.3125 7 1.3125ZM6.055 5.32438C5.97726 5.48009 5.84172 5.59855 5.67664 5.65368C5.51156 5.70882 5.33134 5.69612 5.17562 5.61837C5.01991 5.54063 4.90145 5.40422 4.84632 5.23914C4.79118 5.07406 4.80388 4.89384 4.88163 4.73812C5.0295 4.4415 5.26312 4.12475 5.6245 3.88325C5.98938 3.64 6.44788 3.5 7 3.5C7.51423 3.49649 8.01611 3.65744 8.43237 3.95938C8.8725 4.28925 9.1875 4.80375 9.1875 5.46875C9.1875 5.86075 9.08687 6.195 8.89962 6.475C8.72025 6.74363 8.48837 6.92388 8.29412 7.05425C8.19875 7.11725 8.10163 7.175 8.02025 7.22487L8.015 7.22837C7.93804 7.27318 7.86218 7.31986 7.7875 7.36837C7.69379 7.4234 7.61175 7.49622 7.546 7.58275C7.44857 7.72546 7.29879 7.82399 7.12916 7.85695C6.95954 7.88991 6.78376 7.85463 6.63998 7.75878C6.4962 7.66293 6.39603 7.51424 6.36121 7.34498C6.32639 7.17573 6.35974 6.99957 6.454 6.85475C6.615 6.62375 6.8215 6.42688 7.0595 6.27637C7.14962 6.21775 7.24062 6.16088 7.33337 6.10575L7.3395 6.10225C7.427 6.04887 7.49875 6.006 7.56525 5.96138C7.65905 5.90614 7.74134 5.83335 7.80763 5.747C7.84 5.69975 7.875 5.62362 7.875 5.46875C7.87832 5.37911 7.85907 5.29006 7.81902 5.2098C7.77896 5.12953 7.71938 5.06062 7.64575 5.00938C7.45612 4.87837 7.23046 4.80957 7 4.8125C6.67712 4.8125 6.47938 4.89125 6.3525 4.97612C6.22445 5.06405 6.12184 5.18416 6.055 5.32438ZM7.875 9.625C7.875 9.85706 7.78281 10.0796 7.61872 10.2437C7.45462 10.4078 7.23206 10.5 7 10.5C6.76794 10.5 6.54538 10.4078 6.38128 10.2437C6.21719 10.0796 6.125 9.85706 6.125 9.625C6.125 9.39294 6.21719 9.17038 6.38128 9.00628C6.54538 8.84219 6.76794 8.75 7 8.75C7.23206 8.75 7.45462 8.84219 7.61872 9.00628C7.78281 9.17038 7.875 9.39294 7.875 9.625Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_1167_262">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
