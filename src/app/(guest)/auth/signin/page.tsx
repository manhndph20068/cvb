import LoginForm from "@/src/components/auth/login.form";
import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignInPage = async () => {
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
export default SignInPage;
