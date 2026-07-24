'use client';

import { useState } from 'react';
import { User, Mail, Calendar, Settings, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { mockUser } from '@/services/mock-data';
import { toast } from 'sonner';

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    toast.success('Profile updated');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Profile</h1>
        </div>

        <Card className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
              <p className="text-slate-500 dark:text-slate-400">{user.email}</p>
              <div className="flex items-center gap-4 mt-2 justify-center sm:justify-start text-sm text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Member since {new Date(user.createdAt).getFullYear()}</span>
                <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> {user.email}</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input value={user.name} onChange={e => setUser(prev => ({ ...prev, name: e.target.value }))} disabled={!editing} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={user.email} disabled />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              {editing ? (
                <>
                  <Button variant="outline" onClick={() => setEditing(false)}>Cancel</Button>
                  <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" /> Save Changes</Button>
                </>
              ) : (
                <Button onClick={() => setEditing(true)} className="gap-2"><Settings className="h-4 w-4" /> Edit Profile</Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
