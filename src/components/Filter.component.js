export default function Filter({ filterItem, selectItem, handleCheck }) {
    return (
    <div className="px-4 relative flex items-start">
        <div className="flex h-6 items-center">
            <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                aria-describedby="comments-description"
                value={filterItem?.slug}
                type="checkbox"
                checked={selectItem.includes(filterItem?.slug)}
                onChange={(event) => handleCheck(event)}
            />
        </div>

        <div className="ml-3 text-sm leading-6">
            <label htmlFor={filterItem?.slug} className="font-medium text-gray-200 focus:text-green-950 cursor-pointer">
                {filterItem?.name}
            </label>
        </div>
    </div>
    )
}