'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'

interface ContactPageProps {
  params: { locale: string }
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    alert(locale === 'zh-TW' ? '感謝您的來信，我們將盡快回覆。' : 'Thank you for your message. We will respond soon.')
  }

  const [contactInfo, setContactInfo] = useState({
    addressZh: '台灣新竹科學園區力行一路12號',
    addressEn: 'No. 12, Li-Hsin 1st Rd., Hsinchu Science Park, Taiwan',
    phone: '+886-3-578-0000',
    fax: '+886-3-578-0001',
    serviceEmail: 'service@powerchip.com',
    irEmail: 'ir@powerchip.com'
  })

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch('/api/contact')
        const json = await res.json()
        if (json.success) {
          setContactInfo(prev => ({ ...prev, ...json.data }))
        }
      } catch (err) {
        console.error('Failed to fetch contact info:', err)
      }
    }
    fetchInfo()
  }, [])

  const contactMethods = [
    {
      icon: 'location_on',
      title: locale === 'zh-TW' ? '總部地址' : 'Global Headquarters',
      content: locale === 'zh-TW' ? contactInfo.addressZh : contactInfo.addressEn,
      color: 'bg-psmc-navy'
    },
    {
      icon: 'phone',
      title: locale === 'zh-TW' ? '聯繫電話' : 'Direct Support',
      content: contactInfo.phone,
      subContent: `Fax: ${contactInfo.fax}`,
      color: 'bg-psmc-cyan'
    },
    {
      icon: 'mail',
      title: locale === 'zh-TW' ? '電子郵件' : 'Email Inquiry',
      content: contactInfo.serviceEmail,
      subContent: `${contactInfo.irEmail} (Investor Relations)`,
      color: 'bg-psmc-teal'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact_hero.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-psmc-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy via-psmc-navy/20 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Connect with PSMC</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
              {locale === 'zh-TW' ? '聯繫我們' : 'Contact Us'}
            </h1>
            <div className="w-24 h-1.5 bg-psmc-cyan mb-8 rounded-full" />
            <p className="text-2xl text-white/70 max-w-2xl font-light">
              {locale === 'zh-TW' ? '無論是業務需求或技術諮詢，我們專業團隊隨時為您提供支援。' : 'Whether for business needs or technical inquiries, our professional team is ready to support you.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-24 relative -mt-24 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-[40px] overflow-hidden group h-full">
                  <CardContent className="p-12">
                    <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform shadow-lg`}>
                      <span className="material-icons-outlined text-3xl">{method.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-psmc-navy mb-4">{method.title}</h3>
                    <p className="text-slate-500 font-light text-lg leading-relaxed mb-1">{method.content}</p>
                    {method.subContent && <p className="text-slate-400 font-light text-sm">{method.subContent}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-32 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-6 block">Inquiry</span>
                <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-10 tracking-tight">Send us a message</h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                  Please fill out the form below, and our specialized departments will get back to you within 24-48 business hours. We value your feedback and interest in PSMC.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-psmc-cyan">
                      <span className="material-icons-outlined">done_all</span>
                    </div>
                    <p className="font-bold text-psmc-navy">Professional Consultation</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-psmc-cyan">
                      <span className="material-icons-outlined">done_all</span>
                    </div>
                    <p className="font-bold text-psmc-navy">Global Service Network</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-psmc-cyan">
                      <span className="material-icons-outlined">done_all</span>
                    </div>
                    <p className="font-bold text-psmc-navy">Dedicated 1-on-1 Support</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-12 md:p-16 rounded-[60px] shadow-sm border border-slate-100"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border-none rounded-2xl p-6 focus:ring-4 focus:ring-psmc-cyan/20 transition-all font-bold placeholder:text-slate-300"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white border-none rounded-2xl p-6 focus:ring-4 focus:ring-psmc-cyan/20 transition-all font-bold placeholder:text-slate-300"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                    <select
                      className="w-full bg-white border-none rounded-2xl p-6 focus:ring-4 focus:ring-psmc-cyan/20 transition-all font-bold appearance-none cursor-pointer"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a topic</option>
                      <option value="sales">Foundry Sales Inquiry</option>
                      <option value="tech">Technical Support</option>
                      <option value="ir">Investor Relations</option>
                      <option value="career">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-white border-none rounded-3xl p-6 focus:ring-4 focus:ring-psmc-cyan/20 transition-all font-bold placeholder:text-slate-300 resize-none"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-psmc-navy text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-psmc-cyan transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:scale-95"
                  >
                    Send Message Now
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Map / Office Locations */}
      <section className="py-24 bg-psmc-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 tracking-tighter uppercase">Global Presence</h2>
          <p className="text-white/60 mb-16 max-w-xl mx-auto font-light">
            From Hsinchu to the rest of the world, we are strategically positioned to serve the global semiconductor market.
          </p>
          <div className="max-w-5xl mx-auto rounded-[60px] overflow-hidden border border-white/10 shadow-2xl h-[400px] bg-white/5 relative flex items-center justify-center">
            <span className="material-icons-outlined text-9xl opacity-10">public</span>
            <p className="absolute text-psmc-cyan font-black uppercase tracking-[0.5em] text-sm animate-pulse">Map Simulation Active</p>
          </div>
        </div>
      </section>
    </div>
  )
}
