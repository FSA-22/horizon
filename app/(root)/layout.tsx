import MobileNavBar from "@/components/ui/MobileNavBar";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";


export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {

  const loggedIn = {firstName: "Simeon", lastName: "Fowotade"}
  return (
    <main className="flex h-screen w-full font-inter m-0">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30} />
          <div>
            <MobileNavBar user={loggedIn} />
          </div>
        </div>
      {children}
      </div>
    </main>
  );
}
