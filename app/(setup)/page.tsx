import {initialProfile} from "@/lib/initial.profile";
import { db } from '@/lib/db';
import { redirect } from "next/navigation";
import { IntitialModal } from "@/components/modals/initial-modal";

const SetupPage = async() => {
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id,
                }
            }
        }
    });

    if (server) {
        redirect(`/servers/${server.id}`);
    }

    return (<IntitialModal />);
}
export default SetupPage;