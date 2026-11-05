import type { Organization } from "@/types/organization";
export type OrganizationListProps = {
  organizations: Organization[];
};

export default function OrganizationList({
  organizations,
}: OrganizationListProps) {
  return (
    <div>
      {organizations.map((organization) => (
        <div key={organization.id}>
          {organization.id} - {organization.name}
        </div>
      ))}
    </div>
  );
}
