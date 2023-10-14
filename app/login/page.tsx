import LoginForm from '../_components/form/LoginForm'

export default function Login() {
  return (
    <div className="w-[85%] xl:w-[30rem] md:w-[30rem] sm:w-[30rem] h-[60%] bg-white flex flex-col items-center rounded-lg">
      <div className="w-full bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-t-md flex justify-start items-center h-[10%]">
        <h1 className="text-3xl ml-5 mb-1 tracking-wide text-white font-semibold">Login</h1>
        <span className="block w-[50%] border-b border-gray-400 ml-5 mt-1"></span>
      </div>
      <LoginForm />
    </div>
  );
}
