import RegisterForm from "@/src/components/auth/register.form";
import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản - Mangahub ",
  description: "signinpage",
};

const SignupPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <>
      <RegisterForm />
    </>
  );
};
export default SignupPage;
