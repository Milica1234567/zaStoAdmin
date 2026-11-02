import {venues} from "@/data/venues";

type VenuePageProps = {
    params: Promise<{ id: string }>;
}; 

export default async function VenuePage({
  params,
}: VenuePageProps) {

    const { id } = await params;
    const venue = venues.find((v) => v.id === id);

    return (
        <div>
            <h1>Venue Page</h1>
            <p>Venue details will be displayed here.</p>
            <p>{venue?.name}</p>
        </div>
    );
}