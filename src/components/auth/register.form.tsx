"use client";
import "./login.form.scss";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, LeftOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sendRequest } from "@/src/utils/api";

const RegisterForm = () => {
  const router = useRouter();
  const onFinish = async (values: { email: string; password: string }) => {
    const res = await sendRequest<any>({
      url: `${process.env.NEXT_PUBLIC_BE_URL}/api/v1/auth/signUpCredential`,
      method: "POST",
      body: {
        email: values.email,
        password: values.password,
      },
    });
    if (res.statusCode === 0) {
      router.push("/auth/signin");
      message.success("Đăng ký tài khoản thành công!");
    } else {
      message.error("Email hoặc mật khẩu không hợp lệ!");
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <div>
          <LeftOutlined onClick={() => router.push("/")} />
        </div>
        <h1 style={{ textAlign: "center" }}>Register</h1>
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
              Sign Up
            </Button>
            <div style={{ textAlign: "center" }}>
              Have an account? <Link href={"/auth/signin"}>Sign In</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default RegisterForm;
