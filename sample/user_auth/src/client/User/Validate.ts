import { z } from 'zod';
//
const FormData = z.object({
  email: z
    .string()
    .min(1, { message: '1文字以上入力してください。' }),
  password: z
    .string()
    .min(4, { message: '4文字以上入力してください。' }),
  name: z
    .string()
    .min(1, { message: '1文字以上入力してください。' }),
});
//
const Validate = {
  /**
   * 
   * @param
   *
   * @return
   */
  formValidate: function(input){
    let errors = {};
    try {
      FormData.parse(input);
//console.log(input);
      return errors;
    } catch (e) {
      console.error(e.flatten().fieldErrors);
      return e.flatten().fieldErrors;
    }
  },
}
export default Validate;
