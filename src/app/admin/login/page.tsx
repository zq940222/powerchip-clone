'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('電子郵件或密碼錯誤')
      } else {
        router.push('/admin')
      }
    } catch {
      setError('登入失敗，請稍後再試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-psmc-navy p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-psmc-cyan/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <div className="w-14 h-14 bg-psmc-cyan rounded-2xl flex items-center justify-center text-psmc-navy font-black text-2xl group-hover:bg-white transition-all transform group-hover:rotate-12 shadow-2xl">P</div>
            <span className="text-3xl font-black text-white tracking-tighter">Portal</span>
          </Link>
          <h1 className="text-white text-lg font-black uppercase tracking-[0.4em] opacity-40">系統登入</h1>
        </div>

        <Card className="border-none bg-white/5 backdrop-blur-xl shadow-2xl rounded-[40px] overflow-hidden p-2">
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-xs font-bold uppercase tracking-widest text-center"
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">
                  帳號信箱
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-psmc-cyan transition-all outline-none font-bold"
                  placeholder="admin@powerchip.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">
                  登入密碼
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-psmc-cyan transition-all outline-none font-bold"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-psmc-cyan text-psmc-navy hover:bg-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-psmc-cyan/10 flex items-center justify-center gap-3 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-psmc-navy border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="material-icons-outlined text-xl">login</span>
                    登入管理系統
                  </>
                )}
              </button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-10 text-center text-white/20 text-[10px] font-black uppercase tracking-widest">
          © 2026 Powerchip Semiconductor Mfg. Corp.
        </p>
      </motion.div>
    </div>
  )
}
