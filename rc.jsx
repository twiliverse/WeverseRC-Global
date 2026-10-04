import React, { useState } from 'react';
import { 
  Globe, MapPin, Sparkles, MessageSquare, Heart, Share2, 
  Radio, ShieldCheck, Tag, Plus, Flame, Award, Volume2, Users
} from 'lucide-react';

const WeverseRCIndia = () => {
  const [activeCircle, setActiveCircle] = useState('mumbai');
  const [language, setLanguage] = useState('EN');
  const [activeTab, setActiveTab] = useState('feed');
  const [postText, setPostText] = useState('');
  const [selectedTag, setSelectedTag] = useState('#HYBEIndia');

  // Simulated Localized Feed Data
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Aanya_RM_7',
      circle: 'Mumbai Circle 🌊',
      role: 'Founding Member',
      isVerified: true,
      time: '12 mins ago',
      content: 'Massive streaming party setup for the upcoming drop at Marine Drive this weekend! 💜 We have 200+ local Desi ARMYs joining. Cup-sleeve event details in thread!',
      tags: ['#MumbaiStreamParty', '#DesiARMY', '#HYBEIndia'],
      likes: 1420,
      comments: 184,
      translated: false,
      hindiContent: 'इस सप्ताहांत मरीन ड्राइव पर आगामी ड्रॉप के लिए बड़े पैमाने पर स्ट्रीमिंग पार्टी सेटअप! 💜 200+ स्थानीय देसी ARMY शामिल हो रहे हैं।'
    },
    {
      id: 2,
      author: 'IITM_Bangtan_Club',
      circle: 'IIT Madras Chapter 🏛️',
      role: 'Campus Circle Lead',
      isVerified: true,
      time: '1 hour ago',
      content: 'Paradox 26 K-Pop night sync is live on the campus quad screen! Syncing WebSockets for 1,000+ students live on Weverse RCIndia.',
      tags: ['#IITMadras', '#CampusCircle', '#WeverseSync'],
      likes: 890,
      comments: 62,
      translated: false,
      hindiContent: 'आईआईटी मद्रास कैंपस क्वाड स्क्रीन पर के-पॉप नाइट सिंक लाइव है!'
    }
  ]);

  const circles = [
    { id: 'all', name: 'Pan-India Feed 🇮🇳' },
    { id: 'mumbai', name: 'Mumbai Circle 🌊' },
    { id: 'delhi', name: 'Delhi NCR Chapter 🏛️' },
    { id: 'iitm', name: 'IIT Madras Circle 🎓' },
    { id: 'bengaluru', name: 'Bengaluru Tech Hub ⚡' }
  ];

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'Twishu_Dev',
      circle: circles.find(c => c.id === activeCircle)?.name || 'Pan-India Feed 🇮🇳',
      role: 'Beta Tester',
      isVerified: true,
      time: 'Just now',
      content: postText,
      tags: [selectedTag, '#WeverseRCIndia'],
      likes: 1,
      comments: 0,
      translated: false,
      hindiContent: postText
    };

    setPosts([newPost, ...posts]);
    setPostText('');
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] text-slate-100 font-sans p-2 sm:p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-[#14161d] border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* TOP BAR: Branding & Regional Circle Selector */}
        <header className="p-4 bg-[#1a1d26]/90 backdrop-blur-md border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-emerald-400 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-purple-500/20">
              W
            </div>
            <div>
              <h1 className="font-bold text-base tracking-wide flex items-center gap-1.5 text-white">
                Weverse <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400 font-black">RCIndia</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-medium">Regional Fan Infrastructure</p>
            </div>
          </div>

          {/* Circle Selector & Language Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#0d0e12] border border-slate-700/60 rounded-lg px-2.5 py-1 text-xs text-purple-300">
              <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              <select 
                value={activeCircle} 
                onChange={(e) => setActiveCircle(e.target.value)}
                className="bg-transparent border-none text-xs text-slate-200 focus:outline-none cursor-pointer"
              >
                {circles.map(c => (
                  <option key={c.id} value={c.id} className="bg-[#14161d] text-slate-200">{c.name}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => setLanguage(l => l === 'EN' ? 'HI' : 'EN')}
              className="flex items-center gap-1 bg-purple-950/40 border border-purple-500/30 text-purple-300 px-2.5 py-1 rounded-lg text-xs font-semibold hover:bg-purple-900/50 transition"
            >
              <Globe className="w-3 h-3 text-purple-400" />
              {language}
            </button>
          </div>
        </header>

        {/* LIVE STREAMING PARTY SYNC WIDGET */}
        <section className="bg-gradient-to-r from-purple-950/60 via-[#181528] to-slate-900 p-3.5 border-b border-purple-800/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-emerald-400 relative" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  India Stream Party: BTS Comeback Live
                </span>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded font-mono border border-emerald-500/20">
                  SYNCED
                </span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                <Users className="w-3 h-3 text-slate-500" /> 48,210 Desi ARMYs Active
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md transition flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5" /> Join Sync
          </button>
        </section>

        {/* MAIN FEED CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* POST CREATOR BOX */}
          <div className="bg-[#1a1d26] border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <form onSubmit={handlePostSubmit}>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder={`Share an update in ${circles.find(c => c.id === activeCircle)?.name}...`}
                className="w-full bg-[#0d0e12] border border-slate-800 rounded-lg p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 resize-none h-20 transition"
              />
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-1.5">
                  {['#HYBEIndia', '#MumbaiARMY', '#DesiStream'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={`text-[10px] px-2 py-1 rounded-md transition ${selectedTag === tag ? 'bg-purple-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs px-4 py-1.5 rounded-lg transition flex items-center gap-1 shadow-md shadow-purple-900/20"
                >
                  <Plus className="w-3.5 h-3.5" /> Post
                </button>
              </div>
            </form>
          </div>

          {/* POSTS LIST */}
          <div className="space-y-3">
            {posts.map((post) => (
              <article key={post.id} className="bg-[#1a1d26] border border-slate-800/80 rounded-xl p-4 transition hover:border-slate-700/80">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xs text-white">
                      {post.author[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-xs text-slate-100">{post.author}</span>
                        {post.isVerified && <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />}
                        <span className="text-[10px] bg-slate-800 text-purple-300 px-1.5 py-0.2 rounded font-mono">{post.role}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-emerald-400" /> {post.circle} • {post.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <p className="text-xs text-slate-200 mt-3 leading-relaxed">
                  {language === 'HI' ? post.hindiContent : post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {post.tags.map((t) => (
                    <span key={t} className="text-[10px] text-purple-400/90 hover:underline cursor-pointer font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interaction Footer */}
                <div className="flex items-center justify-between border-t border-slate-800/60 pt-3 mt-3 text-slate-400 text-xs">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-rose-400 transition">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-mono">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-purple-400 transition">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-mono">{post.comments}</span>
                    </button>
                  </div>
                  <button className="hover:text-slate-200 transition">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* FOOTER: Digital Photocard Vault Teaser */}
        <footer className="p-3 bg-[#111319] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Regional Collector Badge: <strong className="text-slate-200">Mumbai Launch Founding ARMY</strong></span>
          </div>
          <span className="text-purple-400 font-mono text-[10px]">VERIFIED ON-CHAIN</span>
        </footer>

      </div>
    </div>
  );
};

export default WeverseRCIndia;
