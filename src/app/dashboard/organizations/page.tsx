import { organizations } from "@/data/organizations";
import type { Organization } from "@/types/organization";
import Link from "next/link";
import AddOrganizationForm from "@/components/organizations/AddOrganizationForm";
import OrganizationManager from "@/components/organizations/OrganizationManager";
export default function OrganizationsPage() {
  return (
    <div>
      <h1>Organizations</h1>
      <OrganizationManager />
      
    </div>
  );
}
