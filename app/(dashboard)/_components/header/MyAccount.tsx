type MyAccountProps = {
  className?: string;
};

function MyAccount({ className }: MyAccountProps) {
  return (
    <div
      className={className}
    >
      <button
        className={`
          w-10 h-10 bg-blue-400 rounded-full outline-none
          focus:ring-2 focus:ring-blue-300
        `}
      >
        <span className="text-xl font-bold text-white">A</span>
      </button>
    </div>
  );
}

export default MyAccount;