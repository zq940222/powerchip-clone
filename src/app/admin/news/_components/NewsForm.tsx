'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'

interface Category {
    id: number
    nameZh: string
    nameEn: string
    slug: string
}

interface NewsFormProps {
    initialData?: any
    onSubmit: (data: any, publish: boolean) => Promise<void>
    loading: boolean
}

export default function NewsForm({ initialData, onSubmit, loading }: NewsFormProps) {
    const [formData, setFormData] = useState({
        titleZh: initialData?.titleZh || '',
        titleEn: initialData?.titleEn || '',
        contentZh: initialData?.contentZh || '',
        contentEn: initialData?.contentEn || '',
        excerptZh: initialData?.excerptZh || '',
        excerptEn: initialData?.excerptEn || '',
        coverImage: initialData?.coverImage || '',
        categoryId: initialData?.categoryId || '',
        published: initialData?.published || false,
    })

    const [categories, setCategories] = useState<Category[]>([])
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('/api/categories')
                const json = await res.json()
                if (json.success) setCategories(json.data)
            } catch (err) {
                console.error('Failed to fetch categories:', err)
            }
        }
        fetchCategories()
    }, [])

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setUploading(true)
        const data = new FormData()
        data.append('file', file)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data,
            })
            const json = await res.json()
            if (json.success) {
                setFormData(prev => ({ ...prev, coverImage: json.data.url }))
            }
        } catch (err) {
            console.error('Upload failed:', err)
        } finally {
            setUploading(false)
        }
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData, formData.published) }} className="space-y-10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Editor Area */}
                <div className="lg:col-span-8 space-y-10">
                    {/* Chinese Content */}
                    <section className="space-y-6">
                        <h2 className="text-sm font-black text-psmc-cyan uppercase tracking-[0.3em] flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-psmc-cyan/30" />
                            中文內容 (ZH-TW)
                        </h2>
                        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden p-2">
                            <CardContent className="p-8 space-y-6">
                                <FormGroup label="文章標題" required>
                                    <input
                                        type="text"
                                        value={formData.titleZh}
                                        onChange={(e) => setFormData({ ...formData, titleZh: e.target.value })}
                                        className="admin-input"
                                        placeholder="輸入中文標題..."
                                        required
                                    />
                                </FormGroup>
                                <FormGroup label="文章簡介 (Excerpt)">
                                    <textarea
                                        rows={2}
                                        value={formData.excerptZh}
                                        onChange={(e) => setFormData({ ...formData, excerptZh: e.target.value })}
                                        className="admin-input"
                                        placeholder="簡單描述文章內容..."
                                    />
                                </FormGroup>
                                <FormGroup label="正文內容 (HTML)" required>
                                    <textarea
                                        rows={12}
                                        value={formData.contentZh}
                                        onChange={(e) => setFormData({ ...formData, contentZh: e.target.value })}
                                        className="admin-input font-mono text-sm leading-relaxed"
                                        placeholder="支援 HTML 格式內容..."
                                        required
                                    />
                                </FormGroup>
                            </CardContent>
                        </Card>
                    </section>

                    {/* English Content */}
                    <section className="space-y-6">
                        <h2 className="text-sm font-black text-psmc-cyan uppercase tracking-[0.3em] flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-psmc-cyan/30" />
                            English Content (EN)
                        </h2>
                        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden p-2">
                            <CardContent className="p-8 space-y-6">
                                <FormGroup label="文章標題 (英文)" required>
                                    <input
                                        type="text"
                                        value={formData.titleEn}
                                        onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                                        className="admin-input"
                                        placeholder="輸入英文標題..."
                                        required
                                    />
                                </FormGroup>
                                <FormGroup label="文章簡介 (英文)">
                                    <textarea
                                        rows={2}
                                        value={formData.excerptEn}
                                        onChange={(e) => setFormData({ ...formData, excerptEn: e.target.value })}
                                        className="admin-input"
                                        placeholder="簡單描述文章內容(英文)..."
                                    />
                                </FormGroup>
                                <FormGroup label="正文內容 (英文/HTML)" required>
                                    <textarea
                                        rows={12}
                                        value={formData.contentEn}
                                        onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
                                        className="admin-input font-mono text-sm leading-relaxed"
                                        placeholder="支援 HTML 格式內容..."
                                        required
                                    />
                                </FormGroup>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Sidebar Settings */}
                <div className="lg:col-span-4 space-y-10">
                    {/* Publishing */}
                    <section className="space-y-6">
                        <h2 className="text-sm font-black text-psmc-navy/40 uppercase tracking-[0.3em] flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-psmc-navy/10" />
                            發布設定
                        </h2>
                        <Card className="border-none shadow-2xl shadow-psmc-navy/5 rounded-[32px] overflow-hidden bg-psmc-navy p-2 text-white">
                            <CardContent className="p-8 space-y-8">
                                <FormGroup label="文章分類" textColor="text-white/40">
                                    <select
                                        value={formData.categoryId}
                                        onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-psmc-cyan transition-all outline-none font-bold"
                                    >
                                        <option value="" className="text-psmc-navy">選擇分類...</option>
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id} className="text-psmc-navy">
                                                {cat.nameZh} / {cat.nameEn}
                                            </option>
                                        ))}
                                    </select>
                                </FormGroup>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-4 cursor-pointer group">
                                        <div className={cn(
                                            "w-14 h-8 rounded-full transition-all relative",
                                            formData.published ? "bg-psmc-cyan" : "bg-white/10"
                                        )} onClick={() => setFormData({ ...formData, published: !formData.published })}>
                                            <div className={cn(
                                                "absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all",
                                                formData.published ? "left-7" : "left-1"
                                            )} />
                                        </div>
                                        <span className="font-black uppercase tracking-widest text-xs">
                                            {formData.published ? '公開發布 (Public)' : '保存草稿 (Draft)'}
                                        </span>
                                    </label>
                                </div>

                                <div className="pt-4 space-y-4">
                                    <button
                                        type="button"
                                        onClick={() => onSubmit(formData, false)}
                                        className="w-full bg-white/10 hover:bg-white/20 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3"
                                        disabled={loading}
                                    >
                                        儲存變更
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onSubmit(formData, true)}
                                        className="w-full bg-psmc-cyan text-psmc-navy hover:bg-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-psmc-cyan/20 flex items-center justify-center gap-3"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <div className="w-4 h-4 border-2 border-psmc-navy border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span className="material-icons-outlined text-lg">publish</span>
                                                立即發布新聞
                                            </>
                                        )}
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Featured Image */}
                    <section className="space-y-6">
                        <h2 className="text-sm font-black text-psmc-navy/40 uppercase tracking-[0.3em] flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-psmc-navy/10" />
                            封面圖片
                        </h2>
                        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden p-2">
                            <CardContent className="p-8">
                                {formData.coverImage ? (
                                    <div className="space-y-4">
                                        <div className="relative group">
                                            <img src={formData.coverImage} className="w-full aspect-video object-cover rounded-2xl shadow-lg" alt="" />
                                            <button
                                                onClick={() => setFormData({ ...formData, coverImage: '' })}
                                                className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl text-white font-black uppercase tracking-widest text-xs gap-2"
                                            >
                                                <span className="material-icons-outlined">delete</span>
                                                移除圖片
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <label className="flex flex-col items-center justify-center w-full aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] cursor-pointer hover:bg-slate-100 hover:border-psmc-cyan transition-all group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <span className="material-icons-outlined text-4xl text-slate-300 mb-4 group-hover:scale-110 group-hover:text-psmc-cyan transition-all">cloud_upload</span>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">點擊上傳封面</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
                                    </label>
                                )}
                                {uploading && (
                                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-psmc-cyan animate-pulse">
                                        <span className="w-2 h-2 rounded-full bg-psmc-cyan" />
                                        上傳中...
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </form>
    )
}

function FormGroup({ label, children, required, textColor = "text-psmc-navy/40" }: any) {
    return (
        <div className="space-y-3">
            <label className={cn("text-[10px] font-black uppercase tracking-[0.2em] ml-2 flex items-center gap-1", textColor)}>
                {label} {required && <span className="text-psmc-cyan">*</span>}
            </label>
            {children}
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}
