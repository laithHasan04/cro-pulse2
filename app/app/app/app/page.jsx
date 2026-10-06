"use client";

import React, { useState } from 'react';
import { 
  Sparkles, Zap, ShieldCheck, AlertTriangle, TrendingUp, Copy, Check, 
  RefreshCw, Target, Layers, ShoppingBag, Download, XCircle, CheckCircle2 
} from 'lucide-react';

export default function CROAuditorSaaS() {
  const [urlInput, setUrlInput] = useState('');
  const [productCopy, setProductCopy] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [auditResult, setAuditResult] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const scanStepsText = [
    'جاري فحص بناء الصفحة وهيكل العرض...',
    'تحليل النصوص التسويقية باستخدام المحرك النفسي...',
    'قياس مؤشرات الثقة ومحفزات الشراء الفوري...',
    'حساب معدل التحويل التقديري وتوليد التقرير...'
  ];

  const handleStartAudit = (e) => {
    e.preventDefault();
    if (!urlInput && !productCopy) return;

    setIsAnalyzing(true);
    setScanStep(0);
    setAuditResult(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < scanStepsText.length) {
        setScanStep(step);
      } else {
        clearInterval(interval);
        generateMockAudit();
        setIsAnalyzing(false);
      }
    }, 900);
  };

  const generateMockAudit = () => {
    setAuditResult({
      score: 68,
      potentialLift: '+34%',
      lostRevenueEst: '$3,850/شهرياً',
      categories: { copywriting: 62, trust: 85, cta: 54, ux: 72 },
      criticalFixes: [
        {
          id: 1,
          title: 'زر الشراء ضعيف بصرياً ويفتقر للوضوح',
          issue: 'العنوان الحالي "اطلب الآن" لا يوضح القيمة الفورية المستفادة.',
          solution: 'تغيير النص إلى: "احصل على خصم 20% + شحن مجاني اليوم فقط"',
          impact: 'عالي جداً (+14% تحويل)'
        },
        {
          id: 2,
          title: 'العنوان الرئيسي لا يعالج المشكلة الأساسية للعميل',
          issue: 'الوصف يعتمد على خصائص المنتج وليس المنافع المباشرة.',
          solution: 'البدء بـ Hook قوي يركز على النتائج بأسلوب الألم/الحل.',
          impact: 'عالي (+12% تحويل)'
        }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans dir-rtl" dir="rtl">
      <header className="border-b border-slate-800 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-white">CRO Pulse</span>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
            ترقية الحساب
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            حوّل زوار متجرك إلى <span className="text-indigo-400">مبيعات فورية</span>
          </h1>
          <p className="text-slate-400">أدخل رابط منتجك أو النص التسويقي للحصول على تحليل ذكي فوري.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
          <form onSubmit={handleStartAudit} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-2">رابط صفحة المنتج (URL)</label>
              <input 
                type="url" 
                placeholder="https://yourstore.com/product/..." 
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm dir-ltr text-white"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-2">أو نص الوصف / الإعلان</label>
              <textarea 
                rows="3"
                placeholder="ألصق النص هنا..." 
                value={productCopy}
                onChange={(e) => setProductCopy(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-white resize-none"
              />
            </div>
            <button 
              type="submit" 
              disabled={isAnalyzing || (!urlInput && !productCopy)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2"
            >
              {isAnalyzing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {isAnalyzing ? 'جاري التحليل...' : 'بدء الفحص والتحليل الفوري'}
            </button>
          </form>
        </div>

        {auditResult && (
          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <p className="text-xs text-slate-400 mb-1">التقييم الحالي</p>
                <span className="text-4xl font-black text-white">{auditResult.score}/100</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <p className="text-xs text-slate-400 mb-1">زيادة المبيعات المتوقعة</p>
                <span className="text-4xl font-black text-emerald-400">{auditResult.potentialLift}</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <p className="text-xs text-slate-400 mb-1">الأرباح المفقودة التقديرية</p>
                <span className="text-4xl font-black text-rose-400">{auditResult.lostRevenueEst}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
