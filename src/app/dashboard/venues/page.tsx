import { venues } from "@/data/venues";
import Link from "next/link";   
export default function VenuesPage() {
  return (
    <div>
      <h1>Venues</h1>
      <p>This is the venues page.</p>
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>
            <Link href={`/dashboard/venues/${venue.id}`}>{venue.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
