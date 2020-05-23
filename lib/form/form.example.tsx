import React, { useState } from 'react'
import { Form, FormData, Fields } from './form'
import { Validator, FormRules } from './validator'
import {Button} from '../button/button'

const usernames = ['frank']
const checkUserName = (username: string, success: ()=>void, fail:()=>void) => {
  setTimeout(() => {
    if (usernames.includes(username)) {
      fail()
    } else {
      success()
    }
  }, 3000)
}

export const FormExample: React.FC = props => {
  const [formData, setFormData] = useState<FormData>({
    username: 'fan',
    password: '',
  })
  const [fields] = useState<Fields[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
    // 可以考虑input传一个函数,兼容antdesign,或者type自定义
  ])
  const [errors, setErrors] = useState<any>({})
  const onSubmit:React.FormEventHandler<HTMLFormElement> = () => {
    // axios.post('/signIn', formData).then(success, fail)
    const rules: FormRules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {
        key: 'username', validator: {
          name: 'unique',
          validate(username: string) {
            console.log('有人调用validate了')
            return new Promise((resolve, reject) => {
              checkUserName(username, resolve, reject)
            })
          }
        }
      },
      {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
      {key: 'password', required: true},
    ]
    Validator(formData, rules, (errors) => {
      console.log(errors)
      setErrors(errors)
    })
  }
  const transformError = (msg: string): string => {
    const map:any = {
      unique: '用户名已存在',
      minLength: 'too short'
    }
    return map[msg]
  }
  return (
    <div>
      {JSON.stringify(formData)}
      <Form
        value={formData}
        fields={fields}
        buttons={
          // 这里可以考虑改成renderProps,把onSubmit接口暴露给用户
          <>
            <Button type="submit" level="important">提交</Button>
            <Button>返回</Button>
          </>
        }
        onSubmit={onSubmit}
        onChange={newValue=>setFormData(newValue)}
        errors={errors}
        errorsDisplayMode="all"
        errorTranslation={transformError}
      />

    </div>
  )
}
