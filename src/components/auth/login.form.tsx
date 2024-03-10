"use client";
import "./login.form.scss";
import { Form, Input, Button, Divider, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GithubOutlined,
  GoogleOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const onFinish = async (values: { email: string; password: string }) => {
    const res = await signIn("credentials", {
      username: values.email,
      password: values.password,
      redirect: false,
    });
    if (!res?.error) {
      router.push("/");
    } else {
      message.error("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <div>
          <LeftOutlined onClick={() => router.push("/")} />
        </div>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                type: "email",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <div style={{ textAlign: "center" }}>
              Don't have an account yet?{" "}
              <Link href={"/auth/signup"}>Sign Up</Link>
            </div>
            <Divider>Or</Divider>
            <Button
              type="text"
              className="login-form-github"
              icon={<GithubOutlined />}
              onClick={() => {
                signIn("github");
              }}
            >
              Login with Github
            </Button>
            <Button
              type="text"
              className="login-form-google"
              icon={<GoogleOutlined />}
              onClick={() => {
                signIn("google");
              }}
            >
              Login with Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
