import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthLayout from '../components/auth/AuthLayout';
import AuthCard from '../components/auth/AuthCard';
import AuthHeader from '../components/auth/AuthHeader';
import FormField from '../components/auth/FormField';
import AuthButton from '../components/auth/AuthButton';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!username.trim()) errs.username = 'Complete this field.';
    if (!password.trim()) errs.password = 'Complete this field.';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await login(username, password);
      navigate('/home');
    } catch {
      setErrors({ general: 'Invalid username or password.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader />
        <p className="mb-5 rounded-lg bg-orange-50 px-3 py-2 text-center text-sm font-semibold text-orange-800">Logging in as Tenant</p>
        {errors.general && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-sm font-semibold text-red-700">{errors.general}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <FormField label="Email" type="email" value={username} placeholder="anjali.garg@yopmail.com" onChange={e => { setUsername(e.target.value); setErrors(p => ({ ...p, username: '' })); }} error={errors.username} required />
          <FormField label="Password" type="password" value={password} placeholder="Enter password" onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: '' })); }} error={errors.password} required />
          <div className="mb-5 text-right">
            <Link to="/forgot-password" className="text-sm font-semibold text-orange-700 hover:text-orange-800">Forgot password?</Link>
          </div>
          <AuthButton disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
