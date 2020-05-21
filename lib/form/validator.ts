import {FormData} from './form'
interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp
}
export type FormRules = FormRule[]

export interface FormErrors {
  [K: string]: string[]
}

function isEmpty(value: any): boolean {
  // TODO 判断数组
  return value === undefined || value === null || value === ''
}

export const Validator = (formData: FormData, rules: FormRules): FormErrors => {
  const errors: FormErrors = {}
  const addError = (key:string, msg: string) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(msg)
  }
  rules.map(rule => {
    const value = formData[rule.key]
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, '必填')
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length<rule.minLength) {
        addError(rule.key, '太短')
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length>rule.maxLength) {
        addError(rule.key, '太长')
      }
    }
    if (rule.pattern && !isEmpty(value) && !(rule.pattern.test(value))) {
      addError(rule.key, '格式不正确')
    }
  })
  return errors
}
