import React, { useState } from 'react'
import { Form, FormData, Fields } from './form'
import { Validator, FormRules, FormErrors } from './validator'

export const FormExample: React.FC = props => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  })
  const [fields] = useState<Fields[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
    // 可以考虑input传一个函数,兼容antdesign,或者type自定义
  ])
  const [errors, setErrors] = useState<FormErrors>({})
  const onSubmit:React.FormEventHandler<HTMLFormElement> = () => {
    // axios.post('/signIn', formData).then(success, fail)
    const rules: FormRules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
      {key: 'password', required: true},
    ]
    const errors = Validator(formData, rules)
    setErrors(errors)
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
            <button type="submit">提交</button>
            <button>返回</button>
          </>
        }
        onSubmit={onSubmit}
        onChange={newValue=>setFormData(newValue)}
        errors={errors}
      />

    </div>
  )
}
