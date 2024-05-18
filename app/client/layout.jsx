import ExitIcon from "@public/components/client/ExitIcon";
import SbIcon from "@public/components/client/SbIcon";

export default function RootLayout({ children }) {
  return (
    <div className="client-page">
        
        <ExitIcon/>
        <SbIcon/>
        {children}
    </div>
  )
}
