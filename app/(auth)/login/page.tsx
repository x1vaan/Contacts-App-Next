import LoginForm from "../../_components/form/LoginForm";

export default function Login() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-zinc-800 to-zinc-600 overflow-hidden flex justify-start items-center h-[10%]">
        <h1 className="text-3xl ml-5 mb-1 tracking-wide text-white font-semibold">Login</h1>
        <span className="block w-[50%] border-b border-gray-400 ml-5 mt-1"></span>
      </div>
      <LoginForm />
    </>
  );
}
