import RegisterForm from "@/app/_components/form/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-zinc-800 to-zinc-600 rounded-t-md flex justify-start items-center h-[10%]">
        <h1 className="text-3xl ml-5 mb-1 tracking-wide text-white font-semibold">Register</h1>
        <span className="block w-[50%] border-b border-gray-400 ml-5 mt-1"></span>
      </div>
      <RegisterForm />
    </>
  );
}
