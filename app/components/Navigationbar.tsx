import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from "@/auth";
import { Session } from 'inspector/promises';


const Navigationbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-gray shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
            </Link>

            <div className="flex items-center gap-5 text-black">
              {session && session?.user?(
                <>

                <Link href="/startup/create">
                <span>Create</span>
                </Link>

                <form action={async () => {
                  "use server";
                  await signOut({ redirectTo:"/"});
                }}>
                  <span>Log out</span>
                </form>

                <Link href={`/user/${session}`}>
                 <span>{session?.user?.name}</span>
                </Link>
                </>
              ) : (
                <form action={async () => {
                  "use server";
                  await signIn('github')
                  }}>
                  <button type="submit">
                    Login 
                   </button> 

                </form>
              )}
            </div>
        </nav>
    </header>
  )
}

export default Navigationbar
