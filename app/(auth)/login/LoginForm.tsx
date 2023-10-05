'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';
import Link from 'next/link';

import Button from '@/_shared/components/Button';
import Checkbox from '@/_shared/components/Checkbox';
import TextField from '@/_shared/components/TextField';

function LoginForm() {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailRef.current?.value === 'admin' && passwordRef.current?.value === 'admin') {
      router.push('/');
    }
  }

  return (
    <form className="w-full mt-8" onSubmit={submitHandler}>
      <TextField type="text" name="email" className="!mb-7" label="Correo electrónico" ref={emailRef} />

      <TextField type="password" name="password" label="Contraseña" ref={passwordRef} />

      <div className="text-right mt-3">
        <Link href="#" className="font-bold text-blue-400">¿Olvidaste tu contraseña?</Link>
      </div>

      <div className="flex items-baseline font-bold mt-7">
        <Checkbox name="rememberMe" color="blue" defaultChecked />
        <label htmlFor="rememberMe" className="ml-2">Mantener la sesión iniciada</label>
      </div>

      <Button className="!mt-4 !px-4 !py-4 !font-bold" color="blue" full>
        Iniciar sesión
      </Button>
    </form>
  );
}

export default LoginForm;