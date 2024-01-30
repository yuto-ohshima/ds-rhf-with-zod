import { RequestTripForm } from "@/components/features/request-trip/form";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-[640px] w-full my-0 mx-auto">
        <RequestTripForm />
      </div>
    </main>
  );
}
