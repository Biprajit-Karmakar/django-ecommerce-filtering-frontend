export default function Aside({ children }) {
    return (
    <aside>
        <div className="border-b border-gray-200 bg-white mb-4 px-4 py-3 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Filters</h3>
        </div>
        {children ?? 'Aside'}
    </aside>
    )
}

