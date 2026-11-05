"use client";
import {useState} from "react";
import AddOrganizationForm from "@/components/organizations/AddOrganizationForm";
import OrganizationList from "./OrganizationList";
import { Organization } from "@/types/organization";

export default function OrganizationManager() {

    const [organizations, setOrganizations] = useState<Organization[]>([]);

    function addOrganization(name: string) {
        const newOrganization = {
            id: (organizations.length + 1).toString(),
            name
        };
        setOrganizations([...organizations, newOrganization]);
    }

    return (
        <div>
            <h1>Organization Manager</h1>
            <AddOrganizationForm addOrganization={addOrganization} />
            <OrganizationList organizations={organizations} />
        </div>
    );
}