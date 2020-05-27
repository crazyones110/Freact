import { FormData, Errors } from './form'
interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?(value: string): Promise<string>
}
export type FormRules = FormRule[]

function isEmpty(value: unknown): boolean {
  // TODO 判断数组
  return value === undefined || value === null || value === ''
}
type OneError = string | Promise<string>

export const Validator = (
  formData: FormData,
  rules: FormRules,
  callback: (errors: Errors) => void,
): void => {
  const errors: {
    [key: string]: OneError[]
  } = {}
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
    callback(errors as Errors)
  })()

  // another solution
  // ;(async function () {
  //   callback(
  //     Object.fromEntries(
  //       await Promise.all(Object.entries(errors).map(async ([key, values]) =>
  //         [key, (await Promise.all(values)).filter(Boolean)]
  //       ))
  //     )
  //   )
  // })()
}
