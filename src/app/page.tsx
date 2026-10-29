import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Admin Panel</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
