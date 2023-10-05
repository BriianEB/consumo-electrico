import Image from 'next/image';
import { Metadata } from 'next';

import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Iniciar sesión'
};

function Login() {

  return (
    <div className="h-screen login-background text-sm">
      <div
        className={`
          flex items-center w-1/3 h-full bg-gray-200 ml-auto
          2xl:w-[520px]
        `}
      >
        <div
          className={`
            w-full px-10
          `}
        >
          <div className="flex justify-center">
            <Image src="/atp-icon.png" alt="ATP logo" width={115} height={115} />
          </div>

          <h1
            className={`
              mt-8 text-3xl font-bold text-center
            `}
          >
            ¡Bienvenido!<br />
            Inicia sesión en tu cuenta
          </h1>

          <LoginForm />          
        </div>
      </div>
    </div>
  );
}

export default Login;