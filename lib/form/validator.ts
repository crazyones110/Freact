import { FormData } from './form'
interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?(value: string): Promise<string>
}
export type FormRules = FormRule[]

// export interface FormErrors {
//   [K: string]: (string | Promise<any>)[]
// }

function isEmpty(value: any): boolean {
  // TODO 判断数组
  return value === undefined || value === null || value === ''
}
type OneError = string | Promise<string>
export const Validator = (
  formData: FormData,
  rules: FormRules,
  callback: (errors: any) => void,
): void => {
  const errors: any = {}
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
  }
  rules.forEach(rule => {
    const value = formData[rule.key]
    if (rule.validator) {
      // 自定义校验器
      const promise = rule.validator(value)
      addError(
        rule.key,
        promise.catch(errorMsg => errorMsg),
      )
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, 'required')
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, 'minLength')
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, 'maxLength')
      }
    }
    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      addError(rule.key, 'formatting')
    }
  })
  
  // 正解
  ;(async function () {
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        errors[key] = (await Promise.all(errors[key])).filter(Boolean)
      }
    }
    callback(errors)
  })()
  // callback(
  //   Object.fromEntries(
  //     // @ts-ignore
  //     Object.entries(errors).map(async ([k, v]) => {
  //       // @ts-ignore
  //       const syncResult = (await Promise.all(v)).filter(Boolean)
  //       return [k, syncResult]
  //     }),
  //   ),
  // )
}
