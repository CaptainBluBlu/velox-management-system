"use client";

import React, { useState } from "react";
import { Container, Paper, TextInput, Button, Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { LoginButton, LogoutButton } from "@/components/UserButton/AuthButton";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // You can implement your sign-in logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Set loading state to true
    setIsLoading(true);

    // Simulate a delay for demonstration purposes (remove in actual code)
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000); // Replace with your actual sign-in logic

    // In actual code, you would handle the sign-in logic here
  };

  return (
    <Container
      size="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper p="lg" shadow="xs" style={{ maxWidth: 400, width: "100%" }}>
        <TextInput
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginBottom: 24 }}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <Button fullWidth onClick={handleSignIn}>
            Sign In
          </Button>
        )}

        <p>Login Button</p>
        <LoginButton />
        <LogoutButton />
      </Paper>
    </Container>
  );
}

export default LoginForm;
