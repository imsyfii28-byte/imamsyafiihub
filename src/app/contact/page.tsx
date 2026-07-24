'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Have questions or suggestions? We&apos;d love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2"><MessageSquare className="h-5 w-5 text-blue-600" /> Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Name</Label><Input placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required /></div>
                <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required /></div>
              </div>
              <div className="space-y-2"><Label>Subject</Label><Input placeholder="How can we help?" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} required /></div>
              <div className="space-y-2"><Label>Message</Label><Textarea rows={5} placeholder="Tell us more..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required /></div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 gap-2"><Send className="h-4 w-4" /> Send Message</Button>
            </form>
          </Card>

          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div><p className="font-medium text-sm">Email</p><p className="text-sm text-slate-500">contact@imamsyafiihub.ai</p></div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div><p className="font-medium text-sm">Location</p><p className="text-sm text-slate-500">Jakarta, Indonesia</p></div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div><p className="font-medium text-sm">Phone</p><p className="text-sm text-slate-500">+62 123 4567 890</p></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
