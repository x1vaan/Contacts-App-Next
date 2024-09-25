import CreateContactForm from "@/app/_components/form/CreateContactForm";

export default function Create() {
  return (
    <div className="max-w-3xl w-full mx-auto h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold ml-4 lg:ml-0 mt-2 mb-2 text-greenSpotify">
        Create your contact
      </h2>
      <p className="text-textGray mb-2 ml-4 lg:ml-0">
        General information about your Contact
      </p>
      <CreateContactForm />
    </div>
  );
}
