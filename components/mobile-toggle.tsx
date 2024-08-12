import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { DivButton } from "./divbutton";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

export const MobileToggle = ({serverId}: {serverId: string}) => {
    return(
        <Sheet>
            <SheetTrigger>
                <DivButton variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </DivButton>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex gap-0">
                <div className="w-[72px]">
                    <NavigationSidebar />
                </div>
                <ServerSidebar serverId={serverId} />
            </SheetContent>
        </Sheet>
    )
}