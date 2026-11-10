"use client";

import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddOrganizationFormProps = {
  addOrganization: (name: string) => void;
};

export default function AddOrganizationForm({ addOrganization }: AddOrganizationFormProps) {
  const [name, setName] = useState("");
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    addOrganization(name);
    setName("");
  }
    return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Button type="submit">Add</Button>
    </form>
  );
}