'use client';

import { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { SearchFilters, ArticleType } from '@/types';
import { getYearOptions, getLanguageOptions, getSubjectOptions, getQuartileOptions } from '@/lib/utils';

interface AdvancedFiltersProps {
  filters: SearchFilters;
  onApply: (filters: Partial<SearchFilters>) => void;
  onReset: () => void;
}

const articleTypes: { value: ArticleType; label: string }[] = [
  { value: 'journal', label: 'Journal' },
  { value: 'conference', label: 'Conference' },
  { value: 'thesis', label: 'Thesis' },
  { value: 'dissertation', label: 'Dissertation' },
  { value: 'book', label: 'Book' },
  { value: 'article', label: 'Article' },
];

export function AdvancedFilters({ filters, onApply, onReset }: AdvancedFiltersProps) {
  const [open, setOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<Partial<SearchFilters>>({});
  const years = getYearOptions();
  const languages = getLanguageOptions();
  const subjects = getSubjectOptions();
  const quartiles = getQuartileOptions();

  const activeCount = Object.entries(filters).filter(([k, v]) => v !== undefined && v !== null && v !== '' && k !== 'query' && k !== 'page' && k !== 'perPage' && k !== 'sortBy').length;

  const handleApply = () => {
    onApply(localFilters);
    setOpen(false);
  };

  const handleReset = () => {
    setLocalFilters({});
    onReset();
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={() => setOpen(!open)} className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
              {activeCount}
            </Badge>
          )}
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {activeCount > 0 && (
          <Button variant="ghost" size="sm" onClick={handleReset} className="text-red-500 gap-1">
            <X className="h-3 w-3" /> Clear all
          </Button>
        )}
      </div>

      {open && (
        <div className="mt-4 rounded-xl border bg-white p-6 dark:bg-slate-900">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label>Year Range</Label>
              <div className="flex gap-2">
                <Select value={localFilters.yearFrom?.toString() || ''} onValueChange={(v) => setLocalFilters(prev => ({ ...prev, yearFrom: v ? parseInt(v) : undefined }))}>
                  <SelectTrigger><SelectValue placeholder="From" /></SelectTrigger>
                  <SelectContent className="max-h-60">
                    {years.map(y => <SelectItem key={y} value={y.toString()}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={localFilters.yearTo?.toString() || ''} onValueChange={(v) => setLocalFilters(prev => ({ ...prev, yearTo: v ? parseInt(v) : undefined }))}>
                  <SelectTrigger><SelectValue placeholder="To" /></SelectTrigger>
                  <SelectContent className="max-h-60">
                    {years.map(y => <SelectItem key={y} value={y.toString()}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Language</Label>
              <Select value={localFilters.language || ''} onValueChange={(v) => setLocalFilters(prev => ({ ...prev, language: v || undefined }))}>
                <SelectTrigger><SelectValue placeholder="All Languages" /></SelectTrigger>
                <SelectContent>
                  {languages.map(l => <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Subject</Label>
              <Select value={localFilters.subject || ''} onValueChange={(v) => setLocalFilters(prev => ({ ...prev, subject: v || undefined }))}>
                <SelectTrigger><SelectValue placeholder="All Subjects" /></SelectTrigger>
                <SelectContent className="max-h-60">
                  {subjects.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Quartile</Label>
              <Select value={localFilters.quartile || ''} onValueChange={(v) => setLocalFilters(prev => ({ ...prev, quartile: v || undefined }))}>
                <SelectTrigger><SelectValue placeholder="Any Quartile" /></SelectTrigger>
                <SelectContent>
                  {quartiles.map(q => <SelectItem key={q.value} value={q.value}>{q.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Document Type</Label>
              <div className="flex flex-wrap gap-2">
                {articleTypes.map(type => (
                  <Badge
                    key={type.value}
                    variant={localFilters.type === type.value ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setLocalFilters(prev => ({ ...prev, type: prev.type === type.value ? undefined : type.value }))}
                  >
                    {type.label}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Publisher</Label>
              <Input placeholder="Filter by publisher" value={localFilters.publisher || ''} onChange={(e) => setLocalFilters(prev => ({ ...prev, publisher: e.target.value }))} />
            </div>

            <div className="space-y-2">
              <Label>Min. Citations</Label>
              <Input type="number" placeholder="0" value={localFilters.citationMin || ''} onChange={(e) => setLocalFilters(prev => ({ ...prev, citationMin: e.target.value ? parseInt(e.target.value) : undefined }))} />
            </div>

            <div className="space-y-2 flex items-end">
              <div className="flex items-center gap-2">
                <Checkbox id="open-access" checked={localFilters.openAccess || false} onCheckedChange={(v) => setLocalFilters(prev => ({ ...prev, openAccess: v === true ? true : undefined }))} />
                <Label htmlFor="open-access">Open Access Only</Label>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={handleReset}>Reset</Button>
            <Button onClick={handleApply} className="bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
          </div>
        </div>
      )}
    </div>
  );
}
