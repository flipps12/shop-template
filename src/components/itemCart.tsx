import { Trash2 } from "lucide-react";

export default function ItemCart() {
    return (
        <div className="flex justify-between items-center py-2">
            <div>
                <h3 className="font-semibold">Item</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">$100</p>
            </div>
            <div className="flex items-center">
                <p className="font-semibold mr-4">$100</p>

                <button className="p-3 border border-gray-300 rounded-md">
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}