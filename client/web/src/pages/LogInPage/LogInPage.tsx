import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { EventHandler, useCallback } from 'react'
import { useState } from 'react'
import CustomButton, { buttonSize } from 'src/shared/CustomButton/CustomButton'
import CustomCard from 'src/shared/CustomCard/CustomCard'
import CustomForm from 'src/shared/CustomForm/CustomForm'

const LogInPage = () => {
  const [id, setId] = useState<String>('')
  const [password, setPassword] = useState('')

  const onChangeId = useCallback((e:React.FormEvent<HTMLInputElement>) => {
    const id = e.currentTarget.value;
    setId(id)
  },[])

  const onChangePassword = useCallback((e:React.FormEvent<HTMLInputElement>) => {
    const password = e.currentTarget.value;
    setPassword(password)
  },[])

  return (
    <>
      <MetaTags title="LogIn" description="LogIn page" />
      <CustomCard style='w-96 h-96 flex flex-col justify-center items-center'>
        <h5 className='text-trend-color' >{'LogIn Form'}</h5>
        <CustomForm onBlur={onChangeId} placeholder={'Id'}/>
        <CustomForm onBlur={onChangePassword} placeholder={'Password'}/>
        <CustomButton size={buttonSize.medium}>
          <p>
          {'로그인'}
          </p>
        </CustomButton>
      </CustomCard>
    </>
  )
}

export default LogInPage
