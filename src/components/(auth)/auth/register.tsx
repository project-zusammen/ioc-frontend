import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Register = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[300px] flex-col space-y-3">
        <h3>Register</h3>
        <p>Sign up to Indonesia Open Course</p>
        <Input type="text" placeholder="Enter your name" />
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Button>Login</Button>
      </div>
    </main>
  );
};
