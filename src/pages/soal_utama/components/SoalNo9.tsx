import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";

type FormType = {
  username: string;
  password: string;
}

type AuthType = {
  authenticated: boolean;
  username: string;
}

export default function SoalNo9() {
  const [formValue, setFormValue] = useState<FormType>({ username: "", password: "" })
  const [auth, setAuth] = useState<AuthType | null>(null)
  
  useEffect(() => {
    const dataAuth = localStorage.getItem("auth")

    if(dataAuth) {
      setAuth(JSON.parse(dataAuth))
    }
  }, [])


  function handleChangeForm(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target

    setFormValue(prevForm => (
      {
        ...prevForm,
        [name]: value
      }
    ))
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    try {
      const dataAuth: AuthType = {
        authenticated: true,
        username: formValue.username
      }
  
      localStorage.setItem("auth", JSON.stringify(dataAuth))
      setAuth(dataAuth)
    } catch (error) {
      if(error instanceof Error) {
        throw new Error(`Terdapat kesalahan, ${error.message}`)
      }
      throw new Error('unknow error occured')
    }
  }

  function handleLogout(): void {
    localStorage.removeItem("auth")
    setAuth(null)
  }
  
  return (
    <div className="flex justify-center items-center h-[500px]">
      {
        auth && auth.authenticated ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Selamat Datang</h3>
            <p>{ auth.username }</p>
            <Button onClick={handleLogout} color="danger" variant="solid">Logout</Button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-4 border border-slate-700 rounded-xl px-10 py-20">
            <div className="flex gap-4">
              <p>Username</p>
              <Input 
                value={formValue.username} 
                name="username"
                placeholder="Masukkan Username"
                onChange={(e) => handleChangeForm(e)} />
            </div>

            <div className="flex gap-4">
              <p>Password</p>
              <Input.Password 
                value={formValue.password} 
                name="password"
                placeholder="Masukkan Password" 
                onChange={(e) => handleChangeForm(e)} />
            </div>

            <Button htmlType="submit" type="primary">Login</Button>
          </form>
        )
      }

    </div>
  )
}
