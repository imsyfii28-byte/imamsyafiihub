'use client';

import { useState } from 'react';
import { Sparkles, Send, Bot, User, Loader2, ArrowRight, BookOpen, FileText, Lightbulb, Search, GitCompare, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

type AITool = {
  id: string;
  label: string;
  icon: any;
  description: string;
};

const aiTools: AITool[] = [
  { id: 'summarize', label: 'Summarize', icon: FileText, description: 'Get a concise summary of any research paper' },
  { id: 'keypoints', label: 'Key Points', icon: ListChecks, description: 'Extract the main points from a paper' },
  { id: 'explain', label: 'Explain Abstract', icon: BookOpen, description: 'Get a plain-language explanation' },
  { id: 'gap', label: 'Research Gap', icon: Search, description: 'Identify gaps in the literature' },
  { id: 'novelty', label: 'Novelty', icon: Lightbulb, description: 'Discover what makes this research novel' },
  { id: 'compare', label: 'Compare Papers', icon: GitCompare, description: 'Compare two or more papers' },
  { id: 'recommend', label: 'Recommend', icon: Sparkles, description: 'Get personalized paper recommendations' },
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m your AI Research Assistant. How can I help you with your research today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        summarize: 'Based on the provided paper, here is a concise summary:\n\nThis research presents a novel approach to addressing key challenges in the field. The authors propose a methodology that combines existing techniques with innovative solutions. Key findings suggest significant improvements over baseline methods, with potential applications in various domains. The paper is well-structured and provides comprehensive experimental validation.',
        keypoints: 'Key points from this research:\n\n1. Novel methodology combining multiple approaches\n2. Comprehensive experimental evaluation on benchmark datasets\n3. Significant performance improvements (15-20% over baselines)\n4. Practical implications for real-world applications\n5. Clear limitations and future work directions identified',
        explain: 'Here\'s a plain-language explanation of the abstract:\n\nThe researchers developed a new method that helps computers understand and process information more accurately. They tested their approach using standard benchmarks and found it performs better than existing methods. This could help improve various applications like search engines, translation tools, and automated assistants.',
        gap: 'Based on my analysis, here are identified research gaps:\n\n1. Limited evaluation on diverse, real-world datasets\n2. Lack of cross-domain generalization studies\n3. Unexplored edge cases and failure modes\n4. Need for longitudinal studies on practical deployment\n5. Integration with complementary approaches unexplored',
        novelty: 'The novelty of this research lies in:\n\n1. A novel architecture that combines attention mechanisms with graph neural networks\n2. Introduction of a new training paradigm that reduces computational cost by 40%\n3. First comprehensive evaluation on the newly released benchmark dataset\n4. Theoretical analysis providing convergence guarantees',
        compare: 'Paper Comparison Analysis:\n\n**Paper A** (this paper):\n- Strengths: Novel architecture, comprehensive evaluation\n- Focus: Theoretical foundation + practical validation\n\n**Paper B** (related work):\n- Strengths: Large-scale deployment, real-world metrics\n- Focus: Engineering scalability\n\n**Key Differences:**\n- This paper provides theoretical guarantees lacking in Paper B\n- Paper B has more extensive real-world testing\n- Different evaluation metrics make direct comparison challenging',
        recommend: 'Based on your research interests, I recommend:\n\n1. **Deep Learning for NLP** - Comprehensive survey of recent advances\n2. **Attention Mechanisms in Transformer Models** - Foundational reading\n3. **Graph Neural Networks for Scientific Discovery** - Cutting-edge research\n4. **Evaluation Methodologies in AI Research** - Methodological reference\n5. **Reproducibility in Machine Learning Research** - Best practices',
      };

      const response = responses[selectedTool || ''] || 'I understand your question. Let me analyze this carefully and provide you with detailed insights. Could you please share more specific details about what you\'re looking for?';
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
      setSelectedTool(null);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex flex-wrap gap-2 mb-4">
        {aiTools.map(tool => (
          <Badge
            key={tool.id}
            variant={selectedTool === tool.id ? 'default' : 'outline'}
            className="cursor-pointer gap-1 px-3 py-1.5"
            onClick={() => {
              setSelectedTool(tool.id);
              setInput(`Help me ${tool.label.toLowerCase()} this research paper`);
            }}
          >
            <tool.icon className="h-3 w-3" /> {tool.label}
          </Badge>
        ))}
      </div>

      <ScrollArea className="flex-1 mb-4">
        <div className="space-y-4 pr-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 h-fit">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-xl p-4 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}>
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              </div>
              {msg.role === 'user' && (
                <div className="p-2 rounded-lg bg-blue-600 h-fit">
                  <User className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4">
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Textarea
          placeholder="Ask anything about your research..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          className="min-h-[60px] resize-none"
        />
        <Button onClick={handleSend} disabled={loading || !input.trim()} className="bg-blue-600 hover:bg-blue-700">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
