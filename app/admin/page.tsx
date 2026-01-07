import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Admin() {
  return (
    <div>
      <SignedIn>
        <h1>Admin Page</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default Admin;
