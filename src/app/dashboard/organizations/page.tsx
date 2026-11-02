import { organizations } from "@/data/organizations";
import type { Organization } from "@/types/organization";
import Link from "next/link";
export default function OrganizationsPage() {
  return (
    <div>
      <h1>Organizations</h1>
      {organizations.map((organization: Organization) => (
        <div key={organization.id}>
          <Link href={`/dashboard/organizations/${organization.id}`}>
            {organization.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
