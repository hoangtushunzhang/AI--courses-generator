import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthUserButton = () => {
  return (
    <div>
      <Link href={"/sign-in"}>
        <Button className="bg-indigo-600 hover:bg-indigo-600/80">
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default AuthUserButton;