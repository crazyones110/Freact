import { FormData } from './form'
interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?: {
    name: string
    validate(inputValue: string): Promise<void>
  }
}
export type FormRules = FormRule[]

// export interface FormErrors {
//   [K: string]: (string | Promise<any>)[]
// }

function isEmpty(value: any): boolean {
  // TODO 判断数组
  return value === undefined || value === null || value === ''
}
interface Error {
  msg: string
  promise?: Promise<any>
}
export const Validator = (
  formData: FormData,
  rules: FormRules,
  callback: (errors: any) => void,
): void => {
  const errors: any = {}
  const addError = (key: string, error: Error) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
  }
  rules.map(rule => {
    const value = formData[rule.key]
    if (rule.validator) {
      // 自定义校验器
      const promise = rule.validator.validate(value)
      addError(rule.key, { msg: rule.validator.name, promise })
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, { msg: 'required' })
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, { msg: 'minLength' })
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, { msg: 'maxLength' })
      }
    }
    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      addError(rule.key, { msg: 'formatting' })
    }
  })
  const promiseList = flat(Object.values(errors))
    .filter((item: any) => item.promise)
    .map((item: any) => item.promise)
  Promise.all(promiseList).finally(() => {
    Object.keys(errors).forEach(key => {
      errors[key] = errors[key].map((item: any) => item.msg)
    })
    callback(errors)
  })
}

const flat = (array: any): any =>
  array.reduce(
    (resultArr: any, current: any) =>
      Array.isArray(current)
        ? resultArr.concat(current)
        : [...resultArr, current],
    [],
  )
