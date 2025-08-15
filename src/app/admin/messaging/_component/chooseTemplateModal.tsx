import { messagingTemplate } from "@/config/db";
import TemplateBox from "./templateBox";

function ChooseTemplateModal() {
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
