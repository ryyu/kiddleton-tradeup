import { getUserById } from "@/app/actions/actions"
import Link from "next/link";
import UserCard from "@/components/user-card"

interface Iparams {
    params: Promise<{ userid?: string[]; }>
}

export default async function UserPage({ params } : {
    params: Iparams["params"]
}) {
    const { userid } = await params;
    console.log(userid);
    // + js style typecast to number'

    const user = await getUserById(userid? +userid : 0);
    let body_content = (
        <div>
            User Not Found
            <Link href={"/"}>Return to start</Link>
        </div>
    )
    if(user) {
        body_content = (
            <div>
                <UserCard 
                    id={user?.id}
                    name={user?.name}
                    phoneNumber={user?.phoneNumber}
                    points={user?.points}
                />
            </div>
        )
    }
    return(
        <div>
            {body_content}
        </div>
    )
}