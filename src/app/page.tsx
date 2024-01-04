import { Login } from '@/components/(auth)/auth/login';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <Login />
    </div>
  );
}
