export default function Chevron({ expanded }) {
    
    let cls = 'w-5 h-5 transform-gpu transition-transform';
    if (expanded) {
    cls += ` ${'-rotate-180'}`;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={cls}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    )
}