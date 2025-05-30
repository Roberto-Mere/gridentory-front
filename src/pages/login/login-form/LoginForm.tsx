import { useForm } from 'react-hook-form';
import {
  loginSchema,
  type LoginFormValues,
} from '../../../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import PasswordInput from '../../../components/password-input/PasswordInput';
import Input from '@/components/ui/input';
import LoginError from '../LoginError';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  function onValidSumbit(data: LoginFormValues) {
    console.log('Submitting:', data);
  }

  return (
    <form
      className="relative mt-60"
      onSubmit={handleSubmit(onValidSumbit)}
      aria-label="login"
      noValidate
    >
      {errors.login?.message && <LoginError message={errors.login.message} />}

      <div>
        <label htmlFor="email" className="hidden"></label>
        <Input
          id="email"
          placeholder="Email"
          className="mb-2 rounded-t-md"
          variant="login"
          type="email"
          {...register('email')}
        />
      </div>
      <PasswordInput {...register('password')} />
      <button
        type="submit"
        className="bg-highlights hover:bg-dark-highlights mt-32 w-full cursor-pointer rounded p-12 text-lg font-bold text-white"
      >
        Sign in
      </button>
    </form>
  );
}
