import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthCard from '../components/auth/AuthCard';
import AuthHeader from '../components/auth/AuthHeader';
import FormField from '../components/auth/FormField';
import AuthButton from '../components/auth/AuthButton';

export default function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) { setError('Complete this field.'); return; }
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader />
        {submitted ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <p className="text-lg font-black text-neutral-950">Reset link sent</p>
            <p className="mt-2 text-sm leading-6 text-neutral-500">If an account exists for <strong>{username}</strong>, a password reset email will arrive shortly.</p>
            <Link to="/login" className="mt-5 inline-block text-sm font-bold text-orange-700 hover:text-orange-800">Back to login</Link>
          </div>
        ) : (
          <>
            <p className="text-center text-lg font-black text-neutral-950">Reset password</p>
            <p className="mb-5 mt-2 text-center text-sm leading-6 text-neutral-500">Enter your email to receive a reset link.</p>
            <form onSubmit={handleSubmit} noValidate>
              <FormField label="Email" type="email" value={username} placeholder="anjali.garg@yopmail.com" onChange={e => { setUsername(e.target.value); setError(''); }} error={error} required />
              <div className="mb-4 mt-5"><AuthButton disabled={loading}>{loading ? 'Sending...' : 'Send reset link'}</AuthButton></div>
              <div className="text-center"><Link to="/login" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950">Back to login</Link></div>
            </form>
          </>
        )}
      </AuthCard>
    </AuthLayout>
  );
}
