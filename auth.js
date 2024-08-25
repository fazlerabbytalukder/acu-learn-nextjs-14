// import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.confiq";
import { User } from "./model/user-model";
import { dbConnect } from "./service/mongo";

// async function refreshAccessToken(token) {
//     try {
//         const url =
//             "https://oauth2.googleapis.com/token?" +
//             new URLSearchParams({
//                 client_id: process.env.GOOGLE_CLIENT_ID,
//                 client_secret: process.env.GOOGLE_CLIENT_SECRET,
//                 grant_type: "refresh_token",
//                 refresh_token: token.refreshToken,
//             });

//         const response = await fetch(url, {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             method: 'POST'
//         })

//         const refreshedTokens = await response.json();

//         if (!response.ok) {
//             throw refreshedTokens;
//         }

//         return {
//             ...token,
//             accessToken: refreshedTokens?.access_token,
//             accessTokenExpires: Date.now() + refreshedTokens?.expires_in * 1000,
//             refreshToken: refreshedTokens?.refresh_token,
//         }


//     } catch (error) {
//         console.log(error);
//         return {
//             ...token,
//             error: "RefreshAccessTokenError"
//         }
//     }
// }

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (credentials == null) return null;

                try {
                    await dbConnect();
                    const user = await User.findOne({ email: credentials?.email });
                    console.log(user);

                    if (user) {
                        // Insecure plain text password comparison
                        if (credentials.password === user.password) {
                            return user;
                        } else {
                            console.error("password mismatch");
                            throw new Error("Check your password");
                        }
                    } else {
                        console.error("User not found");
                        throw new Error("User not found");
                    }

                } catch (err) {
                    console.error(err);
                    throw new Error(err);
                }
            }
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //     authorization: {
        //         params: {
        //             prompt: "consent",
        //             access_type: "offline",
        //             response_type: "code",
        //         },
        //     },
        // }),
    ],
    // callbacks: {
    //     async jwt({ token, user, account }) {
    //         console.log(`JWT token: ${JSON.stringify(token)}`);
    //         console.log(`JWT Account: ${JSON.stringify(account)}`);
    //         if (account && user) {
    //             return {
    //                 accessToken: account?.access_token,
    //                 accessTokenExpires: Date.now() + account?.expires_in * 1000,
    //                 refreshToken: account?.refresh_token,
    //                 user,
    //             }
    //         }

    //         console.log(`Token Will Expire at ${new Date(token.accessTokenExpires)})`);

    //         if (Date.now() < token?.accessTokenExpires) {
    //             console.log(`At ${new Date(Date.now())}, Using old access token`);
    //             return token;
    //         }

    //         console.log(`Token Expired at ${new Date(Date.now())}`)
    //         return refreshAccessToken(token);
    //     },
    //     async session({ session, token }) {
    //         session.user = token?.user;
    //         session.accessToken = token?.access_token;
    //         session.error = token?.error

    //         console.log(`Returning Session ${JSON.stringify(session)}`);
    //         return session;
    //     }
    // }
});