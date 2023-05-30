import { useState } from 'react';
import Filter from './Filter.component';
import Chevron from './Chevron.component';

export default function FilterList({ title, filterItems, selectItem, handleCheck }) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpanded() {
    setIsExpanded(!isExpanded);
    }

    let itemsCls = 'space-y-3 overflow-y-hidden transition-all transform-gpu';

    if (isExpanded) {
        itemsCls += ' max-h-fit opacity-1 py-4';
    } else {
        itemsCls += ' max-h-0 opacity-0 mb-2';
    }

    return (
        <div>
            <h3
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium bg-gray-100 text-gray-900 cursor-pointer"
                onClick={toggleExpanded}
            >
                {title}
                <Chevron expanded={isExpanded} />

            </h3>
            
            <div
                className={itemsCls}
                >
                {!!filterItems?.length && filterItems.map((filterItem) => (
                    <Filter key={filterItem?.slug}
                    selectItem={selectItem}
                    filterItem={filterItem} 
                    handleCheck={handleCheck}
                    />
                ))}
            </div>
        </div>
    )
}