import { Mail } from "lucide-react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
    return (
        <div className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100">
            <span className="text-gray-400 group-focus-within:text-gray-100">
                <Mail />
            </span>
            <input 
                className="flex-1 outline-0 placeholder-gray-400"
                {...props}
            />
        </div>
    )
}