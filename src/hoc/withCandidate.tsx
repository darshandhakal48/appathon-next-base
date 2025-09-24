
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';



const withCandidate = (WrappedComponent: React.ComponentType<any>) => {
  const VerifiedComponent = async (props: any) => {

    const cookieStore = await cookies();
    const token = cookieStore.get('auth-access-token');
    const isAuth = !!token?.value

    if (!isAuth) redirect("/auth/login")

    return <WrappedComponent {...props} token={token} />;
  };

  return VerifiedComponent;
};

export default withCandidate;

