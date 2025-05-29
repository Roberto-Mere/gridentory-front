import Input from '@/components/ui/input';

export default function PasswordInput() {
  return (
    <div>
      <label htmlFor="password" className="hidden">
        Password
      </label>
      <Input
        id="password"
        placeholder="Password"
        variant="login"
        className="w-full rounded-b-md"
      />
    </div>
  );
}
