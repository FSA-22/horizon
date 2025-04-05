"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const formSchema = authFormSchema(type);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const newUser = await signUp(data);

        setUser(newUser);
      }

      if (type === "sign-in") {
        const response = await signIn({email: data.email, password: data.password});

        if (response) router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="horizon logo"
          />
          <h1 className="text-26 font-bold text-black">Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <div className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details and submit"}
            </p>
          </div>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-2">
                    <CustomInput
                      control={form.control}
                      label="First Name"
                      name="firstName"
                      placeholder="Enter your first name here"
                    />
                    <CustomInput
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter your last name here"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    label="Address1"
                    name="address1"
                    placeholder="Enter verifiable address1 here"
                  />
                  <CustomInput
                    control={form.control}
                    label="City"
                    name="city"
                    placeholder="Enter your city here"
                  />

                  <div className="flex gap-2">
                    <CustomInput
                      control={form.control}
                      label="State"
                      name="state"
                      placeholder="Enter your first state here"
                    />
                    <CustomInput
                      control={form.control}
                      label="Postal Code"
                      name="postalCode"
                      placeholder="Example: 200211"
                    />
                  </div>
                  <div className="flex gap-2">
                    <CustomInput
                      control={form.control}
                      label="Date Of Birth"
                      name="dateOfBirth"
                      placeholder="YYYY/MM/DD"
                    />

                    <CustomInput
                      control={form.control}
                      label="SSN"
                      name="ssn"
                      placeholder="Example: 1234"
                    />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                label="Email"
                name="email"
                placeholder="Email"
              />
              <CustomInput
                control={form.control}
                label="Password"
                name="password"
                placeholder="Password"
              />
              <div className="flex flex-col gap-1">
                <Button
                  className="form-btn  hover:bg-blue-600"
                  type="submit"
                  disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Login"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center items-center gap-1">
            <p className="text-16 font-normal text-gray-600">
              {type === "sign-in"
                ? "You do not have an account?"
                : "Already have an account?"}
            </p>

             <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              legacyBehavior>
              <a className="form-link">
                {type === "sign-in" ? "Sign Up" : "Log In"}
              </a>
            </Link>

            {/* <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link">
              {type === "sign-in" ? "Sign Up" : "Login"}
            </Link> */}
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
