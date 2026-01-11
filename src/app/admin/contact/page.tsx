'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'

export default function AdminContactPage() {
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        addressZh: '',
        addressEn: '',
        phone: '',
        fax: '',
        serviceEmail: '',
        irEmail: ''
    })

    useEffect(() => {
        fetchContactInfo()
    }, [])

    const fetchContactInfo = async () => {
        try {
            const res = await fetch('/api/contact')
            const json = await res.json()
            if (json.success) {
                setFormData(json.data)
            }
        } catch (error) {
            console.error('Failed to fetch contact info:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const json = await res.json()
            if (json.success) {
                alert('更新成功！')
            } else {
                alert('更新失敗')
            }
        } catch (error) {
            console.error('Failed to update:', error)
            alert('更新失敗')
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <div className="w-12 h-12 border-4 border-psmc-cyan border-t-transparent rounded-full animate-spin" />
                <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Loading...</div>
            </div>
        )
    }

    return (
        <div className="space-y-10">
            <header>
                <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Settings</span>
                <h1 className="text-4xl font-black text-psmc-navy tracking-tight uppercase">聯絡資訊管理</h1>
            </header>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="space-y-6">
                    <h2 className="text-sm font-black text-psmc-cyan uppercase tracking-[0.3em] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-psmc-cyan/30" />
                        基本資訊
                    </h2>
                    <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden p-2">
                        <CardContent className="p-8 space-y-6">
                            <FormGroup label="公司電話">
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="admin-input"
                                    placeholder="+886-3-578-0000"
                                />
                            </FormGroup>
                            <FormGroup label="公司傳真">
                                <input
                                    type="text"
                                    value={formData.fax}
                                    onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                                    className="admin-input"
                                    placeholder="+886-3-578-0001"
                                />
                            </FormGroup>
                            <FormGroup label="客服信箱">
                                <input
                                    type="email"
                                    value={formData.serviceEmail}
                                    onChange={(e) => setFormData({ ...formData, serviceEmail: e.target.value })}
                                    className="admin-input"
                                    placeholder="service@powerchip.com"
                                />
                            </FormGroup>
                            <FormGroup label="投資人信箱">
                                <input
                                    type="email"
                                    value={formData.irEmail}
                                    onChange={(e) => setFormData({ ...formData, irEmail: e.target.value })}
                                    className="admin-input"
                                    placeholder="ir@powerchip.com"
                                />
                            </FormGroup>
                        </CardContent>
                    </Card>
                </section>

                <section className="space-y-6">
                    <h2 className="text-sm font-black text-psmc-cyan uppercase tracking-[0.3em] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-psmc-cyan/30" />
                        地址設定
                    </h2>
                    <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden p-2">
                        <CardContent className="p-8 space-y-6">
                            <FormGroup label="中文地址 (ZH-TW)">
                                <textarea
                                    rows={3}
                                    value={formData.addressZh}
                                    onChange={(e) => setFormData({ ...formData, addressZh: e.target.value })}
                                    className="admin-input resize-none"
                                    placeholder="輸入中文地址..."
                                />
                            </FormGroup>
                            <FormGroup label="英文地址 (EN)">
                                <textarea
                                    rows={3}
                                    value={formData.addressEn}
                                    onChange={(e) => setFormData({ ...formData, addressEn: e.target.value })}
                                    className="admin-input resize-none"
                                    placeholder="Enter English address..."
                                />
                            </FormGroup>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-psmc-cyan text-psmc-navy hover:bg-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-psmc-cyan/20 flex items-center justify-center gap-3"
                                    disabled={saving}
                                >
                                    {saving ? (
                                        <div className="w-4 h-4 border-2 border-psmc-navy border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span className="material-icons-outlined text-lg">save</span>
                                            儲存設定
                                        </>
                                    )}
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </form>
        </div>
    )
}

function FormGroup({ label, children, required }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-psmc-navy/40 ml-2 flex items-center gap-1">
                {label} {required && <span className="text-psmc-cyan">*</span>}
            </label>
            {children}
        </div>
    )
}
