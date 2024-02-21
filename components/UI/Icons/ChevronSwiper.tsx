export default function ChevronSwiper({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 31 30"
            fill="none"
            {...props}
        >
            <path
                d="M5.94023 2.11272C6.2222 1.82706 6.60457 1.66658 7.00327 1.66658C7.40197 1.66658 7.78434 1.82706 8.06631 2.11272L15.5091 9.65526L22.9518 2.11272C23.2354 1.83515 23.6152 1.68157 24.0095 1.68504C24.4037 1.68851 24.7808 1.84876 25.0596 2.13128C25.3384 2.41379 25.4965 2.79597 25.4999 3.19549C25.5034 3.59501 25.3518 3.97991 25.0779 4.26729L16.5721 12.8871C16.2902 13.1728 15.9078 13.3333 15.5091 13.3333C15.1104 13.3333 14.728 13.1728 14.446 12.8871L5.94023 4.26729C5.65835 3.98155 5.5 3.59405 5.5 3.19001C5.5 2.78596 5.65835 2.39846 5.94023 2.11272Z"
                fill="currentColor"
            />
            <path
                d="M10.7201 21.723C10.8611 21.5802 11.0523 21.4999 11.2516 21.4999C11.451 21.4999 11.6422 21.5802 11.7832 21.723L15.5045 25.4943L19.2259 21.723C19.3677 21.5842 19.5576 21.5074 19.7547 21.5091C19.9519 21.5109 20.1404 21.591 20.2798 21.7323C20.4192 21.8735 20.4983 22.0646 20.5 22.2644C20.5017 22.4641 20.4259 22.6566 20.289 22.8003L16.0361 27.1102C15.8951 27.253 15.7039 27.3333 15.5045 27.3333C15.3052 27.3333 15.114 27.253 14.973 27.1102L10.7201 22.8003C10.5792 22.6574 10.5 22.4636 10.5 22.2616C10.5 22.0596 10.5792 21.8659 10.7201 21.723Z"
                fill="currentColor"
            />
        </svg>
    );
}