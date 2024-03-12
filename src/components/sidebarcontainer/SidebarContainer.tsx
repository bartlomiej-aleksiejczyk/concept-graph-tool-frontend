import MainSidebar from "../mainsidebar/MainSidebar";
import MainTopbar from "../maintopbar/MainTopbar";

interface SidebarContainerProps {
  children: React.ReactNode;
}

function SidebarContainer({ children }: SidebarContainerProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <MainSidebar />
        <div className="flex flex-1 flex-col">
          <MainTopbar />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </>
  );
}

export default SidebarContainer;
