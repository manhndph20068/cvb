import LoginForm from "@/src/components/auth/login.form";
import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập tài khoản - Mangahub ",
  description: "signinpage",
};

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <>
      <LoginForm />
    </>
  );
};
export default SigninPage;
