import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/',
    error: '/auth/error',
    newUser: '/redirecionado', // Após o login, o usuário será redirecionado para esta página
  },
};

export default NextAuth(authOptions);
