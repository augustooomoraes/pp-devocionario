import NavLinks from "./nav-links";

export function SideNav() {

  return (
    <div className="flex flex-col gap-4 w-64 border-r-2 p-4">
      <h1>SideNav</h1>
      <ul>
        <NavLinks />
      </ul>
    </div>
  )
}