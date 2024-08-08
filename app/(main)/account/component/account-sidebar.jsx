import { auth } from "@/auth";
import { getUserByEmail } from '@/queries/users';
import { redirect } from "next/navigation";
import Menu from './account-menu';

const AccountSidebar = async () => {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    const loggedInUser = await getUserByEmail(session?.user?.email);

    return (
        <div className="lg:w-1/4 md:px-3">
            <div className="relative">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="profile-pic text-center mb-5">
                        <div>
                            <div className="relative size-28 mx-auto">
                                <div className="rounded-full w-28 h-28 bg-gray-900 text-white flex justify-center items-center">
                                    <p className="text-5xl">{loggedInUser?.firstName?.charAt(0)}</p>
                                </div>
                                <label
                                    className="absolute inset-0 cursor-pointer"
                                    htmlFor="pro-img"
                                />
                            </div>
                            <div className="mt-4">
                                <h5 className="text-lg font-semibold">
                                    {`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}
                                </h5>
                                <p className="text-slate-400">
                                    {loggedInUser?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-700">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSidebar;