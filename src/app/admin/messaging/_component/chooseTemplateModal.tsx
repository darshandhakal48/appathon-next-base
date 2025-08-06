import { Icons } from "@/components/ui/icons";
import { messagingTemplate } from "@/config/db";
import { LuFilePenLine } from "react-icons/lu";
import TemplateBox from "./templateBox";

function ChooseTemplateModal() {
    const tag = Icons;
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4  py-6">
                {messagingTemplate.map((item) => (
                    <>
                        <TemplateBox item={item} key={item.id} />
                    </>
                ))}
            </div>
        </>
    );
}

export default ChooseTemplateModal;
