'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { useSession } from 'next-auth/react'

export default function AdminUsersPage() {
    const { data: session } = useSession()
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState<any>(null)

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'EDITOR'
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        if (session?.user?.role !== 'ADMIN') return
        try {
            const res = await fetch('/api/admin/users')
            const json = await res.json()
            if (json.success) {
                setUsers(json.data)
            }
        } catch (error) {
            console.error('Failed to fetch users:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (user: any) => {
        setCurrentUser(user)
        setFormData({
            name: user.name,
            email: user.email,
            password: '', // Leave blank if not changing
            role: user.role
        })
        setIsEditing(true)
    }

    const handleCreateNew = () => {
        setCurrentUser(null)
        setFormData({
            name: '',
            email: '',
            password: '',
            role: 'EDITOR'
        })
        setIsEditing(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const url = currentUser
                ? `/api/admin/users/${currentUser.id}`
                : '/api/admin/users'

            const method = currentUser ? 'PUT' : 'POST'

            // Filter out empty password if editing
            const body: any = { ...formData }
            if (currentUser && !body.password) {
                delete body.password
            }

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            const json = await res.json()

            if (json.success) {
                alert(currentUser ? '更新成功' : '建立成功')
                setIsEditing(false)
                fetchUsers()
            } else {
                alert(json.error || '操作失敗')
            }
        } catch (error) {
            console.error('Operation failed:', error)
            alert('發生錯誤')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('確定要刪除此使用者嗎？此動作無法復原。')) return

        try {
            const res = await fetch(`/api/admin/users/${id}`, {
                method: 'DELETE'
            })
            const json = await res.json()
            if (json.success) {
                fetchUsers()
            } else {
                alert(json.error || '刪除失敗')
            }
        } catch (error) {
            alert('刪除失敗')
        }
    }

    // Non-admin view (simplified profile edit) could go here, but for now assuming admin access for this page
    if (loading && !users.length) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <div className="w-12 h-12 border-4 border-psmc-cyan border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="space-y-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">System Access</span>
                    <h1 className="text-4xl font-black text-psmc-navy tracking-tight uppercase">管理員帳號設定</h1>
                </div>
                {!isEditing && (
                    <button
                        onClick={handleCreateNew}
                        className="bg-psmc-cyan text-psmc-navy hover:bg-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-psmc-cyan/20 flex items-center gap-3"
                    >
                        <span className="material-icons-outlined">add</span>
                        新增管理員
                    </button>
                )}
            </header>

            {isEditing ? (
                <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden p-2 max-w-2xl mx-auto">
                    <CardContent className="p-10">
                        <h2 className="text-2xl font-black text-psmc-navy mb-8">{currentUser ? '編輯帳號' : '新增帳號'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">姓名</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="admin-input"
                                    placeholder="使用者姓名"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="admin-input"
                                    placeholder="user@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                                    密碼 {currentUser && '(留空代表不修改)'}
                                </label>
                                <input
                                    type="password"
                                    required={!currentUser}
                                    value={formData.password}
                                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    className="admin-input"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">權限角色</label>
                                <select
                                    value={formData.role}
                                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                                    className="admin-input"
                                >
                                    <option value="EDITOR">Editor (編輯)</option>
                                    <option value="ADMIN">Admin (最高權限)</option>
                                </select>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 bg-slate-100 text-slate-400 hover:bg-slate-200 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
                                >
                                    取消
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-psmc-navy text-white hover:bg-psmc-cyan hover:text-psmc-navy py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl"
                                >
                                    確認儲存
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <Card key={user.id} className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden group">
                            <CardContent className="p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-black ${user.role === 'ADMIN' ? 'bg-psmc-navy' : 'bg-slate-300'}`}>
                                        {user.name[0].toUpperCase()}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-psmc-navy transition-all"
                                        >
                                            <span className="material-icons-outlined text-lg">edit</span>
                                        </button>
                                        {user.id !== parseInt(session?.user?.id as string) && (
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="w-10 h-10 rounded-full hover:bg-red-50 flex items-center justify-center text-slate-300 hover:text-red-500 transition-all"
                                            >
                                                <span className="material-icons-outlined text-lg">delete</span>
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-psmc-navy mb-1">{user.name}</h3>
                                <p className="text-sm text-slate-400 font-bold mb-4">{user.email}</p>

                                <div className="flex items-center gap-2">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${user.role === 'ADMIN'
                                            ? 'bg-psmc-cyan/10 text-psmc-cyan'
                                            : 'bg-slate-100 text-slate-400'
                                        }`}>
                                        {user.role}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
