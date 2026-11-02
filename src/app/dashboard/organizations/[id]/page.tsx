import { organizations } from "../../../../data/organizations";
import { venues } from "../../../../data/venues";
import Link from "next/link";
type OrganizationPageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrganizationPage({
  params,
}: OrganizationPageProps) {
  const { id } = await params;

  const organization = organizations.find((org) => org.id === id);
  const orgVenues = venues.filter((venue) => venue.organizationId === id);

  return (
    <div>
      <h1>Organization Page</h1>
      {organization ? (
        <div>
          <h2>{organization.name}</h2>
          <h3>Venues</h3>
          <ul>
            {orgVenues.map((venue) => (
              <li key={venue.id}>
                <Link href={`/dashboard/venues/${venue.id}`}>
                  {venue.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ): (
        <p>Organization not found.</p>
      )}
    </div>
  );
}
