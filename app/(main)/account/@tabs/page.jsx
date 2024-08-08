import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import ChangePassword from "../component/change-password";
import PersonalDetails from "../component/personal-details";

async function Profile() {
	const session = await auth();
	const loggedInUser = await getUserByEmail(session?.user?.email);
	return (
		<>
			<PersonalDetails userInfo={loggedInUser} />
			<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
				<div>
					<ChangePassword email={loggedInUser?.email} />
				</div>
			</div>
		</>
	);
}

export default Profile;
