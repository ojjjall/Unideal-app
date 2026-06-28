import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';
import { AuthAPI } from '@/api/unidealApi';

export default function EditProfile() {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem('unideal_user'));

  const [email, setEmail] = useState(savedUser?.email || '');
  const [matric, setMatric] = useState(savedUser?.matric || '');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setMessage('');
    setError('');

    if (!email || !matric) {
      setError('Email and matric number are required.');
      return;
    }

    try {
      setLoading(true);

      const result = await AuthAPI.updateProfile(savedUser.id, {
        email,
        matric
      });

      if (result.success) {
        const updatedUser = {
          ...savedUser,
          email,
          matric
        };

        localStorage.setItem('unideal_user', JSON.stringify(updatedUser));
        setMessage('Profile updated successfully.');

        setTimeout(() => {
          navigate('/profile');
        }, 800);
      } else {
        setError(result.message || 'Profile update failed.');
      }
    } catch (err) {
      setError('Cannot connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold">Edit Personal Details</h1>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-4">
          {message && (
            <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
              {message}
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </p>
          )}

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@graduate.utm.my"
            />
          </div>

          <div className="space-y-2">
            <Label>Matric Number</Label>
            <Input
              value={matric}
              onChange={(e) => setMatric(e.target.value)}
              placeholder="A24CS0000"
            />
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </CardContent>
      </Card>

      <FigureLabel number="3.8" title="Edit Personal Details" />
    </div>
  );
}