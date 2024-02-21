const BedOutline = ({ width, height, props }: { width?: number; height?: number; [x: string]: any }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1.0625em"}
            viewBox="0 0 16 17"
            fill="none"
            {...props}
        >
            <path
                d="M1.33203 13.1668V9.16683C1.33203 8.86683 1.39314 8.59461 1.51536 8.35016C1.63759 8.10572 1.7987 7.88905 1.9987 7.70016V5.8335C1.9987 5.27794 2.19314 4.80572 2.58203 4.41683C2.97092 4.02794 3.44314 3.8335 3.9987 3.8335H6.66536C6.92092 3.8335 7.15981 3.88083 7.38203 3.9755C7.60425 4.07016 7.80981 4.20061 7.9987 4.36683C8.18759 4.20016 8.39314 4.06972 8.61536 3.9755C8.83759 3.88127 9.07648 3.83394 9.33203 3.8335H11.9987C12.5543 3.8335 13.0265 4.02794 13.4154 4.41683C13.8043 4.80572 13.9987 5.27794 13.9987 5.8335V7.70016C14.1987 7.88905 14.3598 8.10572 14.482 8.35016C14.6043 8.59461 14.6654 8.86683 14.6654 9.16683V13.1668H13.332V11.8335H2.66536V13.1668H1.33203ZM8.66536 7.16683H12.6654V5.8335C12.6654 5.64461 12.6014 5.48616 12.4734 5.35816C12.3454 5.23016 12.1871 5.16638 11.9987 5.16683H9.33203C9.14314 5.16683 8.9847 5.23083 8.8567 5.35883C8.7287 5.48683 8.66492 5.64505 8.66536 5.8335V7.16683ZM3.33203 7.16683H7.33203V5.8335C7.33203 5.64461 7.26803 5.48616 7.14003 5.35816C7.01203 5.23016 6.85381 5.16638 6.66536 5.16683H3.9987C3.80981 5.16683 3.65136 5.23083 3.52336 5.35883C3.39536 5.48683 3.33159 5.64505 3.33203 5.8335V7.16683ZM2.66536 10.5002H13.332V9.16683C13.332 8.97794 13.268 8.8195 13.14 8.6915C13.012 8.5635 12.8538 8.49972 12.6654 8.50016H3.33203C3.14314 8.50016 2.9847 8.56416 2.8567 8.69216C2.7287 8.82016 2.66492 8.97838 2.66536 9.16683V10.5002Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default BedOutline;