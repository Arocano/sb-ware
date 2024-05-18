import ExitIcon from "@public/components/client/ExitIcon";
import NavBarClient from "@public/components/client/NavBarClient";
import SbIcon from "@public/components/client/SbIcon";

export default function RootLayout({ children }) {
  return (
    <div className="client-page">
        <NavBarClient/>
        <ExitIcon/>
        <SbIcon/>
        {children}
    </div>
  )
}
