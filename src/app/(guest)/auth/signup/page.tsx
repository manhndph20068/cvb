import LoginForm from "@/src/components/auth/login.form";
import RegisterForm from "@/src/components/auth/register.form";
import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
