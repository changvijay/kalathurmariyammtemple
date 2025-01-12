import { useAuth0 } from "@auth0/auth0-react";

const AuthSection = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <img
            src={user.picture}
            alt={user.name}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-semibold text-gray-900">
            {user.name}
          </span>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="text-sm/6 font-semibold text-gray-900"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </button>
      )}
    </div>
  );
};

export default AuthSection;
