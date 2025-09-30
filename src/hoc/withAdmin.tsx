

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';



const withAdmin = (WrappedComponent: React.ComponentType<any>) => {
  const VerifiedComponent = async (props: any) => {

    const cookieStore = await cookies();
    const token = cookieStore.get('auth-access-token');
    const isAuth = !!token?.value


    // TODO: DO ROLE CHECK HERE
    if (!isAuth) redirect("/auth/login")

    return <WrappedComponent {...props} token={token} />;
  };

  return VerifiedComponent;
};

export default withAdmin;

