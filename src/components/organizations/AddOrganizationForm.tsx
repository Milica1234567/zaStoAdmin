"use client";

import { useState } from "react";
import React from "react";

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
      <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}