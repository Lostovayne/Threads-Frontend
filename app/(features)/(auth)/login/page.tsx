import { CreateAccount } from '@/components/features/auth/create-account';
import { FC, ReactElement } from 'react';

interface LoginPageProps {
  // Prop types here
}

const LoginPage: FC<LoginPageProps> = ({}): ReactElement => {
  return (
    <div className='min-h-screen flex items-center justify-center' >
        <CreateAccount  />
    </div>
  );
};

export default LoginPage;