import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Login = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[300px] flex-col space-y-3">
        <h3>Login</h3>
        <p>Login to Indonesia Open Course</p>
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Button>Login</Button>
        <p>
          Don&apos;t have an account?
          <Link href="/register">&nbsp;Register</Link>
        </p>
      </div>
    </main>
  );
};
