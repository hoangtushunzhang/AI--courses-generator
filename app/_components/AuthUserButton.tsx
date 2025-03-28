import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthUserButton = () => {
  return (
    <div>
      <Link href={"/sign-in"}>
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500">
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default AuthUserButton;
