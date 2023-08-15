// import { useState } from "react";
// import { Input, Button } from "@mantine/core";
// import { useSession } from "@next-auth/client";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [session, loading] = useSession();

//   const handleSubmit = async () => {
//     try {
//       await nextAuth.login({
//         provider: "credentials",
//         username,
//         password,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Input
//         label="Username"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <Input
//         label="Password"
//         placeholder="Enter your password"
//         value={password}
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button
//         loading={loading}
//         disabled={loading}
//         type="submit"
//         color="primary"
//         label="Login"
//       />
//     </Form>
//   );
// };

// export default LoginPage;