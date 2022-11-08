function NavBar() {
  return (
    <div className="flex items-center justify-between p-8 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white mr-4 px-6 py-2">Sign in</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default NavBar;
