import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <div>
        <aside>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/organizations">Organizations</Link>
              </li>
              <li>
                <Link href="/dashboard/venues">Venues</Link>
              </li>
              <li>
                <Link href="/dashboard/menus">Menus</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    );
  }
}
