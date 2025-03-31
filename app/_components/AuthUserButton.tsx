"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const AuthUserButton = () => {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div className="flex items-center">
          <Link href={"/dashboard"} className="mr-3">
            <Button className="bg-gradient-to-r from-myPrimary to-mySecond hover:from-myPrimary hover:to-mySecond">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div className="flex items-center">
          <Link href={"/dashboard"} className="mr-3">
            <Button className="bg-gradient-to-r from-mySecond to-myPrimary hover:from-mySecond hover:to-myPrimary">
              Get Started
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="bg-gradient-to-r from-myPrimary to-mySecond hover:from-myPrimary hover:to-mySecond">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthUserButton;
