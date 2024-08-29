import CreateContactForm from "@/app/_components/form/CreateContactForm";

export default function Create() {
  return (
    <div className="max-w-3xl w-full h-full mx-auto overflow-auto">
      <h2 className="text-2xl font-bold mt-4 mb-2 text-greenSpotify">
        Create your contact
      </h2>
      <p className="text-[#B3B3B3] mb-4">
        General information about your Contact
      </p>
      <CreateContactForm />
    </div>
  );
}
