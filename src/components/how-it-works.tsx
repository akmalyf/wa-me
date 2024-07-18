import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export const HowItWorks = ({children}: {children: React.ReactNode}) => {
    return(
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-80 mx-4">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium">
                            This website allows you to initiate a WhatsApp chat
                            with any phone number
                        </h4>
                        <ul className="ml-3 list-disc text-sm text-muted-foreground">
                            <li>Enter the country code and phone number in the respective input fields</li>
                            <li>The phone number will automatically be formatted to whatsapp open api (e.g., wa.me/6234567890)</li>
                            <li>Click the &apos;Chat&apos; button to open WhatsApp and start a chat with the provided
                                number</li>
                        </ul>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
